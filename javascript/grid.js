//Забираем данные аяксом, пока что все и синхронно. Начало
var request = getXmlHttpRequest();
var url = "php/php.php"; 
request.open("GET", url, false);
request.send(null);
// Чтение ответa
var arrayOfProducts = JSON.parse(request.responseText);
console.log(arrayOfProducts);
//Забираем данные аяксом, пока что все и синхронно. Конец

//Создаем таблицу динамически, в зависимости от кол-ва данных. Начало
var UpOrDown = false;

createTable(arrayOfProducts);

function createTable (products) {
    var newElem = document.getElementsByTagName('table')[0]; //первая таблица
  

//Начало строки для поиска
var newRow=newElem.insertRow(0); //Поле кнопок сортировки
var newCell=newRow.insertCell(newRow.length);
newCell.width="100";
newCell.colSpan = 3;
newCell.align = "right";

    var p = document.createElement('p');
    newCell.appendChild(p);
    p.innerHTML = "Search:";

    var input = document.createElement('input');
    newCell.appendChild(input);
    input.innerHTML = "Введите параметры поиска";
//Конец строки для поиска

    //Начало формирования заголовков столбцов
newRow=newElem.insertRow(1);
     for (key in products[0]){
     newCell = newRow.insertCell(newRow.length);
     newCell.width="110";
     newCell.innerHTML=key;
     newCell.style.fontWeight = 'bold';
     newCell.align = "center";
     newCell.classList.add(key);
     newCell.onclick = function(){
      ssort(this.innerHTML); 
      if(UpOrDown==false){UpOrDown=true;}
      else{UpOrDown=false;}

      };

    };
    //Конец формирования заголовков столбцов

    //Начало формирования содержимого таблицы
    for (key in products){
      newRow=newElem.insertRow(newElem.length);
       for (key2 in products[key]) {
           newCell = newRow.insertCell(newRow.length);
           newCell.width="110";
           newCell.innerHTML=products[key][key2];    
        };
    };
    //Конец формирования содержимого таблицы
};

//Создаем таблицу динамически, в зависимости от кол-ва данных. Конец
    
//Начало сортировки 
function ssort (tag) {

var table = document.getElementsByTagName('table')[0];

  if(tag!="name"){ //Определение сортировки - по числу или строке
  var sortedValues = arrayOfProducts.sort(compareValuesInt);
}
  else {
  var sortedValues = arrayOfProducts.sort(compareValuesString);
};

table.innerHTML = "<caption>GRID</caption>"; //стирааем старую таблицу
createTable(sortedValues); //создаем отсортированную таблицу

function compareValuesInt(obj1, obj2) {  //сортировка строчных значений
  if(UpOrDown==true){return obj1[tag.toString()] - obj2[tag.toString()];}
  else {return obj2[tag.toString()] - obj1[tag.toString()];}
};

function compareValuesString(obj1, obj2) { //сортировка числовых значений
  if(UpOrDown==true){return obj1[tag.toString()] > obj2[tag.toString()];}
  else {return obj1[tag.toString()] < obj2[tag.toString()];}
};

};
//Конец сортировки 
