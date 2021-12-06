# React Realtime Chat Messaging

> https://www.youtube.com/watch?v=MJzbJQLGehs

> https://github.com/adrianhajdin/project_medical_pager_chat

## Set up

- client

  ```bash
  # move to client dir
  $ npx create-react-app ./

  # then, delete the src dir and create a new one
  $ rm -r src
  $ mkdir src
  $ touch src/index.js

  # install modules
  $ npm i stream-chat universal-cookie
  ```

  - Extensions - React ES7, better comments
  - `rafce`
  - [Stream Chat API](https://getstream.io)
    - sign in
    - go to dashboard and check `key` and `secret`

- server

  ```bash
  # move to server dir
  $ touch index.js

  # initialize node project
  $ npm init -y

  # install modeuls
  $ npm i bcrypt crypto dotenv express getstream stream-chat nodemon twilio cors
  ```
