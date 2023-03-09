function loadAssignments() {
    let assignments = [];
    const eAssignments = localStorage.getItem('assignments');
    if (eAssignments) {
      assignments = JSON.parse(eAssignments);
    }
  
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
  
 loadAssignments();

 function loadCourses() {
  let courses = [];
  const eCourses = localStorage.getItem('courses');
  if (eCourses) {
    courses = JSON.parse(eCourses);
  }
  const ulEl = document.getElementById('course-list');

  if (courses.length > 0) {
    for (const [i, course] of courses.entries()) {
      const listEl = document.createElement('li');
      listEl.textContent = course.name;
      ulEl.appendChild(listEl);
    }
  }
  else {
    ulEl.innerHTML = '<li>Import your Courses and they will appear here</li>';
  }
 }

 loadCourses();
  