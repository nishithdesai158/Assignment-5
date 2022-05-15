const express = require("express");

const student_Act = require("../controllers/students");

const router = express.Router();

router.get('/', student_Act.getStudents); /* Getting al the studs */
router.get('/:uid', student_Act.getspecStudent); /* Getting a particular stud by id */
router.get('/:uid/subjects', student_Act.getStuSubjects) /* Getting all the subjects of that stud */
router.get('/:uid/subjects/:index/marks', student_Act.getStuSubjectMarks) /*  */

module.exports = router;