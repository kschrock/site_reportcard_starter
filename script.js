/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, as well as the object with your student information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, there shouldn't be any question marks left on the report card.
*/

const studentInformation = {
  name: "Kordell",
  grade: "sophmore/junior",
  advisor: "corey",
  major: "Computer Science",
  graduationYear: "2023",
  imageUrl: "kschrock.JPG",
}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdown = document.querySelector(".dropdown")

const dropDownBar = document.querySelector(".dropdown") //

const dropDownBarLabel = document.querySelector(".dropdown-label")

const dropDownButton = document.querySelector(".dropdown-button")
// ADD more query selectors here
const studentNameVar = document.getElementById("student-name")//.textContent = studentInformation.name;
const studentGradeVar = document.getElementById("student-grade-level")//.textContent = studentInformation.grade;
const studentAdvisorVar = document.getElementById("student-advisor")//.textContent = studentInformation.advisor;
const studentMajorVar = document.getElementById("student-major")//.textContent = studentInformation.major;
const studentGraduationYearVar = document.getElementById("student-graduation-year")//.textContent = studentInformation.graduationYear;
const imgElementName = document.getElementById("student-image")

const reportCardTable = document.getElementById("report-card-table")

const fallSemesterBar = document.getElementById("fall-semester")
const springSemesterBar = document.getElementById("spring-semester")
const winterSemesterBar = document.getElementById("winter-term")

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  // code goes here
  studentNameVar.textContent = studentName;
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  // code goes here
  studentGradeVar.textContent = studentGradeLevel;
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  // code goes here
  studentAdvisorVar.textContent = studentAdvisor;
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  // code goes here
  studentMajorVar.textContent = studentMajor
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationyear) {
  // code goes here
  studentGraduationYearVar.textContent = graduationyear
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  // code goes here
  imgElementName.src = imageUrl;
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo({ name, grade, advisor, major, graduationYear, imageUrl }) {
  updateStudentName(name)
  updateStudentGradeLevel(grade)
  updateStudentAdvisor(advisor)
  updateMajor(major)
  updateStudentGraduationYear(graduationYear)
  updateStudentImage(imageUrl)
}

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders() {
  // update the code here
  reportCardTable.innerHTML += `
  <table>
    <tr>
  <div class="table-header">
  <td> <h4>code</h4> </td>
  <td> <h4>name</h4> </td>
  <td> <h4>semester</h4> </td>
  <td> <h4>credits</h4> </td>
  <td> <h4>letter</h4> </td>
   </div>
   </tr>
   </table>`;
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(course, rowNum) {
  // update the code here with information about the course passed to this function
    reportCardTable.innerHTML += `
    <div class="table-row">
    <h4 id="code-col">${studentData[course][rowNum].code}</h4>
    <h4 id="name-col">${studentData[course][rowNum].name}</h4>
    <h4 id="sen-col">${studentData[course][rowNum].semester}</h4>
    <h4 id="credits-col">${studentData[course][rowNum].credits}</h4>
    <h4 id="letter-col">${studentData[course][rowNum].grade}</h4>
     </div>`;
  
}


/**
 * This is the primary function used to update the report card when the semester changes.
 * It should call the other functions responsible for creating the necessary HTML
 */
function updateReportCard() {
  updateDropdownLabel();
  reportCardTable.innerHTML = ``;

  // add your code here
  addReportCardHeaders();

  studentData["Spring Semester"].forEach(function (value, i){
    addCourseRowToReportCard("Spring Semester",i)
  });

  studentData["Fall Semester"].forEach(function (value, i){
    addCourseRowToReportCard("Fall Semester",i)
  });

  studentData["Winter Term"].forEach(function (value, i){
    addCourseRowToReportCard("Winter Term",i)
  });

}

/**
 * This function should toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, it should remove it.
 * If the dropdown classList doesn't contain the "closed" class, it should add it.
 */
function toggleDropdown() {
  // code goes here
  if (dropDownBar.classList.contains("closed")) {
    dropDownBar.classList.remove("closed")
  } else {
    dropDownBar.classList.add("closed")
  }
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 */
function updateDropdownLabel() {
  // code goes here
  dropDownBarLabel.innerHTML = semester
}

// Add an event listener for the dropdown button that calls the toggleDropdown button
dropDownButton.addEventListener("click", (e) =>{
  toggleDropdown()
});

// Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
fallSemesterBar.addEventListener("click", (e) => {
  semester = "Fall Semester"
  updateReportCard()
  toggleDropdown()
});

springSemesterBar.addEventListener("click", (e) => {
  semester = "Spring Semester"
  updateReportCard()
  toggleDropdown()
});

winterSemesterBar.addEventListener("click", (e) => {
  semester = "Winter Term"
  updateReportCard()
  toggleDropdown()
});


// Each callback function one should update the `semester` variable,
// call the `updateReportCard` function and toggle the dropdown

/*
* Add functions here to make it execute as soon as the page loads
*/
window.onload = function () {
  // run your function here to make it execute as soon as the page loads
  populateStudentInfo(studentInformation)
  // updateStudentName("Kordell Schrock");
  // updateStudentGradeLevel("Sophmore/Junior");
  // updateStudentAdvisor("Corey");
  // updateMajor("Computer Science");
  // updateStudentGraduationYear("2023");
  // updateStudentImage("kschrock.JPG");
  
  //console.log(studentData["Spring Semester"][0].code)
  
  updateReportCard();


}
