"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function navigation() {
    const path = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "✨" : ""}
                </li>
            </ul>
        </nav>
    );
}

export default navigation;
