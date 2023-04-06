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
    updateCompleted() {
        
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

    constructor(name) {
        this.name = name;
    }

    async addTask(course, name, date, username) {
        //let assignments = [];
        const newAssignment = new assignment(course, name, date, username);
        //let eAssignments = localStorage.getItem('assignments');
        //const response = await fetch('/api/tasks');
        //assignments = await response.json();
        // if (response) {
        //     assignments = JSON.parse(eAssignments);
        // }
        // assignments = this.saveTasks(newAssignment, assignments);
        // localStorage.setItem('assignments', JSON.stringify(assignments));
        const request = await fetch('/api/task', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newAssignment),
          });
    }
    // saveTasks(newAssignment, assignments) {
    //     let found = false;
    //     for (const [i, obj] of assignments.entries()) {
    //         if (obj.name === newAssignment.name && obj.course === newAssignment.course && obj.date === newAssignment.date) {
    //             alert('Task already exists... deleting');
    //             newAssignment.removeTask();
    //             found = true;
    //             break;
    //         }
    //     }
    //     if (!found) {
    //         assignments.push(newAssignment);
    //     }
    //     return assignments;
    // }
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
    if (newCourse !== "" && newTask !== "" && newDate !== "") {
        // Create task
        newUser.addTask(newCourse, newTask, newDate, userName);
        let taskAddedEl = document.createElement('p');
        taskAddedEl.textContent = "Task Added";
        let formEl = document.getElementById('form-reset');
        formEl.appendChild(taskAddedEl);
        setTimeout(()=> {
            taskAddedEl.textContent = "";
            formEl.appendChild(taskAddedEl);
         }
         ,1000);
    }
    else {
        alert('Please fill out the form before submitting')
    }
});