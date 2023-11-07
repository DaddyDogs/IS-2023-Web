function handleFormSubmit(event) {
  event.preventDefault()
  generateTable(applicantForm.elements.exercises_count.value, applicantForm.elements.trainings_count.value)
}

function saveParams() {
  localStorage.setItem('trainingsCount', applicantForm.elements.trainings_count.value)
  localStorage.setItem('exerciseCount', applicantForm.elements.exercises_count.value)
  console.log("Answers were loaded to the local storage")
}

function loadParams() {
  applicantForm.elements.exercises_count.value = localStorage.getItem('exerciseCount')
  applicantForm.elements.trainings_count.value = localStorage.getItem('trainingsCount')
}

function generateTable(rowCount, columnCount) {
  let table = document.createElement('table');
  let title = generateTitle(columnCount)

  let row = table.insertRow();
  columnCount = parseInt(columnCount, 10) + 1

  for (let i = 0; i < columnCount; i++) {
    let headerCell = document.createElement("th");
    headerCell.innerHTML = title[i];
    row.appendChild(headerCell);
  }

  for (let i = 0; i < rowCount; ++i) {
    let newRow = table.insertRow();
    let rowHeaderCell = newRow.insertCell(-1)

    let el = document.createElement('th');
    el.textContent = 'Упражнение ' + (i + 1);

    rowHeaderCell.appendChild(el);
    for (let j = 1; j < columnCount; ++j) {

      let cell = newRow.insertCell(j)
      let el = document.createElement('input');

      if (applicantForm.elements.default_plan.checked) {
        el.value = 'Жим'
      }

      el.setAttribute('type', 'text');
      cell.appendChild(el);
    }
  }

  document.getElementsByClassName('trainings_table')[0].appendChild(table);
  let thead = table.createCaption()
  thead.innerText = "ПЛАН ТРЕНИРОВОК";
  thead.classList.add("table_header")
  table.classList.add("dynamic_table");
}

function generateTitle(columnCount) {
  let title = []
  title.push(" ")
  for (let i = 0; i < columnCount; ++i) {
    title.push("День " + (i + 1))
  }
  return title
}

const applicantForm = document.getElementById('trainings_form')
applicantForm.addEventListener('submit', handleFormSubmit)
const buttons = document.querySelectorAll('button[type="button"]');
buttons[0].addEventListener('click', saveParams)
buttons[1].addEventListener('click', loadParams)

