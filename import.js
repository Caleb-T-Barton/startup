

class assignment {
    course;
    name;
    score;
    date;
    completed;
    user;

    constructor(course, name, date, username) {
        this.course = course;
        this.name = name;
        this.date = date;
        this.score = null;
        this.completed = false;
        this.user= username;
    }

    removeTask() {
        delete this;
    }
    toggle() {
        if (this.completed) {
            this.completed = false;
        }
        else {
            this.completed = true;
        }
    }
}

class course {
    name;

    constructor(name) {
        this.name = name;
    }

    removeCourse() {
        delete this;
    }
}

class user {
    name;
    courses = [];
    tasks = [];

    constructor(name) {
        this.name = name;
    }

    addTask(course, name, date, username) {
        let assignments = [];
        const newAssignment = new assignment(course, name, date, username);
        let eAssignments = localStorage.getItem('assignments');
        if (eAssignments) {
            assignments = JSON.parse(eAssignments);
        }
        assignments = this.saveTasks(newAssignment, assignments);
        localStorage.setItem('assignments', JSON.stringify(assignments));
    }
    addCourse(name) {
        let courses = [];
        const newCourse = new course(name);
        let eCourses = localStorage.getItem('courses');
        if (eCourses) {
            courses = JSON.parse(eCourses);
        }
        courses = this.saveCourses(newCourse, courses);
        localStorage.setItem('courses', JSON.stringify(courses));
    }
    saveTasks(newAssignment, assignments) {
        let found = false;
        for (const [i, obj] of assignments.entries()) {
            if (obj.name === newAssignment.name && obj.course === newAssignment.course && obj.date === newAssignment.date) {
                alert('Task already exists... deleting');
                newAssignment.removeTask();
                found = true;
                break;
            }
        }
        if (!found) {
            assignments.push(newAssignment);
        }
        return assignments;
    }
    saveCourses(newCourse, courses) {
        console.log(newCourse);
        let found = false;
        for (const [i, obj] of courses.entries()) {
            console.log('Hlkafsdk;');
            if (obj.name === newCourse.name) {
                newCourse.removeCourse();
                found = true;
                break;
            }
        }
        if (!found) {
            courses.push(newCourse);
        }
        return courses;
    }
}

const userName = localStorage.getItem('userName');
const newUser = new user(userName);

// Get info from user
const submitButtonEl = document.getElementById('submit-button');
submitButtonEl.addEventListener('click', (e)=> {
    e.preventDefault();
    const courseEl = document.getElementById('course-name');
    const taskEl = document.getElementById('assignment-name');
    const dateEl = document.getElementById('due-date');
    const newCourse = courseEl.value;
    const newTask = taskEl.value;
    const newDate = dateEl.value;
    // Create task
    newUser.addTask(newCourse, newTask, newDate, userName);
    // Create course
    newUser.addCourse(newCourse);
});

function taskCompleted() {
    let checkBoxEl = document.getElementById('myCheck');
    console.log("hello");
}

taskCompleted();