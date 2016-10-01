var scoreboards = [
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
  
}

$(function() {
  console.log("ready");
  /*
  var scoreboard = document.getElementById("scoreboard");
  console.log(scoreboard);
  var row = scoreboard.insertRow(-1);
  for(var i = 0; i < 13;i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = "foo";
  }*/
  
  drawTable(tableTemplate, scoreboards);
});