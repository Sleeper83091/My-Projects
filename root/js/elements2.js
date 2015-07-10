var movies = [
	["The Lord of the Rings", "9 hours", "2001-2005"],
	["Star Wars", "12+hours", "1977 - present"],
	["The Bourne Identity", "1h59m", "2002"],
	["There Will Be Blood", "2h38m", "2007"],
	["Gangs of New York", "3h36m", "2002"]
];

var movieList = document.createElement("ul");
movieList.setAttribute("id", "movieList");
document.body.appendChild(movieList);
var button = document.getElementById("alert");


for(var i =0; i < movies.length; i++){
	debugger;
	var movie = movies[i];
	movieObj = new Movie(movie[0], movie[1], movie[2]);
	e("li", movieObj.title);
	
}

function Movie(name, time, year){
		this.title = name;
		this.time = time;
		this.year = year;
	}


function e(elementType, text){
	debugger;
	var newE = document.createElement(elementType);
	newE.textContent = text;
	newE.addEventListener("click", function () {
    	alert(text);
	});
	movieList.appendChild(newE);
	
}
  



    