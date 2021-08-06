# react crash course 2021
- **react** is a library for building user interfaces
- runs on the client as a SPA
- can be used to build full stack apps by communicating with a server/API (eg. MERN stack)
- often referred to as a front-end **framework**
  - because it is capable and directly comparable to a framework such as Angular or Vue
- Why would you use React?
  - structure the "view" layer of your app
  - reusable components with their own state
  - JSX - dynamic markup
  - interactive UIs with Virtual DOM
  - Performance & testing
  - Very popular in the industry
- What should you know first?
  - Data types, variables, functions, loops, etc (basic knowledge of JS)
  - Promises & asynchronous programming
  - Array methods like forEach() & map()
  - Fetch API & making HTTP requests
- When using React, think of your UI as **a bunch of separate components**
- Components: Functions vs. Classes
  ``` jsx
  // Functional Component
  export const Header = () => {
    return (
      <div>
        <h1>My Header</h1>
      </div>
    )
  }

  // Class Component
  export default class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>My Header</h1>
        </div>
      )
    }
  }
  ```
- Working with state
  - components can have "state" (determines how a component renders and behaves)
  - "App" or "global" state refers to state that is available to the entire UI
    * not just a single component
  - Later React 16.8, we can use functional compoennts with hooks
    * Prior to React 16.8, we had to use class based components to use state.
- React Hooks
  - functions that let us **hook** into the React state and lifecycle features from function components
    * useState - Returns a stateful value and a function to update it
    * useEffect - Perform side effects in function components
    * useContext, useReducer, userRef - Beyond the scope of this course...
  
---
## Let's Learn React!
- install NodeJS (LTS version)
- install chrome extensions, React Developer Tools
  ``` cmd
  $ npm --version
  $ npx create-react-app react-task-tracker
  $ cd react-task-tracker
  $ code .
  $ npm start   # start dev server with webpack (default 3000 port)
  ```
- install VS Code extensions
  - ES7 React/Redux/GraphQL/React-Native snippets
- install node modules
  ``` cmd
  $ npm i react-icons

  # build
  # chrome react dev tools icons will be changed (not orange color - production build)
  $ npm run build
  $ npm i -g serve
  $ serve -s build -p 8000

  # run json server
  $ npm i json-server

  $ npm i react-router-dom
  ```
  ``` json
  # package.json
  {
    ...

    "scripts": {
      ...

      "server": "json-server --watch db.json --port 5000"
    },

    ...
  }
  ```