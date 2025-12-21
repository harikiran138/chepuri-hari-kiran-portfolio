import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Movie Ranking Project - Chepuri Hari Kiran",
  description: "My top 3 movies of all-time by Chepuri Hari Kiran",
};

export default function MovieRanking() {
  return (
    <div className="container">
      <h1>The Best Movies According to Chepuri Hari Kiran</h1>
      <h2>My top 3 movies of all-time.</h2>
      
      <hr />
      
      <h3>Inception</h3>
      <p>This is my favourite anime. I love the beautiful images.</p>
      
      <h3>The Shawshank Redemption</h3>
      <p>Really cool sci-fi movie.</p>
      
      <h3>Drive</h3>
      <p>Super beautiful film. Really artistic.</p>
      
      <hr />
      
      <div className="nav-links">
        <Link href="/">← Back to Home</Link>
        <Link href="/projects/birthday-invite">Birthday Invite Project →</Link>
      </div>
    </div>
  );
}
