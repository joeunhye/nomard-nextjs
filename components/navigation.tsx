"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

function navigation() {
    const path = usePathname();

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "✨" : ""}
                </li>
            </ul>
        </nav>
    );
}

export default navigation;
