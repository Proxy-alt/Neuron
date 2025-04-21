# Sunset Clone

This is a clone of the Sunset Network website with additional features:
- Theme customization with color pickers and gradients
- Settings page for advanced customization
- Scramjet proxy static demo
- Real-time clock and animations

## Building for Static Hosting

1. Build the static site:
   ```sh
   bun run build
   ```

2. The built files will be in the `out` directory.

## Hosting Instructions

Simply upload the entire contents of the `out` directory to any static file hosting service. No special configuration is required.

Options for hosting include:
- GitHub Pages
- Netlify (drag and drop the `out` folder)
- Vercel (use the "out" directory as the source)
- Any static file server (Apache, Nginx, etc.)
- Firebase Hosting
- Amazon S3

## Local Testing

To test locally, you can use any static file server:

```sh
# Using npx serve (if you have Node.js installed)
npx serve out

# Or Python's built-in HTTP server
cd out && python -m http.server
```

## Development

```sh
# Install dependencies
bun install

# Start development server
bun run dev
```
