# Elite Painting Services Website

A modern, elegant painting services website built with Astro, Tailwind CSS v4, and TypeScript. Features a minimalist black and white design with sophisticated typography and smooth animations.

## 🎨 Design Philosophy

- **Minimalist Aesthetic**: Black, white, and grayscale color palette
- **Elegant Typography**: Playfair Display for headings, Inter for body text
- **Smooth Interactions**: Grayscale-to-color hover effects, subtle animations
- **Mobile-First**: Fully responsive design optimized for all devices
- **Performance-Focused**: Static site generation with Astro for lightning-fast loads

## 🚀 Tech Stack

- **[Astro 5.x](https://astro.build)** - Static Site Generator
- **[Tailwind CSS 4.x](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **[Embla Carousel](https://www.embla-carousel.com)** - Carousel/slider functionality
- **[Bun](https://bun.sh)** - Fast package manager and runtime

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images, fonts)
├── components/
│   ├── layout/         # Layout components (Header, Footer, Nav)
│   ├── sections/       # Page sections
│   │   ├── Hero.astro          # Hero/landing section
│   │   ├── About.astro         # About section with stats
│   │   ├── Services.astro      # Services grid
│   │   ├── Gallery.astro       # Project portfolio
│   │   ├── Team.astro          # Team carousel
│   │   └── Contact.astro       # Contact form
│   └── ui/             # Reusable UI components
│       ├── Button.astro
│       ├── Input.astro
│       ├── Textarea.astro
│       ├── Container.astro
│       └── Section.astro
├── config/             # App configuration
├── constants/          # Constants and static data
│   └── site.ts        # SEO defaults and site config
├── layouts/
│   └── Layout.astro   # Base layout with SEO and fonts
├── lib/               # Business logic and utilities
├── pages/
│   └── index.astro    # Homepage
├── styles/
│   ├── globals.css         # Global styles
│   └── design-tokens.css   # Design system tokens (Tailwind v4)
├── types/             # TypeScript type definitions
└── utils/             # Pure utility functions
```

## 🎯 Key Components

### Hero Section
- Full-screen landing with compelling headline
- Call-to-action buttons
- Smooth scroll navigation

### About Section
- Company story and values
- Professional team image with hover effects
- Key metrics: 10+ years, 500+ projects, 100% satisfaction

### Services Section
- Grid of 4 main services
- Icon + description cards
- Hover effects with animated underline

### Gallery/Portfolio
- 3-column responsive grid
- Grayscale images with color on hover
- Image overlay with descriptions

### Team Carousel
- Auto-playing carousel with 5 team members
- Navigation arrows (desktop)
- Touch/swipe support (mobile)
- Professional profile cards

### Contact Form
- Form validation (client-side)
- Contact information display
- Success/error message handling

## 🎨 Design System

### Typography
```css
/* Headings */
font-family: 'Playfair Display', serif;
font-weight: 400, 600, 700, 900;

/* Body Text */
font-family: 'Inter', sans-serif;
font-weight: 300, 400, 500, 600, 700;
```

### Color Palette
```css
/* Base Colors */
--color-black: #0A0A0A;
--color-white: #FFFFFF;

/* Grayscale (50-950) */
--color-gray-50: #FAFAFA;
--color-gray-100: #F5F5F5;
--color-gray-700: #404040;
--color-gray-900: #171717;

/* Semantic Colors */
--color-primary: var(--color-black);
--color-background: var(--color-white);
--color-muted-foreground: var(--color-gray-500);
```

### Key Design Tokens
- **Spacing**: 4px base unit (spacing-1 to spacing-32)
- **Border Radius**: Minimal (sm: 2px, base: 4px)
- **Shadows**: Subtle elevation system
- **Transitions**: 150ms (fast), 300ms (base), 500ms (slow)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd games-server
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open your browser to `http://localhost:4321`

## 📜 Available Scripts

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 🚢 Deployment

### Deploying to Vercel

1. **Push your code to GitHub**

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Build Settings**:
   - Framework Preset: **Astro**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live in ~1 minute

### Important Notes for Deployment

✅ **CSS imports fixed**: Styles are imported correctly in `Layout.astro` for production builds
✅ **Fonts preloaded**: Google Fonts are properly configured with preconnect
✅ **Static assets optimized**: Images use lazy loading
✅ **SEO ready**: Meta tags, Open Graph, and Twitter Cards configured

## 🎨 Customization

### Changing Colors
Edit `src/styles/design-tokens.css`:
```css
@theme {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

### Adding Pages
Create new `.astro` files in `src/pages/`:
```astro
---
import Layout from '@/layouts/Layout.astro';
---

<Layout title="Page Title">
  <!-- Your content -->
</Layout>
```

### Modifying Components
All components are in `src/components/` and use:
- Astro syntax (component scripts in frontmatter)
- Tailwind CSS for styling
- TypeScript for type safety

## 📝 Code Conventions

### File Naming
- **Components**: PascalCase (e.g., `Button.astro`, `Hero.astro`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_SEO`)

### Import Order
1. External dependencies
2. Internal aliases (`@/...`)
3. Relative imports

### Component Structure
```astro
---
// 1. Imports
import Component from './Component.astro';

// 2. Type definitions
interface Props {
  title: string;
}

// 3. Props destructuring
const { title } = Astro.props;

// 4. Logic
const processedData = someFunction(title);
---

<!-- 5. Template -->
<div>
  <Component />
</div>

<!-- 6. Styles (if needed) -->
<style>
  /* Component-specific styles */
</style>

<!-- 7. Scripts (if needed) -->
<script>
  // Client-side JavaScript
</script>
```

## 🏗️ Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed information about:
- Design patterns
- Best practices
- Code organization
- Performance optimization

## 📦 Dependencies

### Core
- `astro`: ^5.14.3
- `tailwindcss`: ^4.1.14
- `@tailwindcss/vite`: ^4.1.14

### Carousel
- `embla-carousel`: ^8.6.0
- `embla-carousel-autoplay`: ^8.6.0

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🔗 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Embla Carousel Docs](https://www.embla-carousel.com/get-started/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🐛 Troubleshooting

### Styles not loading in production
✅ Fixed: CSS is now imported correctly in `Layout.astro` using `import '@/styles/design-tokens.css'`

### Fonts not loading
✅ Fixed: Google Fonts are preconnected and loaded in the document head

### Carousel not working
- Ensure `embla-carousel` and `embla-carousel-autoplay` are installed
- Check browser console for errors
- Verify carousel container has proper class names

---

Built with ❤️ using Astro and Tailwind CSS
