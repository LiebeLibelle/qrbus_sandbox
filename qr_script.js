/* =========== VIEW ============== */
function ScoreboardView(model) {
  this.model = model;
  this.tableTemplate = [
    {columnName: "ID", key: "id"},
    {columnName: "Название остановки", key: "name"},
    {columnName: "Время работы", key: "uptime"},
    {columnName: "Цвет", key: "color"},
    {columnName: "Температура", key: "temp"},
    {columnName: "Напряжение", key: "voltage"}
  ];
}

ScoreboardView.drawTableHeader = function (template) {
  var row = document.createElement("tr");
  
  template.forEach(function(item) {
    var th = document.createElement("th");
    th.innerHTML = item.columnName;
    th.setAttribute("id", item.key);
    th.setAttribute("onclick", 'sortHandler("' + item.key + '")');
    row.appendChild(th);
  });
  
  return row;
}

ScoreboardView.drawTableBody = function(template, data) {
  var tableBody = document.createElement("tbody");
 
  data.forEach(function(item) { // data object
    var row = document.createElement("tr");
    template.map(function(column) { // template object
      if(item[column.key] !== undefined) {
        return item[column.key];
      } else {
        return "";
      }
    }).forEach(function(item) {
      var td = document.createElement("td");
      td.innerHTML = item;
      row.appendChild(td);
    });
    tableBody.appendChild(row);
    // console.log(row.join("\t\t|\t\t"));
  });
  
  return tableBody;

}

ScoreboardView.prototype.render = function () {
  console.log("render");
  document.body.innerHTML = "";
  
  var wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");
  wrapper.setAttribute("style", "container");
  document.body.appendChild(wrapper);
  
  
  var table = document.createElement("table");
  table.setAttribute("id", "scoreboards");
  table.setAttribute("class", "table table-bordered table-hover");
  
  wrapper.appendChild(table);
  
  var theader = table.createTHead("theader");
  theader.setAttribute("class", "theader");
  
  var theaderRow = ScoreboardView.drawTableHeader(this.tableTemplate);
  theader.appendChild(theaderRow);
  
  var tbody = ScoreboardView.drawTableBody(this.tableTemplate, this.model);
  table.appendChild(tbody);
}

/* ================= MODEL ============== */
Model = Array;
Model.prototype.flag = true;

Model.prototype.emit = function (eventType, eventMessage) {
  console.log("handle message", eventType);
  switch(eventType) {
    case "makeSort":
      var column = eventMessage;
      console.log("column", column, "has been sorted");
      
      /* ===== BUSINESS LOGIC ====== */
      if(this.column == undefined) {
        orderAscending = false;
        console.log ("unsorted", this.column, orderAscending);
      } else if(this.column == column) {
        orderAscending = !this.orderAscending;
        console.log ("second click", this.column, orderAscending);
      } else {
        orderAscending = false;
        console.log ("first click", this.column, orderAscending);
      }
      
      this.sortByColumn(column, orderAscending);
      this.column = column;
      this.orderAscending = orderAscending;
    break;
    default:
      console.warn("unhandled event", eventType);
  }
}

Model.prototype.sortByColumn = function(column, orderAscending) {
  return this.sort(function(a, b) {
    return (a[column] - b[column]) * (orderAscending ? -1 : 1); 
  });
}

var scoreboards = new Model(
  {id: 1, name: "Проспект Просвещения", uptime: 134, temp: 23, voltage: 12.543},
  {id: 2, name: "Светлановская Площадь", uptime: 512, temp: 25, voltage: 13.089},
  {id: 3, name: "Метро \"Пионерская\"", uptime: 98, temp: 19, voltage: 12.991}
);

scoreboardView = new ScoreboardView(scoreboards);

function sortHandler(column) {
  console.log("handle sort of column", column);
  scoreboards.emit("makeSort", column);
  scoreboardView.render();
}

$(function() {
  console.log("ready");
  scoreboardView.render();
});
 