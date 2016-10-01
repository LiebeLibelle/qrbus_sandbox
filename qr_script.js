var scoreboards = [
  {id: 1, name: "Проспект просвещения", uptime: 134, temp: 23, voltage: 12.543},
  {id: 2, name: "Светлановская площадь", uptime: 512, temp: 25, voltage: 13.089},
  {id: 3, name: "Пионерская", uptime: 98, temp: 19, voltage: 12.991}
];

var tableTemplate = [
  {columnName: "ID платы", key: "id"},
  {columnName: "Название остановки", key: "name"},
  {columnName: "Время работы", key: "uptime"},
  {columnName: "Температура", key: "temp"},
  {columnName: "Напряжение", key: "voltage"}
];

function drawTable(template, data) {
  var header = template.map(function(elem){
    return elem.columnName;
  }).join("\t\t");
  
  console.log(header);
}

function ready() {
  console.log("ready");
  var scoreboard = document.getElementById("scoreboard");
  console.log(scoreboard);
  var row = scoreboard.insertRow(-1);
  
  /*for(var i = 0; i < 13;i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = "foo";
  }*/
  
  drawTable(tableTemplate, scoreboards);
}