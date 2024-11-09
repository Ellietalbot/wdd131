// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections:[ { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}]
  };

function SetNameAndNumber(aCourse){
    const name = document.getElementById('courseName')
    const code = document.getElementById('courseCode')
    name.textContent = aCourse.name
    code.textContent = aCourse.code
}
function sectionTemplate(section){
   return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>`;
}
function displaySections(sections){
    const html = sections.map(sectionTemplate)
    document.getElementById('sections').innerHTML = html.join('')

}
