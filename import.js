function createCourse() {
    const classNameEl = document.getElementById('course-name');
    const className = classNameEl.value;
    const professorNameEl = document.getElementById('professor-name');
    const professorName = professorNameEl.value;
    const newCourse = new course(className, professorName);
    newCourse.addCourseToList();
}

function createAssignment() {
    const assignmentNameEl = document.getElementById('assignment-name');
    const assignmentName = assignmentNameEl.value;
    const classNameEl = document.getElementById('course-name');
    const className = classNameEl.value;
    const newAssignment = new assignment(assignmentName, className);
    newAssignment.addTaskToList();
}

const submitButtonEl = document.getElementById('submit-button');

class course {
    name;
    professor;
    courseList;

    constructor(name, professor) {
        this.name = name;
        this.professor = professor;
        this.courseList = [];
    }

    addCourseToList() {
        this.courseList.push(this);
    }
    removeCourse() {

    }
}

class assignment {
    course;
    task;
    score;
    date;
    completed;
    assignments;

    constructor(name, course) {
        this.task = name;
        this.date = new Date();
        this.course = course;
        this.score = null;
        this.completed = false;
    }

    addTaskToList() {
        this.assignments.push(this);
    }

    removeTask() {

    }

    taskCompleted() {

    }
}
