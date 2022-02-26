[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
![made-with-express (1)](https://user-images.githubusercontent.com/66704595/155446809-c456baac-9b89-49b0-a93f-850934d6595c.svg)
![made-with-node js](https://user-images.githubusercontent.com/66704595/155447041-6137aec1-532a-4094-928c-e84e2336fb42.svg)
![db-mongodb](https://user-images.githubusercontent.com/66704595/155447686-f65eefd2-5780-42e1-9f89-9421a238fd38.svg)
![deployed-on-heroku](https://user-images.githubusercontent.com/66704595/155449267-ee5d4f1f-a135-435e-96fa-14e255dfa75f.svg)

# whiisper 🤫

![Whiisper-Home-Gif](https://user-images.githubusercontent.com/66704595/155858417-b1af3b2d-4665-46cc-89b4-befee7037ac5.gif)

## About ✍️

Whiisper is a "whisper-like" clone, allowing people to anonymously share their secrets and or stories with the world. The responsive front-end was built using **HTML**, **CSS**, **Bootstrap**, and Embedded JavaScript Templates **(EJS)**. Created a RESTful API using **Express** and **Node.js** to read and write from a NoSQL database in the cloud **(MongoDB)**. User authentication as well as cookies/sessions were built using **Passport.js**.

## Live Demo ☁️

The whiisper app was deployed using **Heroku**, and can be accessed [here.](https://whiisper.herokuapp.com/)

## Running Locally 🖥️

In order to run the whiisper app locally, ensure that you first have Node.js/npm installed. After cloning the git repository, run the following command in the root folder.
```bash
npm install
```

Before you start the server, first make sure that you create a ```.env``` in your root directory. Inside of the ```.env``` file, paste your database URI, as well as the secret that the application will use as follows:
```bash
DB_URI=<Your database URI here>
SECRET=<Your secret here>
```

Once you have successfully completed the above steps, you can then run the application using the following command:
```bash
node server/server.js
```
The application will then be running by default on ```localhost:3000```.
