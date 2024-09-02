
# Task Manager Application

## ChatGPT

This app is built almost entirely from ChatGPT prompts. Process has been:

- Ask ChatGPT to generate something
- Ask it to provide a zip download
- Attempt to run the code and report errors as follow-up prompts
- Take response from ChatGPT and incorporate

I've tried as much as possible not to fix any issues, although I have had to debug some issues in order to shape my follow-up prompts.

The current app works - just about - but it is very minimal and already has technical debt (check the database migrations). 

### Prompts so far

> I want to build a task management app, please create me a plan

> I'd like to start with the following features:
>
> Task creation and management (titles, descriptions, due dates).
Prioritization (high, medium, low).
User authentication (sign-up/sign-in).
>
> With the following UI considerations:
Simple, intuitive design.
Responsive design for mobile and web.
> 
> I would like the application to start small but be able to scale well.
>
> Please create a technical plan.

> Please create the backend code, with the APIs listed, based on your answer above.

> Can you provide the code as a zip file?

> can you provide a package.json file to manage dependencies?

> How to deploy?

> Set up CI/CD?

> Add more tests?

> Can you provide the frontend code?

> Can you:
> - add a package.json file to the frontend code
> - combine the frontend and backend code into one download
> - add the CI script and extend it to deploy the frontend code too
> - ensure the frontend code also has tests

> The ci script is not in the zip file

> Can you print the ci script here, please?

> What should this file be called?

> Can you extend the ci script to deploy both frontend and backend?

> Please write a readme file including instructions for:
> - running application locally (including any dependencies)
> - setting up and deploying backend to Heroku
> - setting up and deploying frontend to Netlify
> - setting Github actions for CI

> Can you provide that as a file I can download?

> When I run the backend, I get this error:
> Unable to connect to the database: ConnectionRefusedError [SequelizeConnectionRefusedError]: connect ECONNREFUSED 127.0.0.1:5432

> Can I run postgress via docker?

> I now get the following error: original: error: database "task_manager" does not exist
> 
> Can you update the docker compose file to create the database if it doesn't exist?

> When I run the frontend code I get the following error:
>
> > task-manager-frontend@1.0.0 start
> > react-scripts start
>
> Could not find a required file.
> Name: index.html

> ERROR in ./src/components/Auth/Login.js 6:0-34
> Module not found: Error: Can't resolve '../../api' in '/task-manager-full/frontend/src/components/Auth'
> ERROR in ./src/components/Auth/Signup.js 6:0-35
> Module not found: Error: Can't resolve '../../api' in '/task-manager-full/frontend/src/components/Auth'
> ERROR in ./src/components/Tasks/TaskForm.js 6:0-39
> Module not found: Error: Can't resolve '../../api' in '/task-manager-full/frontend/src/components/Tasks'
> ERROR in ./src/components/Tasks/TaskList.js 6:0-49
> Module not found: Error: Can't resolve '../../api' in '/task-manager-full/frontend/src/components/Tasks'
> ERROR in ./src/index.js 6:0-21
> Module not found: Error: Can't resolve './index.css' in '/task-manager-full/frontend/src'
> ERROR in ./src/index.js 8:0-48

> Provide the contents of api.js

> ERROR in ./src/components/Tasks/TaskList.js 16:31-39
> export 'getTasks' (imported as 'getTasks') was not found in '../../api' (possible exports: createTask, deleteTask, fetchTasks, login, signup, updateTask)
> ERROR in ./src/reportWebVitals.js 6:4-24
> Module not found: Error: Can't resolve 'web-vitals' in '/task-manager-full/frontend/src'

> ERROR
> error.response.data is undefined
> handleSubmit@http://localhost:3000/static/js/bundle.js:387:39

> This was when trying to signup, not login

> I can see in the network tab that there is a cors issue when running locally

> When I try to signup, I get a 500 error. The backend shows the following:
> 
> > task-manager@1.0.0 start
> > node src/index.js
> 
> Server running on port 5000
> Database connected successfully.
> relation "Users" does not exist

> zsh: command not found: sequelize

> ERROR: Cannot find "/task-manager-full/backend/config/config.json". Have you run "sequelize init"?

> Backend error on signup:
>
> invalid input syntax for type integer: "b3fb3651-27aa-44c5-bd64-74dee08af71a"

> Sequelize CLI [Node: 18.19.0, CLI: 6.6.2, ORM: 6.37.3]
> 
> Loaded configuration file "config/config.json".
> Using environment "development".
> == 20240902175052-change-id-type: migrating =======
> 
> ERROR: column "id" cannot be cast automatically to type uuid
 
> WHERE parameter "email" has invalid "undefined" value

> You have previously provided the frontend code and api.js. When I try to login, I see this error on the backend:
>
> WHERE parameter "email" has invalid "undefined" value

> The homepage shows login and signup links but I cannot access the tasks page

> How do I pass and use setToken to Login component?

> If I am logged in, I want the app to default to the tasks view

> When the homepage loads, if the token is valid, I want it to redirect to the tasks view

> When the homepage loads, if a token is present, I want it to redirect to the tasks view

The rest of the README was also generated by ChatGPT!

## Overview

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
