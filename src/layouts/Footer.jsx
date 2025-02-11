import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Developed by Mary with ❤</p>
      <div>
        <button>Ins</button>
        <button>Tel</button>
        <button>FB</button>
      </div>
    </footer>
  );
}

export default Footer;
