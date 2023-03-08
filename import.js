class course {
    name;
    professor;

    constructor(name, professor) {
        this.name = name;
        this.professor = professor;
    }

    addCourseToList() { 
        let courseList = [];
        courseList.push(this);
        this.save(courseList);
    }
    removeCourse() {
        delete this;
    }
    save(newList) {
        let currentList = JSON.parse(localStorage.getItem('courseList'));
        if (currentList) {
            currentList.push(newList);
            localStorage.setItem('courseList', JSON.stringify(currentList));
        }
        else {
            localStorage.setItem('courseList', JSON.stringify(newList));
        }
    }
    get() {
        return JSON.parse(localStorage.getItem('courseList'));
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
        const task = JSON.stringify(this);
        localStorage.setItem('taskList', task);
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
