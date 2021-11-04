# Getting Started: 

Navigate to server/config/mongoose.config.js <br>
Insert your database name in the ```dbNAME``` variable on line 2 <br><br>

In seperate terminals run: <br> 
```
cd boilerplate-express-mongoose
npm install
nodemon ./server.js
``` 

```
cd client
npm install
npm start
```
### Store API KEYS IN .env file: 
```
FIRST_SECRET_KEY="first key value"
SECOND_SECRET_KEY="second key value"
```

Invoke Keys with:
```
const myFirstSecret = process.env.FIRST_SECRET_KEY;
```
