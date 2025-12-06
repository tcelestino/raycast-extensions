# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About the Project

This is a Raycast extension that displays the latest posts from Órbita, the "Brazilian hacker news" maintained by the Manual do Usuário blog. The extension fetches and displays posts in RSS format.

## Development Commands

### Local Development

```bash
npm run dev
```

Starts the Raycast development environment with hot-reload.

### Build

```bash
npm run build
```

Compiles the extension for production using `ray build`.

### Linting

```bash
npm run lint          # Checks for code issues
npm run fix-lint      # Automatically fixes linting issues
```

### Publishing

```bash
npm run publish
```

Publishes the extension to the Raycast Store (not npm).

## Architecture

### File Structure

- `src/mdu-orbita.tsx` - Main component that renders the list of posts
- `src/get-rss.ts` - Utility to fetch and process the Órbita RSS feed
- `raycast-env.d.ts` - Auto-generated file with TypeScript type definitions based on `package.json`

### Technology Stack

- **Framework**: Raycast API (`@raycast/api` and `@raycast/utils`)
- **Language**: TypeScript 5.8+ with strict mode enabled
- **Build Tool**: Raycast CLI (`ray`)
- **Linting**: ESLint with official Raycast configuration (`@raycast/eslint-config`)
- **Formatting**: Prettier with custom configuration (printWidth: 120, double quotes)

### Code Patterns

The main component follows the Raycast extension pattern:

1. **React Component** that returns a Raycast `<List>`
2. **List.Item** for each entry with:
   - `icon` - visual icon
   - `title` - post title
   - `subtitle` - additional information
   - `accessories` - metadata displayed on the right
   - `actions` - ActionPanel with available actions (e.g., copy, open link)

### TypeScript Configuration

The project uses TypeScript with strict settings:

- Target and lib: ES2023
- Module: CommonJS
- Strict mode enabled
- JSX: react-jsx
- Isolated modules for better compatibility

### Supported Platforms

The extension works on macOS and Windows.

## Important Notes

- The `raycast-env.d.ts` file is **auto-generated** and should not be edited manually. Modifications should be made in `package.json`
- When adding new commands, update the `commands` section in `package.json`
- Follow the ESLint patterns configured by Raycast to maintain consistency with the ecosystem
