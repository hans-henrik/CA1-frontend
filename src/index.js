import "./style.css"
import "bootstrap/dist/css/bootstrap.css"

const URL = "https://oleisanerd.dk/CA1/api/people/show"

fetch(URL)
.then(res=>res.json())
.then(data=>{
    const persons = data.all;
    const tableRows = persons.map(person=>`
    <tr>
    <td>${person.email}</td>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    </tr>    
    `)
    const tableRowsAsStr = tableRows.join("");
    document.getElementById("tbody").innerHTML = tableRowsAsStr
})



