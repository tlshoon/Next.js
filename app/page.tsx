import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>hello world!</h1>
      <Link href="/about">Go to AboutPage</Link>
      <p>
        <Link href={"/users"}>Users</Link>
      </p>
    </main>
  );
}