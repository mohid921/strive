import About from "./_components/about/about";
import Company from "./_components/company/company";
import Contact from "./_components/contact/contact";
import EventCard from "./_components/events-card/events-card";
import Hero from "./_components/hero/hero";
import MentorCard from "./_components/mentor-card/mentor-card";
import StoriesCard from "./_components/stories-card/stories-card";

import styles from "./page.module.css";

export default function Home() {
  const mentor_work_at_images: string[] = [
    "coventry-university.png",
    "network-plus.jpeg",
    "toyota.png",
    "NHS.jpg",
    "siemens.jpg",
    "national-grid.webp",
    "Quacquarelli-Symonds.webp",
    "royalnavy.webp",
    "university-of-bolton.png",
  ];

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
          <h3 className={styles.heading}>Our mentors work at</h3>
        </div>
        <div className={styles.mentorFlex}>
          {mentor_work_at_images.map((path, i) => (
            <Company key={path + i} path={path} />
          ))}
        </div>
      </div>
      <div className={styles.storiesBg}>
        <div className="container">
          <div className={styles.content}>
            <h3 className={styles.heading} style={{ color: "white" }}>
              Success stories
            </h3>
          </div>
          <div className={styles.storiesGrid}>
            <StoriesCard />
            <StoriesCard />
          </div>
        </div>
      </div>
      <div className={styles.eventsBg}>
        <div className="container">
          <div className={styles.content}>
            <h3 className={styles.heading}>upcoming events</h3>
          </div>
          <div className={styles.eventGrid}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
      <About />
    </main>
  );
}
