import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.welcomeMessage}>Welcome To ENCORD</p>
    </div>
  );
};

export default WelcomeMessage;
