// components/Header.tsx
import styles from "./Header.module.css";
import UserButton from "./user-button";

const Header: React.FC = () => {
  return (
  <div className={styles.header}>
    <UserButton/>
  </div>
  )

};

export default Header;
