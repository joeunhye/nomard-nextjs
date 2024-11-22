"use client";

import React from "react";
import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
    id: string;
    title: string;
    poster_path: string;
}

function Movie({ id, title, poster_path }: IMovieProps) {
    const router = useRouter();
    function onClick() {
        router.push(`/movie/${id}`);
    }
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick} />
            <Link prefetch href={`/movie/${id}`}>
                {title}
            </Link>
        </div>
    );
}

export default Movie;
