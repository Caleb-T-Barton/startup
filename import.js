

class assignment {
    course;
    name;
    score;
    date;
    completed;

    constructor(course, name, date) {
        this.course = course;
        this.name = name;
        this.date = date;
        this.score = null;
        this.completed = false;
    }

    removeTask() {
        delete this;
    }
}

class course {
    name;

    constructor(name) {
        this.name = name;
    }

}

class user {
    name;
    courses = [];
    tasks = [];

    constructor(name) {
        this.name = name;
    }

    addTask(course, name, date) {
        let assignments = [];
        const newAssignment = new assignment(course, name, date);
        let eAssignments = localStorage.getItem('assignments');
        if (eAssignments) {
            assignments = JSON.parse(eAssignments);
        }
        assignments = this.saveTasks(newAssignment, assignments);
        localStorage.setItem('assignments', JSON.stringify(assignments));
    }
    addCourse(name) {
        const newCourse = new course(name);
        this.courses.push(newCourse);
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
}

const userName = JSON.stringify(localStorage.getItem('userName'));
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
    newUser.addTask(newCourse, newTask, newDate);
    // Create course
    newUser.addCourse(newCourse);
});