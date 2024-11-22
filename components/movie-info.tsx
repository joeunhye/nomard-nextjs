import { API_URL } from "../app/page";
import styles from "../styles/movie-info.module.css";

async function getMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function movieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
            <div className={styles.info}>
                <h2 className={styles.title}>{movie.title}</h2>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target="_blank">
                    homepage
                </a>
            </div>
        </div>
    );
}

export default movieInfo;
