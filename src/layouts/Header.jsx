import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h2>Air Gear | All in One</h2>
      </div>
      <div>
        <button>Admin Panel</button>
        <button>Login</button>
        <button>Logout</button>
      </div>
    </header>
  );
}

export default Header;
