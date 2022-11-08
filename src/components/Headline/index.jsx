import styles from "src/components/Headline/Headline.module.css";

export const Headline = (props) => {
  return (
    <div>
      <h1 className={styles.title}>
        <a href="https://nextjs.org">{props.page} page</a>
      </h1>

      <p className={styles.description}>アイテムの数は {props.children}</p>
    </div>
  );
};
