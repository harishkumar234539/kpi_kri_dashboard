document.addEventListener("DOMContentLoaded", function () {

displayEmployees();
loadKPIChart();
loadKRIChart();

});


/* EMPLOYEE DATA */

const employees = [

{ id:1, name:"John", department:"HR", kpi:85, kri:10 },

{ id:2, name:"Sara", department:"IT", kpi:78, kri:20 },

{ id:3, name:"David", department:"Finance", kpi:72, kri:25 },

{ id:4, name:"Emma", department:"IT", kpi:90, kri:15 },

{ id:5, name:"Michael", department:"HR", kpi:88, kri:10 },

{ id:6, name:"Daniel", department:"Finance", kpi:80, kri:20 }

];



/* DISPLAY EMPLOYEE TABLE */

function displayEmployees(){

const table = document.getElementById("employeeTable");

if(!table) return;

table.innerHTML="";

employees.forEach(emp => {

let row = `

<tr>

<td>${emp.id}</td>
<td>${emp.name}</td>
<td>${emp.department}</td>
<td>${emp.kpi}</td>
<td>${emp.kri}</td>

</tr>

`;

table.innerHTML += row;

});

}



/* KPI BAR CHART */

function loadKPIChart(){

const ctx = document.getElementById("kpiChart");

if(!ctx) return;

new Chart(ctx,{

type:"bar",

data:{

labels:employees.map(e => e.name),

datasets:[{

label:"KPI Performance",

data:employees.map(e => e.kpi),

backgroundColor:[
"#3498db",
"#2ecc71",
"#f1c40f",
"#e74c3c",
"#9b59b6",
"#1abc9c"
]

}]

},

options:{
responsive:false,
maintainAspectRatio:false
}

});

}



/* KRI PIE CHART */

function loadKRIChart(){

const ctx = document.getElementById("kriChart");

if(!ctx) return;

new Chart(ctx,{

type:"pie",

data:{

labels:employees.map(e => e.name),

datasets:[{

data:employees.map(e => e.kri),

backgroundColor:[
"green",
"orange",
"red",
"purple",
"blue",
"yellow"
]

}]

},

options:{
responsive:false,
maintainAspectRatio:false
}

});

}