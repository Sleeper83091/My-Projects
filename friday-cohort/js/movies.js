var form = document.getElementById("newMovieForm");
var btn = document.getElementById("btn");
var genreInputs = document.getElementsByName("genre");
var ulList = document.getElementById("list");
console.log(genreInputs);

var moviesObj = [];

function Movies(name, time, y, g, descrip){
	this.title = name,
	this.time = time, 
	this.year = y,
	this.genre = g,
	this.desc = descrip
}



function e(elementType, text){
		var newE = document.createElement(elementType);
		newE.textContent = text;
		newE.addEventListener("click", function (evt) {
			evt.preventDefault();
			findTarget(evt.target.textContent);
		});
		ulList.appendChild(newE);		
} 

function findTarget(title){
	var mTitle = title;
	for(var i=0; i<moviesObj.length; i++){
		var movie = moviesObj[i];
		if (mTitle === movie.title){
			var name = movie.title;
			var des = movie.desc;
			return alert(name + ":   " + des);
		}
	}
}

btn.addEventListener("click", function (evt) {
	evt.preventDefault();
    var title = document.getElementById("movieTitle").value;
    var runTime = parseInt(document.getElementById("runTime").value);
    var year = document.getElementById("year").value;
    var descrip = document.getElementById("desc").value;
    var genre;

	for (var i = 0; i < genreInputs.length; i++) {
	    var genreInput = genreInputs[i];
	    if (genreInput.checked) {
	        genre = genreInput.value;
	    }
	}

	Movies.prototype = {
		runTimeHours: function toHours(){
			debugger;
			var mins = runTime;
			var resultH = parseInt(mins / 60);
			var resultMins = mins % 60;
			this.time = resultH + "Hours and " + resultMins + "minutes.";
		}
	}

	var movie = new Movies(title, runTime, year, genre, descrip);
	moviesObj.push(movie);
	e("li", movie.title);

	form.reset();

});

