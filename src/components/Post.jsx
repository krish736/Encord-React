import { useState } from "react";
import styles from "./Post.module.css";
import { AiFillLike } from "react-icons/ai";
const Post = ({ post }) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikeStatus(!likeStatus);
    if (!likeStatus) {
      let getLikes = likes + 1;
      setLikes(getLikes);
    } else {
      let goLikes = likes - 1;
      setLikes(goLikes);
    }
  };
  return (
    <>
      {/* style={{ width: "18rem" }} */}
      <div className={`card ${styles.post}`}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          {post.tags &&
            post.tags.map((tag) => (
              <span
                key={tag}
                className={`badge text-bg-success ${styles.tags}`}
              >
                {tag}
              </span>
            ))}
          <p className="card-text">{post.body}</p>
          <button
            type="button"
            className={`btn ${likeStatus && "btn-primary"}`}
            onClick={handleLike}
          >
            <AiFillLike />
            <span className={`badge text-bg-secondary ${styles.span}`}>
              {likes}
            </span>
          </button>
          <span
            className={`position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary ${styles.userid}`}
          >
            {post.userid}
          </span>
        </div>
      </div>
    </>
  );
};

export default Post;
