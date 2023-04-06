async function loadAssignments() {
  let assignments = [];
  let userName = localStorage.getItem('userName');
  try {
    const response = await fetch('/api/tasks');
    assignments = await response.json();
    assignments = filterAssignments(assignments, userName);
  } catch (error) {
    console.log(error);
  }
  // const eAssignments = localStorage.getItem('assignments');
  // if (eAssignments) {
  //   assignments = JSON.parse(eAssignments);
  // }

  const tableBodyEl = document.querySelector('#assignments');

  if (assignments.length > 0) {
    for (const [i, task] of assignments.entries()) {
      const courseTdEl = document.createElement('td');
      const nameTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');
      const completedTdEl = document.createElement('td');
      const checkboxEl = document.createElement('input')
      checkboxEl.setAttribute('type', 'checkbox');
      checkboxEl.setAttribute('id', 'myCheck');
      completedTdEl.appendChild(checkboxEl);

      courseTdEl.textContent = task.course;
      nameTdEl.textContent = task.name;
      dateTdEl.textContent = task.date;
      completedTdEl.value = task.completed;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(courseTdEl);
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(dateTdEl);
      rowEl.appendChild(completedTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Import your courses using the link above ^^</td></tr>';
  }
}

function filterAssignments(assignments, userName) {
  let userAssignments = [];
  for (const [i, task] of assignments.entries()) {
    if (task.user === userName) {
      userAssignments.push(task);
    }
  }
  return userAssignments;
}
  
 loadAssignments();

async function loadCourses() {
  let courses = [];
  let userName = localStorage.getItem('userName');
  // const eCourses = localStorage.getItem('courses');
  // if (eCourses) {
  //   courses = JSON.parse(eCourses);
  // }
  try {
    const response = await fetch('/api/tasks');
    courses = await response.json();
    courses = filterCourses(courses, userName);
  } catch (error) {
    console.log(error);
  }
  const ulEl = document.getElementById('course-list');
  if (courses.length > 0) {
    for (const [i, course] of courses.entries()) {
      const listEl = document.createElement('li');
      listEl.textContent = course;
      ulEl.appendChild(listEl);
    }
  }
  else {
    ulEl.innerHTML = '<li>Import your Courses and they will appear here</li>';
  }
}

function filterCourses(assignments, userName) {
  let userCourses = [];
  for (const [i, task] of assignments.entries()) {
    if (task.user === userName) {
      userCourses.push(task.course);
    }
  }
  return userCourses;
}

loadCourses();
  