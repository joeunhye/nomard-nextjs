import MovieVideo from "../../../components/movie-video";
import MovieInfo, { getMovie } from "./../../../components/movie-info";
import { Suspense } from "react";

// async function getMovie(id: string) {
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }

// async function getVideo(id: string) {
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json();
// }

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    let { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
    let { id } = await params;
    // const movie = await getMovie(id);
    // const video = await getVideo(id);
    // const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);

    return (
        <div>
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie video...</h1>}>
                <MovieVideo id={id} />
            </Suspense>
        </div>
    );
}

export default MovieDetail;
