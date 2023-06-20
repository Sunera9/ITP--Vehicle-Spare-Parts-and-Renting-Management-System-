import styles from "./sCard.module.css"

const sCard = ({ children, ScardClass }) => {
    return <div className={`${styles.Scard} ${ScardClass}`}>{children}</div>;
  };
  
  export default sCard;