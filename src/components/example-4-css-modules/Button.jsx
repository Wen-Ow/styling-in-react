import styles from "./button.module.css";

const Button = ({ buttonText }) => {
  return <button className={styles.btn}>{buttonText}</button>;
};

export default Button;


// Copy;
// Kebab-case class names will cause problems when using dot notation

// because of the dash character, like in `class-name` below:
// return <button className={styles.class - name}>{buttonText}</button>;

// Instead, use camelCase class names that work with dot notation:
// return <button className={styles.className}>{buttonText}</button>;

// If you must use kebab-case class names, you can use bracket notation:
// return <button className={styles["class-name"]}>{buttonText}</button>;