const moviename = document.getElementById("moviename");

const movies = ["Batman", "Superman", "Spiderman", "Iron Man", "Wonder Woman", "Captain America", "Thor", "Hulk", "Black Widow", "Aquaman"];

const displayList = document.getElementById("displayMovieList");

const displayedList = [];

const errorMsg = document.getElementById("errorMsg");

const searchMovie = () => {
    const name = moviename.value.trim();
    if(name === "") return;
    errorMsg.textContent = "";

    let found = false;

    for (let movie of movies) {
        if (movie.toLocaleLowerCase().includes(name.toLowerCase())) {
            if (!displayedList.includes(movie)) {
                const newLi = document.createElement('li');
                newLi.textContent = movie;
                displayList.appendChild(newLi);
                displayedList.push(movie);
                found = true;
            }
            else {
                errorMsg.textContent = `${movie} is already in the list.`;
            }

        }
    }
    if(!found){
        errorMsg.textContent = "No movies found.";
    }
    moviename.value = " ";
}