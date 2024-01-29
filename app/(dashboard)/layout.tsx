import "aos/dist/aos.css";
import SideBar from "./_components/sidebar/sidebar";

import styles from "./layout.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar />
      <main className={styles.container}>
        <div>{children}</div>
      </main>
    </>
  );
}
