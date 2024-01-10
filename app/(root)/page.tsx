import Company from "./_components/company";
import Hero from "./_components/hero";
import MentorCard from "./_components/mentor-card";

import styles from "./page.module.css";

export default function Home() {
  const arr = new Array(10).fill(0);

  return (
    <main>
      <Hero />
      <div className="container">
        <div className={styles.content}>
          <h3 className={styles.heading}>Meet Our Mentors</h3>
        </div>
        <div className={styles.mentorGrid}>
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <h3 className={styles.heading}>Meet Our Mentors</h3>
        </div>
        <div className={styles.mentorFlex}>
          {arr.map((_, i) => (
            <Company key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
