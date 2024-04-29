import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import styles from "./PostList.module.css";
import NoPost from "./Nopost";
import LoadingSpinner from "./LoadingSpinner";


const PostList = () => {
  const { postList,  fetching } = useContext(PostListData);

  return (

    <div className={styles.postList}>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && (
        <NoPost  />
      )}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
