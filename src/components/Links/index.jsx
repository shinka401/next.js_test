import styles from "src/components/Links/Links.module.css";

export function Links(props) {
  return (
    <div className={styles.grid}>
      <button onClick={props.handleReduce}>減らす</button>
      {props.items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
