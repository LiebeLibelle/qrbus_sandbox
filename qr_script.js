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

$(function() {
  console.log("ready");
  
  var table = document.createElement("table"); // вынес создание таблицы из цикла, её нужно создать всего один раз
  table.setAttribute("id", "scoreboards");
  table.setAttribute("class", "table table-bordered table-hover"); // попытка добавить красоту
  
  document.getElementById("wrapper").appendChild(table); // добавляю не к body, а внутрь div'а
  
  for(var rowIdx = 0; rowIdx< 4; rowIdx++) {
    var row = document.createElement("tr");
    // row.setAttribute("id", "myTr"); // необязательно каждый раз ставить атрибут, а потом по нему искать
    table.appendChild(row); // достаточно просто сохранить в переменную созданную таблицу, и потом к ней обратиться
    for(var cellIdx = 0; cellIdx < 4; cellIdx++) { // да-да, чтобы создать таблицу, нужно два цикла, вложенных друг в друга
      var cell = document.createElement("td");
      cell.innerHTML = "cell " + rowIdx + "x" + cellIdx; // вместо того, чтобы создавать textNode, можно просто написать туда текст
      // var t = document.createTextNode("cell");
      // cell.appendChild(t);
      
      // та же история, что и с таблицей -- сохранили переменную row, и добавляем к ней ячейки, а не ищем каждый раз
      row.appendChild(cell);     
    }
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
  
  });
    
 