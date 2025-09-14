# Connect Map

Starter template for projects that need a map integrated with a registration form.

## Main Technologies

- **React**: Main library for building the interface.
- **React Hook Form**: Form management.
- **Zod**: Form data validation.
- **i18next**: Internationalization and multi-language support.
- **MUI (Material UI)**: Modern and responsive UI components.
- **Leaflet**: Interactive map rendering and manipulation.
- **React Leaflet**: Leaflet integration with React.
- **SWR**: Data fetching and cache management.
- **Biome**: Code formatting and linting.

## Project Structure

```
src/
  pages/            # Pages (home, form, etc)
  components/       # Reusable components
  api/              # External API integrations
  hooks/            # Custom hooks
  atoms/            # Global state with Jotai
  intl/             # Language configuration
  schemas/          # Zod validation schemas
  service/          # Data services
  types/            # TypeScript types
  utils/            # Utility functions
```

## How to run

1. Install dependencies:
   ```zsh
   bun install
   # or
   npm install
   ```
2. Start the development server:
   ```zsh
   bun run dev
   # or
   npm run dev
   ```

## Useful Scripts

- `dev`: Starts the development server
- `build`: Builds the project for production
- `check:lint`: Runs Biome for lint/format
- `check:types`: Checks TypeScript types
- `deploy`: Publishes to GitHub Pages

## Customization

This project is designed to be easily adaptable. Just modify the components, schemas, and hooks as needed for your use case.

## License

This project is open source and can be used as a base for other projects.
