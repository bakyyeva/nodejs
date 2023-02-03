const mongoose = require('mongoose');
const express = require('express');
const userController = require('./controller/userController');
const courseController = require('./controller/courseController');
const categoryController = require('./controller/categoryController');

const app = express();
const port = 3000;

//DB connent
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/mubco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('DB Connected Successfully')
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.post('/user', userController.createUser);
app.get('/user', userController.getUsers);
app.post('/course', courseController.createCourse);
app.get('/course', courseController.getAllCourses);
app.post('/category', categoryController.createCategory);
app.get('/category', categoryController.getAllCategories);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
