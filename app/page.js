'use client'
import styles from "./page.module.css";
import TaskFlow from "./components/TaskFlow";
export default function Home() {
  return (
    <main className={styles.main}>
      <TaskFlow />
    </main>
  );
}
