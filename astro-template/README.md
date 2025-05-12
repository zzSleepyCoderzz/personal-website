# Timothy Chin - Software Engineer Portfolio

A modern, responsive portfolio website built with Astro.js.

## Features

- Fast, responsive design
- Three main pages: Home, Projects, and Contact
- Clean, modern aesthetics
- Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js (v16.x or later recommended)
- npm or yarn

### Installation

1. Clone this repository
```bash
git clone https://github.com/username/timothy-portfolio.git
cd timothy-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:4321`

## Project Structure

- `src/pages/` - All pages/routes for the site
- `src/components/` - Reusable UI components
- `src/layouts/` - Page layouts
- `src/styles/` - Global CSS files
- `public/` - Static assets (images, fonts, etc.)

## Customization

### Personal Information

- Edit your name and description in the page files in `src/pages/`
- Replace `public/profile-pic.jpg` with your own profile picture

### Projects

- Update the projects array in `src/pages/projects.astro` with your own work
- Add project details and links

### Contact Information

- Update your contact details in `src/pages/contact.astro`

## Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist/` directory.

## Deployment

The site can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- etc.

## License

This project is MIT licensed.