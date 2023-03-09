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
        const scoreTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
        const completedTdEl = document.createElement('td');
        const checkboxEl = document.createElement('input')
        checkboxEl.setAttribute('type', 'checkbox');
        checkboxEl.setAttribute('id', 'myCheck');
        completedTdEl.appendChild(checkboxEl);
  
        courseTdEl.textContent = task.course;
        nameTdEl.textContent = task.name;
        scoreTdEl.textContent = task.score + '/';
        dateTdEl.textContent = task.date;
        completedTdEl.value = task.completed;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(courseTdEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(scoreTdEl);
        rowEl.appendChild(dateTdEl);
        rowEl.appendChild(completedTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Import your courses using the link above ^^</td></tr>';
    }
  }
  
 loadAssignments();
  