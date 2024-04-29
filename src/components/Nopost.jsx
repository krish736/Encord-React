import styles from "./NoPost.module.css";

const NoPost = ({ handleInitaliseButton }) => {
  return (
    <div className={styles.nopost}>
      <h2>There are no post yet!</h2>
      {/* <button className="btn btn-primary" onClick={handleInitaliseButton}>
        Initialise
      </button> */}
    </div>
  );
};

export default NoPost;
