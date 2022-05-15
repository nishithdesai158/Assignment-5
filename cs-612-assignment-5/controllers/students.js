const data = require('./json-data.json');
const getStudents = (req, res) => {
    try {
        const students = data;
        return res.status(200).render('students-list',
            {
                students,
                pageTitle: 'Students',
                path: '/students',
                stud: null,
                index: 0
            });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const getspecStudent = (req, res, next) => {
    try {
        const uid = req.params.uid;
        const stud = data.filter(stu => +stu.uid == uid)[0];
        if (!stud) {
            return next();
        }
        // console.log({ stud: stud });
        return res.status(200).render('student-details',
            {
                stud: stud,
                pageTitle: stud.name.toUpperCase(),
                path: `/students/${stud.uid}`,
                index: 0
            });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

/* For getting student subjects */
const getStuSubjects = (req, res, next) => {
    try {
        const uid = req.params.uid;
        const student = data.filter(stu => +stu.uid == uid)[0];
        if (!student) {
            return next();
        }
        return res.render('student-subjects',
            {
                subjects: student.subjects,
                student,
                pageTitle: `Subjects - ${student.name.toUpperCase()}`,
                path: `/students/${student.uid}/subjects`,
                stud: student,
                index: 0
            });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

/* get students subject marks */
const getStuSubjectMarks = (req, res, next) => {
    try {
        const {
            uid,
            index
        } = req.params;
        const student = data.filter(stu => +stu.uid == uid)[0];
        if (!student) {
            return next();
        }
        if (isNaN(index) || +index < 0 || +index > student.marks.length - 1) {
            return next();
        }
        return res.render('marks',
            {
                subject: student.subjects[index],
                marks: student.marks[index],
                student,
                stud: student,
                pageTitle: `Subjects - Marks - ${student.name.toUpperCase()}`,
                path: `/students/${student.uid}/subjects/${index}/marks`,
                index
            });

    } catch (error) {
        return res.status(404).json({ message: error.message });

    }
}

module.exports.getStudents = getStudents;
module.exports.getspecStudent = getspecStudent;
module.exports.getStuSubjects = getStuSubjects;
module.exports.getStuSubjectMarks = getStuSubjectMarks;