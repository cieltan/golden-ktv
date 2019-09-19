# Golden-KTV

## Summary

Hello! Welcome to Golden-KTV, a fullstack application for karaoke lovers! Our application was built with React, Redux, Node, Express, PostgresSQL, Sequelize, OpenTok API, Socket.io, and Youtube Data API.

Visit our deployed site at: [Golden-Karaoke](https://golden-karaoke.herokuapp.com/)

## Developers

- [Billy Tan](https://github.com/cieltan)
- [Aaron Nah](https://github.com/chynh)
- [Jenny Wong](https://github.com/jwong-fs)
- [Mia Baz](https://github.com/bazb0t)


## Folder Structure

```
├── .github
├── client
│   ├── components
│       ├── BottomBar.jsx
│       ├── ChatBox.jsx
│       ├── PlayerButton.jsx
│       ├── Room.jsx
│       ├── RoomForm.jsx
│       ├── StartBtn.jsx
│       ├── TokBox.jsx
│       ├── UserList.jsx
│       ├── VideoPlayer.jsx
│       ├── VideoQueue.jsx
│       └── VideoSearchBar.jsx
│   ├── store
│       ├── index.js
│       ├── roomReducer.js
│       ├── user.js
│       └── user.spec.js
│   ├── app.js
│   ├── history.js
│   ├── index.js
│   ├── socket.js
├── public
│   ├── fonts
│   ├── images
│   ├── favicon.ico
│   ├── index.html
│   └── style.css
├── script
│   ├── seed.js
│   └── seed.spec.js
├── server
│   ├── api
        ├── index.js
        ├── room.js
        ├── users.js
        ├── users.spec.js
│       └── youtubeapi.js
│   ├── auth
│   ├── db
│   ├── socket
│       ├── index.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Start

`npm run start-dev` will make great things happen!

If you want to run the server and/or webpack separately, you can also `npm run start-server` and `npm run build-client`.

From there, just follow your bliss.
