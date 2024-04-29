import styles from "./LoadingSpinner.module.css"

const LoadingSpinner = () => {
  return (
    <div className={`text-center ${styles.spinner}`}>
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
