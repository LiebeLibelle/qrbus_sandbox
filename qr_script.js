/* var scoreboards = [
  {id: 1, name: "Проспект просвещения", uptime: 134, temp: 23, voltage: 12.543},
  {id: 2, name: "Светлановская площадь", uptime: 512, temp: 25, voltage: 13.089},
  {id: 3, name: "Метро -- \"Пионерская\"", uptime: 98, temp: 19, voltage: 12.991}
];

var tableTemplate = [
  {columnName: "ID", key: "id"},
  {columnName: "Название      остановки", key: "name"},
  {columnName: "Время работы", key: "uptime"},
  {columnName: "Цвет", key: "color"},
  {columnName: "Температура", key: "temp"},
  {columnName: "Напряжение", key: "voltage"}
];

function drawTable(template, data) {
  var header = template.map(function(elem){
    return elem.columnName;
  }).join("\t\t|\t\t");
  
  console.log(header);
  
  data.forEach(function(item) {
    var row = template.map(function(column) {
      if(item[column.key] !== undefined) {
        return item[column.key];
      } else {
        return "";
      }
    });
    console.log(row.join("\t\t|\t\t"));
  });
  
} */

function ready() {
  
  
  for(var i = 0; i < 4; i++) {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);

    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
  }

  /*
  var scoreboard = document.getElementById("scoreboard");
  console.log(scoreboard);
  var row = scoreboard.insertRow(-1);
  for(var i = 0; i < 13;i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = "foo";
  }
  
  drawTable(tableTemplate, scoreboards); */
  

  /* var testTable = document.createElement("TABLE");
  testTable.setAttribute("id", "myTable");
  document.body.appendChild(testTable);
  
  var scoreboard = document.getElementById("myTable");
  
  var theader = document.createElement("TH");
  /* var t = document.createTextNode("table header cell");
  theader.setAttribute("id", "myTheader");
  scoreboard.appendChild(theader);*/
  
  /* for(var i = 0; i < 4; i++) {
    var cell = theader.insertCell(i);
    cell.innerHTML = "foo";
    } */

    
    
  /* var scoreboard = document.getElementById("myTable");
  console.log(scoreboard);
  
  
  var row = scoreboard.insertRow(-1);
  for(var i = 0; i < 13;i++) {
  var cell = row.insertCell(i);
  cell.innerHTML = "foo"; */
  
  }
    
 