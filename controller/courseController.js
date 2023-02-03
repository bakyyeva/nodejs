const Course = require('../model/Course');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      status: 'succsess',
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});

    res.send(courses);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
