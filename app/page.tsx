import Link from "next/link";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
