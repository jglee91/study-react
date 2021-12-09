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
  - [Stream Chat API](https://getstream.io) - Realtime Chat API
    - sign in
    - go to dashboard and check `key` and `secret`
  - [TWILIO](https://twilio.com) - Send SMS API
    - sign up
    - verify email, phone number
    - `Get a trial phone number` > (check U.S. number) > Choose this Number
    - Messaging > Try it out > Get Set up > Start setup
    - Messaging > Try it out > Send an SMS > `Check Node.js Sample code`
  - [Netlify](https://www.netlify.com/) - For Deployment

    - `src/components/Auth.jsx` - change API URL to `heroku URL`

    ```bash
    # move to client dir
    $ cd client

    #build
    $ npm run build
    ```

    - After build completed, drag&drop to netlify page
    - Domain Settings > Options > Edit site name (to `jglee-medical-pager`)
    - https://jglee-medical-pager.netlify.app/

- server

  ```bash
  # move to server dir
  $ touch index.js

  # initialize node project
  $ npm init -y

  # install modeuls
  $ npm i bcrypt crypto dotenv express getstream stream-chat nodemon twilio cors
  ```

  - [HEROKU](https://www.heroku.com/) - For Deployment

    - sign in
    - Create New App - `jglee-medical-pager`
    - download heroku cli

    ```bash
    # move to server dir
    $ cd server

    # heroku login
    $ heroku login ## then, press `enter`

    # deploy using git
    $ git init
    $ heroku git:remote -a jglee-medical-pager
    $ git add .
    $ git commit -am 'make it better'
    $ git push heroku master # after deploying, check https://jglee-medical-pager.herokuapp.com/
    ```

## Stream Chat API

1. go to dashboard
2. select app
3. Chat > Explorer > users > `check signup account`
4. copy `user id`
5. channels > Create New Channel (name, id: cardiology / type: team) > `Create`
6. click members and click `Add New Channel Member` - paste `user id`
