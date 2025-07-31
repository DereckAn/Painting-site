# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a real-time multiplayer games server built with Bun and TypeScript. The server will host multiple classic games including Snake, Pong, Tic Tac Toe, Gomoku, and other basic games with real-time multiplayer functionality.

## Technology Stack

- **Runtime**: Bun (fast JavaScript runtime)
- **Language**: TypeScript with strict configuration
- **Module System**: ESNext with bundler module resolution

## Development Commands

```bash
# Install dependencies
bun install

# Run the server
bun run index.ts

# Development with auto-reload (when implemented)
bun --watch index.ts
```

## TypeScript Configuration

The project uses strict TypeScript settings with:
- Target: ESNext
- Module: Preserve (bundler mode)
- Strict mode enabled with additional safety checks
- `noUncheckedIndexedAccess` and `noImplicitOverride` enabled

## Architecture Notes

Currently a minimal setup with:
- Entry point: `index.ts` (currently just a hello world)
- Package manager: Bun with lockfile (`bun.lock`)
- No additional dependencies beyond TypeScript types

## Future Development Considerations

When implementing the multiplayer games server:
- WebSocket connections will be needed for real-time gameplay
- Game state management for multiple concurrent games
- Player session handling and matchmaking
- Individual game logic for Snake, Pong, Tic Tac Toe, Gomoku, etc.
- Potential database integration for player stats or game history