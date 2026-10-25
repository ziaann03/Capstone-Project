# Employee Management System

A MERN-stack educational MVP for ICTAK Full Stack Application Development with ReactJS.

## Overview
Manage employee profiles, departments, designations, employment status, and contact details.

## Features
- Create and list employees records
- Search displayed fields
- Delete records with confirmation
- MongoDB persistence through Express and Mongoose
- Responsive dashboard with domain-specific summary metrics
- Loading, empty, success, and error states

## Stack
React + Vite, Node.js, Express, MongoDB, Mongoose, dotenv, and CORS.

## Setup
Requirements: Node.js LTS, npm, and a MongoDB Atlas cluster or local MongoDB server.

1. In MongoDB Atlas, create a database user, allow your current IP in Network Access, and copy the connection string from **Connect → Drivers**.
2. Copy `server/.env.example` to `server/.env`. Replace the placeholders in `MONGO_URI` with your real credentials and cluster host. Never commit `.env`.
3. In a terminal:
   ```bash
   cd server
   npm install
   npm run dev
   ```
4. In a second terminal:
   ```bash
   cd client
   npm install
   npm run dev
   ```
5. Open the Vite URL shown in the terminal (usually `http://localhost:5173`). API health check: `http://localhost:5000/api/health`.

The client defaults to `http://localhost:5000/api`. To change it, copy `client/.env.example` to `client/.env` and set `VITE_API_URL`.

## API
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API health check |
| GET | `/api/employees` | List records; optional `?limit=100` |
| POST | `/api/employees` | Create a record |
| DELETE | `/api/employees/:id` | Delete a record |

## GitHub safety
The root `.gitignore` excludes environment files, dependencies, logs, and build outputs. `.env.example` contains placeholders only. If a secret is accidentally pushed, rotate it immediately; deleting it in a later commit does not make the old secret safe.

## Test checklist
- [ ] API health check responds with `status: ok`
- [ ] Records load from MongoDB
- [ ] Valid record can be created
- [ ] Required fields are validated
- [ ] Search narrows the visible records
- [ ] Delete removes a record after confirmation
- [ ] Records remain after refreshing the page
- [ ] Error states work when the API is stopped

## Limitations
This is an educational MVP scaffold. It does not include authentication, role-based permissions, record editing, audit logs, automated tests, or production monitoring. Do not use it to store sensitive personal information without adding appropriate access controls and privacy safeguards.

## Deployment notes
Deploy the React client and Express API separately, use a managed MongoDB database, configure production environment variables and CORS, and test all core flows on the live URL. Do not use localhost URLs in production.

## References
- MongoDB: https://www.mongodb.com/docs/
- Express: https://expressjs.com/
- React: https://react.dev/
- Vite: https://vite.dev/
- Mongoose: https://mongoosejs.com/docs/
