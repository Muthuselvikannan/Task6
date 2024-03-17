//Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values

class movie{
    
    constructor(title, studio, PG){
        
        this.tile = title;
        this.studio = studio;
        this.PG = PG;
    }
}
const movieInfo = new movie("Badri", "Venkateshwara Art Films", "PG-10");
console.log(movieInfo);

//The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided


class movie{
    
    constructor(title, studio, rating= "PG"){
        
        this.tile = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movieInfo1 = new movie("Badri", "Venkateshwara Art Films", "PG-10")

const movieInfo2 = new movie("Kaadhalan", "A.R.S. Film International")

console.log(movieInfo1)
console.log(movieInfo2)

//Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full

class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movieInfo) {
        let screen = movieInfo.filter(movies => movies.rating === "PG");
        return screen;
    }
}

let movie1 = new movie("Interstellar", "Paramount Pictures", "PG");
let movie2 = new movie("Inception", "Warner Bros. Pictures", "PG-13");
let movie3 = new movie("The Dark Knight", "Warner Bros. Pictures", "PG");


let arr = [movie1, movie2, movie3];
let pgMovies = movie.getPG(arr);
console.log(pgMovies); 

//Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movie{
    
    constructor(title, studio, rating){
        
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const CasinoRoyale = new movie("Casino Royale", "Eon Productions", "PG-13");

console.log(CasinoRoyale);