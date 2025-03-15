import { useState } from "react";

const API_KEY: string = "d5d7d381";

type Data = {
  Title: string;
  Poster: string;
  Year: number;
  Awards: string;
  imdbID: string;
  Plot: string;
  Runtime: string;
};

const ShowMovie = () => {
  const [movie, setMovie] = useState<Data>({
    Title: "Toy Story",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_SX300.jpg",
    Year: 1995,
    Awards: "Nominated for 3 Oscars. 29 wins & 24 nominations total",
    imdbID: "tt0114709",
    Plot: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    Runtime: "81 min",
  });
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const searchMovie = async () => {
    event?.preventDefault();
    if (!title) return;
    setTitle("");
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`
      );
      if (!response.ok) throw new Error("movie not find");
      const data = await response.json();
      setError(null);
      setMovie(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const randomMovie = async () => {
    setLoading(true);

    const names = [
      "Lego",
      "Star Wars",
      "Avengers: Endgame",
      "Batman",
      "The Dark Knight",
      "Mad Max",
      "The Lord of the Rings",
      "Harry Potter",
      "The Hobbit",
      "The Chronicles of Narnia",
      "Titanic",
      "Toy Story",
      "Up",
      "Shrek",
      "Spider Man",
      "Forrest Gump",
      "Dune: Part One",
    ];
    const random = names[Math.floor(Math.random() * names.length)];

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${random}&apikey=${API_KEY}`
      );
      if (!response.ok) throw new Error("system failed");
      const data = await response.json();
      setError(null);
      setMovie(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="container text-center">
        <div className="row mt-5">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <form>
              <div className="p-2">
                <input
                  className="form-control"
                  placeholder="Search Movies"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="p-2">
                <button
                  className="btn btn-success w-100"
                  onClick={() => {
                    searchMovie();
                  }}
                >
                  Search Movie
                </button>
              </div>
            </form>
          </div>
          <div className="col-12">
            {loading && <p className="fs-5 mt-4">Loading...</p>}
            {error && <p className="fs-5 mt-4">{error}</p>}
          </div>
        </div>
        <div className="row mt-5 gap-4">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h2 className="fs-2 h-1">{movie?.Title}</h2>
          </div>
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <div className="d-lg-flex align-items-center gap-5">
              <img
                className="img-fluid rounded"
                src={movie?.Poster}
                alt={movie?.Title}
              />
              <div className="d-flex flex-column justify-content-center">
                <h2 className="fs-3">About</h2>
                <span>
                  <strong>Year:</strong> {movie?.Year}
                </span>
                <span>
                  <strong>Awards:</strong> {movie?.Awards}
                </span>
                <span>
                  <strong>Time:</strong> {movie.Runtime}
                </span>
                <h2 className="fs-3">Description</h2>
                <span>{movie?.Plot}</span>
              </div>
              <button className="btn btn-light" onClick={() => randomMovie()}>
                <i className="bi bi-arrow-right fs-2"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShowMovie;
