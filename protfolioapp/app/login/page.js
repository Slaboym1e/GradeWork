import { authentication } from "../lib/actions";
import styles from "./login.module.css";

export const metadata = {
  title: "Аутентификация",
  description: "На этой странице, бла бла бла",
};

export default function Page() {
  return (
    <main>
      <form className={styles.form} action={authentication}>
        <input type="text" name="login" placeholder="login"></input>
        <input type="password" name="password" placeholder="password"></input>
        <button type="submit">Войти</button>
      </form>
    </main>
  );
}
