import ButtonComponent from "../components/Button/Button";
import Header from "../components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ButtonComponent label="Click Me" bgColor="lightgrey" />
    </main>
  );
}
