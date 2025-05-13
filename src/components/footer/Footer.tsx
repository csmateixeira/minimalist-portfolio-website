'use client'

import Image from "next/image";
import Link from "next/link";

import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                <Image src="/logo-white.svg" alt="Logo" height={32} width={61}/>
                <Link href="/">Home</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Contact Me</Link>
            </div>

            <div className={styles.footerIcons}>
                <Image src="/github-white.svg" alt="Github Logo" height={24} width={25}/>
                <Image src="/twitter-white.svg" alt="Twitter Logo" height={20} width={24}/>
                <Image src="/linkedin-white.svg" alt="Linkedin Logo" height={24} width={24}/>
            </div>
        </footer>
    );
}
