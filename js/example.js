// ADD NEW ITEM TO END OF LIST
var ul = document.getElementsByTagName("ul")[0];

var li = document.createElement("li");
li.appendChild(document.createTextNode("cream"));
ul.appendChild(li);

// ADD NEW ITEM START OF LIST
var li2 = document.createElement("li");
li2.appendChild(document.createTextNode("kale"));
ul.insertBefore(li2, ul.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var liList = document.getElementsByTagName("li");
for(var i = 0; i < liList.length; i++){
  liList[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var h2 = document.getElementsByTagName("h2")[0];
var span = document.createElement("span");
span.appendChild(document.createTextNode(i));
h2.appendChild(span);
