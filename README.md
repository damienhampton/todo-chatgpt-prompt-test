
# Task Manager Application

This Task Manager application is a full-stack web application with a React frontend and a Node.js (Express) backend. Below you will find the instructions to run the application locally, deploy it to Heroku (backend), deploy it to Netlify (frontend), and set up GitHub Actions for continuous integration and deployment.

## Running the Application Locally

### Prerequisites
Ensure you have the following installed:
- Node.js (Recommended version: 16.x)
- npm (Usually comes with Node.js)

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root of the backend directory and add the following:
   ```env
   PORT=5000
   DATABASE_URL=<your_database_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Run the application:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npm start
   ```
   This will open the web application in your default browser.

## Deploying Backend to Heroku

### Prerequisites
- Heroku CLI: Install from [Heroku's official site](https://devcenter.heroku.com/articles/heroku-cli).

### Deployment Steps
1. Log in to your Heroku account:
   ```sh
   heroku login
   ```
2. Create a new Heroku app:
   ```sh
   heroku create your-app-name
   ```
3. Add a PostgreSQL database to your app (if needed):
   ```sh
   heroku addons:create heroku-postgresql:hobby-dev
   ```
4. Set environment variables on Heroku:
   ```sh
   heroku config:set JWT_SECRET=your_jwt_secret
   ```
5. Deploy the backend:
   ```sh
   git subtree push --prefix backend heroku main
   ```

## Deploying Frontend to Netlify

### Prerequisites
- Netlify CLI: Install via npm:
  ```sh
  npm install netlify-cli -g
  ```

### Deployment Steps
1. Log in to your Netlify account:
   ```sh
   netlify login
   ```
2. Initialize your Netlify project:
   ```sh
   netlify init
   ```
3. Connect your GitHub repository (follow the CLI prompts).
4. Set up a new site:
   ```sh
   netlify sites:create --name your-unique-site-name
   ```
5. Deploy the frontend:
   ```sh
   netlify deploy --dir=frontend/build --prod
   ```

## Setting Up GitHub Actions for Continuous Integration

### CI Workflow File
Create a file in your repository under `.github/workflows/ci.yml` with the following content:

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'
    - name: Install Dependencies
      run: |
        cd backend && npm install
        cd ../frontend && npm install
    - name: Run Backend Tests
      run: |
        cd backend && npm test
    - name: Run Frontend Tests
      run: |
        cd frontend && npm test
```

This workflow will trigger on pushes and pull requests, installing dependencies and running tests for both frontend and backend.

---
Follow these instructions to ensure your application is set up, deployed, and integrated with continuous integration processes effectively.
