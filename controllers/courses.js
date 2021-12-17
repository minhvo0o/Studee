const courses = require('../models/courses');

const list = async (req, res) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const renderCourses = courses.map(course => ({
    ...course,
    month: months[course.date.getMonth()]
  }));
  res.render('course/courses', { title: 'Các khoá học', courses: renderCourses });
};

const courseDetails = async (req, res) => {
  res.render('course/course-details', { title: 'Chi tiết khoá học' });
};

module.exports = {
  list,
  courseDetails
};
