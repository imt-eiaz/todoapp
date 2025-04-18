import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
  return (
    <>
      <h3 className={styles.h3}>{item}</h3>
    </>
  );
}
