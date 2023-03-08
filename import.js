class course {
    name;
    professor;
    courseList = [];

    constructor(name, professor) {
        this.name = name;
        this.professor = professor;
    }

    addCourseToList() {
        this.courseList.push(this);
        console.log(this.courseList);
    }
    removeCourse() {
        delete this;
    }
}

class assignment {
    course;
    task;
    score;
    date;
    completed;
    assignments = [];

    constructor(name, course, date) {
        this.task = name;
        this.date = date;
        this.course = course;
        this.score = null;
        this.completed = false;
    }

    addTaskToList() {
        this.assignments.push(this);
        console.log(this.assignments);
    }

    removeTask() {
        delete this;
    }

    taskCompleted() {
        this.completed = true;
    }
}


// Get info from user
const submitButtonEl = document.getElementById('submit-button');
submitButtonEl.addEventListener('click', (e)=> {
    e.preventDefault();
    const classNameEl = document.getElementById('course-name');
    const className = classNameEl.value;
    const professorNameEl = document.getElementById('professor-name');
    const professorName = professorNameEl.value;
    const newCourse = new course(className, professorName);
    newCourse.addCourseToList();

    const assignmentNameEl = document.getElementById('assignment-name');
    const assignmentName = assignmentNameEl.value;
    const dueDateEl = document.getElementById('due-date');
    const dueDate = dueDateEl.value;
    const newAssignment = new assignment(assignmentName, className, dueDate);
    newAssignment.addTaskToList();
});
