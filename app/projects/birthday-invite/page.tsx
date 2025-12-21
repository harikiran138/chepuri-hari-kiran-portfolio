import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Birthday Invite Project - Chepuri Hari Kiran",
  description: "Birthday party invitation page",
};

export default function BirthdayInvite() {
  return (
    <div className="container">
      <h1>It&apos;s My Birthday!</h1>
      <h2>On the 12th of May</h2>
      
      <Image
        src="https://raw.githubusercontent.com/appbrewery/webdev/main/birthday-cake3.4.jpeg"
        alt="purple birthday cake with candles"
        width={600}
        height={600}
        style={{ width: "100%", height: "auto" }}
      />
      
      <h3>What to bring:</h3>
      <ul>
        <li>Balloons (I love balloons)</li>
        <li>Cake (I&apos;m really good at eating)</li>
        <li>An appetite (There will be lots of food)</li>
      </ul>
      
      <h3>This is where you need to go:</h3>
      <a
        href="https://www.google.com/maps/@35.7040744,139.5577317,3a,75y,289.6h,87.01t,0.72r/data=!3m6!1e1!3m4!1sgT28ssf0BB2LxZ63JNcL1w!2e0!7i13312!8i6656"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Map Link
      </a>
      
      <hr />
      
      <div className="nav-links">
        <Link href="/">← Back to Home</Link>
        <Link href="/projects/movie-ranking">← Movie Ranking Project</Link>
      </div>
    </div>
  );
}
