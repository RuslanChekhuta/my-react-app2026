import styles from "./Button.module.css";
import stylesAdded from "./AddedStyles.module.css";

const Button = ({ variant = "primary" }) => {
  const buttonClass = `${styles[variant]} ${styles.button}`;

  return (
    <>
      <button className={buttonClass}>Кнопка</button>
      <a href="#" className={stylesAdded.link}>
        Это ссылка
      </a>
      <div className={styles["bottom-block"]}>Блок</div>
    </>
  );
};

export default Button;
