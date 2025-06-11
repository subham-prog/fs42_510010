const movies = [
  { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, duration: 148 },
  { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, duration: 152 },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, duration: 169 },
  { title: "Tenet", year: 2020, genre: "Sci-Fi", rating: 7.4, duration: 150 },
  { title: "Dunkirk", year: 2017, genre: "War", rating: 7.9, duration: 106 },
  { title: "The Prestige", year: 2006, genre: "Drama", rating: 8.5, duration: 130 },
];

const sortedTitles = movies
  .slice()
  .sort((a, b) => b.rating - a.rating)
  .map(movie => movie.title);

console.log("Sorted Titles by Rating:", sortedTitles);


const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);

const movieStrings = movies.map(movie => `${movie.title} (${movie.year}) - ${movie.duration} mins`);
console.log("Formatted Movie Strings:", movieStrings);

const avgDuration = movies.reduce((sum, movie) => sum + movie.duration, 0) / movies.length;
console.log("Average Duration:", avgDuration);


const highestRated = movies.reduce((best, movie) => movie.rating > best.rating ? movie : best);
console.log("Highest Rated Movie:", highestRated.title);

