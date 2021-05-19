import React from "react";
import styles from "./Main.module.css";

const main = (props) => {
  return (
    <main className={styles.wrapper}>
      <header>
        <div>
          <button>Login</button>
        </div>
      </header>
      {props.children}
    </main>
  );
};

export default main;
