'use client'

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

export enum Path {
    HOME = "/",
    PORTFOLIO = "/portfolio",
    CONTACT = "/contact",
}

import styles from './Header.module.css';

export const Header = () => {
    const pathname: string = usePathname();

    return (
        <header className={styles.header}>
            <Image src="/logo.svg" alt="Logo" height={32} width={61}/>

            <div className={styles.headerLinks}>
                <Link href="/" className={pathname === Path.HOME ? "text-cyan" : "text-grayblue"}>Home</Link>
                <Link href="/portfolio"
                      className={pathname === Path.PORTFOLIO ? "text-cyan" : "text-grayblue"}>Portfolio</Link>
                <Link href="/contact" className={pathname === Path.CONTACT ? "text-cyan" : "text-grayblue"}>Contact
                    Me</Link>
            </div>
        </header>
    );
}
