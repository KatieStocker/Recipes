# The backend for the Recipes application


## Planned Stack
- Node.js
- Express
- PostgreSQL


## Folder Structure
- src/              `// Root directory for the server-side code`
  - db/             `// Folder for code connecting to the PostgreSQL database`
    - index.js      `// PostgreSQL connection, file exports a function that creates a connection to the database, will use the pg library`
    - queries/      `// SQL queries for interacting with the database`
  - routes/         `// Folder for code to connect to the API routes`
    - index.js      `// API routes, exports a function that sets up the API routes`
  - app.js          `// Express app initialisation, set up middleware and mounts the API routes`
  - config.js       `// Environment variables, exports variables, such as db URL and secret key for JWT auth`
- package.json      `// Project dependencies`
- .env              `// Environment variables, environment-specific configuration variables that should not be committed to version control`


## Libraries
- [pg library](https://www.npmjs.com/package/pg)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)

## Instructions
- `npm install` to install all dependencies.
- `npm start` to start the server while current directory is set to the backend folder level.