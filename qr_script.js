/* var elem = document.getElementById("scoreboard");

var elemRow = elem.insertRow(2); */


var tableData = {
  ids:[1, 2, 3],
  names:["Проспект просвещения", "Светлановская площадь", "Пионерская"],
  uptimes:[134, 512, 98],
  temps:[23, 25, 19],
  voltages:[12.543, 13.089, 12.991]
};

function drawTable(table) {
  var body = [];
  var captions = [];
  for(caption in table) {
    captions.push(caption);
    body.push(table[caption]);
  }
  console.log(">:",captions.join("\t\t"));
  
  
  for(var rowIdx = 0; rowIdx < body[0].length; rowIdx++) {
    var row = [];
    body.forEach(function(elem) {
      row.push(elem[rowIdx]);
    });
    console.log((rowIdx + 1).toString(), ":", row.join("\t\t"));
  }
  
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
  
  drawTable(tableData);
}