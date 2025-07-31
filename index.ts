import { ServerWebSocket } from "bun";

// Player types matching the frontend
type PlayerType = "X" | "O" | "triangle" | "square";

interface Player {
  id: string;
  name: string;
  symbol: PlayerType;
  socket: ServerWebSocket<unknown>;
}

interface GameRoom {
  id: string;
  maxPlayers: number;
  players: Player[];
  gameState: {
    board: (PlayerType | null)[][];
    currentPlayer: PlayerType;
    turnOrder: PlayerType[];
    status: "waiting" | "playing" | "won" | "draw";
    winner: PlayerType | null;
    moveCount: number;
    playerCount: number;
  };
  createdAt: Date;
}

class GomokuServer {
  private rooms = new Map<string, GameRoom>();
  private playerToRoom = new Map<string, string>();

  constructor() {
    console.log("🎮 Gomoku Server initialized");
  }

  generateRoomId(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  createRoom(maxPlayers: number): GameRoom {
    const roomId = this.generateRoomId();
    const playerSymbols: PlayerType[] = ["X", "O", "triangle", "square"];
    
    const room: GameRoom = {
      id: roomId,
      maxPlayers,
      players: [],
      gameState: {
        board: Array(15).fill(null).map(() => Array(15).fill(null)),
        currentPlayer: "X",
        turnOrder: playerSymbols.slice(0, maxPlayers),
        status: "waiting",
        winner: null,
        moveCount: 0,
        playerCount: maxPlayers,
      },
      createdAt: new Date(),
    };

    this.rooms.set(roomId, room);
    console.log(`📦 Room ${roomId} created for ${maxPlayers} players`);
    return room;
  }

  joinRoom(roomId: string, playerName: string, socket: ServerWebSocket<unknown>): string | null {
    const room = this.rooms.get(roomId);
    if (!room) return null;
    if (room.players.length >= room.maxPlayers) return null;

    const playerId = Math.random().toString(36).substring(2, 15);
    const playerSymbol = room.gameState.turnOrder[room.players.length];

    const player: Player = {
      id: playerId,
      name: playerName,
      symbol: playerSymbol,
      socket,
    };

    room.players.push(player);
    this.playerToRoom.set(playerId, roomId);

    // Start game when room is full
    if (room.players.length === room.maxPlayers) {
      room.gameState.status = "playing";
    }

    this.broadcastToRoom(roomId, {
      type: "room-update",
      room: this.getRoomInfo(room),
    });

    console.log(`👤 Player ${playerName} joined room ${roomId} as ${playerSymbol}`);
    return playerId;
  }

  makeMove(playerId: string, row: number, col: number): boolean {
    const roomId = this.playerToRoom.get(playerId);
    if (!roomId) return false;

    const room = this.rooms.get(roomId);
    if (!room) return false;

    const player = room.players.find(p => p.id === playerId);
    if (!player) return false;

    const { gameState } = room;
    
    // Validate move
    if (gameState.status !== "playing") return false;
    if (gameState.currentPlayer !== player.symbol) return false;
    if (gameState.board?[row][col] !== null) return false;

    // Make move
    gameState.board[row][col] = player.symbol;
    gameState.moveCount++;

    // Check for win (4 in a row for 3-4 players, 5 in a row for 2 players)
    const winLength = room.maxPlayers > 2 ? 4 : 5;
    if (this.checkWin(gameState.board, row, col, player.symbol, winLength)) {
      gameState.status = "won";
      gameState.winner = player.symbol;
    } else if (this.isBoardFull(gameState.board)) {
      gameState.status = "draw";
    } else {
      // Move to next player
      const currentIndex = gameState.turnOrder.indexOf(gameState.currentPlayer);
      const nextIndex = (currentIndex + 1) % gameState.turnOrder.length;
      gameState.currentPlayer = gameState.turnOrder[nextIndex];
    }

    this.broadcastToRoom(roomId, {
      type: "game-update",
      gameState: gameState,
      move: { row, col, player: player.symbol },
    });

    return true;
  }

  checkWin(board: (PlayerType | null)[][], row: number, col: number, player: PlayerType, winLength: number): boolean {
    const directions = [
      [0, 1],   // horizontal
      [1, 0],   // vertical
      [1, 1],   // diagonal \
      [1, -1],  // diagonal /
    ];

    for (const [dx, dy] of directions) {
      let count = 1; // Count the current piece

      // Check in positive direction
      for (let i = 1; i < winLength; i++) {
        const newRow = row + dx * i;
        const newCol = col + dy * i;
        if (newRow < 0 || newRow >= 15 || newCol < 0 || newCol >= 15) break;
        if (board[newRow][newCol] !== player) break;
        count++;
      }

      // Check in negative direction
      for (let i = 1; i < winLength; i++) {
        const newRow = row - dx * i;
        const newCol = col - dy * i;
        if (newRow < 0 || newRow >= 15 || newCol < 0 || newCol >= 15) break;
        if (board[newRow][newCol] !== player) break;
        count++;
      }

      if (count >= winLength) return true;
    }

    return false;
  }

  isBoardFull(board: (PlayerType | null)[][]): boolean {
    return board.every(row => row.every(cell => cell !== null));
  }

  leaveRoom(playerId: string): void {
    const roomId = this.playerToRoom.get(playerId);
    if (!roomId) return;

    const room = this.rooms.get(roomId);
    if (!room) return;

    room.players = room.players.filter(p => p.id !== playerId);
    this.playerToRoom.delete(playerId);

    if (room.players.length === 0) {
      this.rooms.delete(roomId);
      console.log(`🗑️ Room ${roomId} deleted (empty)`);
    } else {
      // Reset game state if someone leaves during game
      if (room.gameState.status === "playing") {
        room.gameState.status = "waiting";
        room.gameState.board = Array(15).fill(null).map(() => Array(15).fill(null));
        room.gameState.currentPlayer = "X";
        room.gameState.moveCount = 0;
        room.gameState.winner = null;
      }

      this.broadcastToRoom(roomId, {
        type: "room-update",
        room: this.getRoomInfo(room),
      });
    }
  }

  getRoomInfo(room: GameRoom) {
    return {
      id: room.id,
      maxPlayers: room.maxPlayers,
      currentPlayers: room.players.length,
      players: room.players.map(p => ({ name: p.name, symbol: p.symbol })),
      gameState: room.gameState,
    };
  }

  broadcastToRoom(roomId: string, message: any): void {
    const room = this.rooms.get(roomId);
    if (!room) return;

    room.players.forEach(player => {
      try {
        player.socket.send(JSON.stringify(message));
      } catch (error) {
        console.error(`Failed to send message to player ${player.name}:`, error);
      }
    });
  }

  handleMessage(socket: ServerWebSocket<unknown>, message: string): void {
    try {
      const data = JSON.parse(message);
      
      switch (data.type) {
        case "create-room":
          const room = this.createRoom(data.maxPlayers);
          const playerId = this.joinRoom(room.id, data.playerName, socket);
          if (playerId) {
            socket.send(JSON.stringify({
              type: "room-created",
              roomId: room.id,
              playerId: playerId,
              room: this.getRoomInfo(room),
            }));
          }
          break;

        case "join-room":
          const joinPlayerId = this.joinRoom(data.roomId, data.playerName, socket);
          if (joinPlayerId) {
            const roomInfo = this.rooms.get(data.roomId);
            socket.send(JSON.stringify({
              type: "room-joined",
              playerId: joinPlayerId,
              room: this.getRoomInfo(roomInfo!),
            }));
          } else {
            socket.send(JSON.stringify({
              type: "error",
              message: "Failed to join room",
            }));
          }
          break;

        case "make-move":
          const moveSuccess = this.makeMove(data.playerId, data.row, data.col);
          if (!moveSuccess) {
            socket.send(JSON.stringify({
              type: "error",
              message: "Invalid move",
            }));
          }
          break;

        case "leave-room":
          this.leaveRoom(data.playerId);
          break;
      }
    } catch (error) {
      console.error("Error handling message:", error);
      socket.send(JSON.stringify({
        type: "error",
        message: "Invalid message format",
      }));
    }
  }
}

const server = new GomokuServer();

// Start the Bun server with WebSocket support
const bunServer = Bun.serve({
  port: 3002,
  fetch(req, server) {
    // Handle WebSocket upgrade
    if (server.upgrade(req)) {
      return; // WebSocket connection handled
    }
    
    // Handle HTTP requests
    return new Response("Gomoku WebSocket Server", { status: 200 });
  },
  websocket: {
    open(ws) {
      console.log("🔌 WebSocket connection opened");
    },
    message(ws, message) {
      server.handleMessage(ws, message.toString());
    },
    close(ws) {
      console.log("🔌 WebSocket connection closed");
      // Find and remove player from any room
      // This is a simplified cleanup - in production you'd track player IDs properly
    },
  },
});

console.log(`🚀 Gomoku server running on port ${bunServer.port}`);