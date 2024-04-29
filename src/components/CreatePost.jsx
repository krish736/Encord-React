import { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";
// import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const useridELement = useRef();
  const postTitleELement = useRef();
  const postBodyELement = useRef();
  const postTagsELement = useRef();

  const handlePostButton = () => {
    const userid = useridELement.current.value;
    const postTitle = postTitleELement.current.value;
    const postBody = postBodyELement.current.value;
    const postTags = postTagsELement.current.value.split(" ");

    useridELement.current.value = "";
    postTitleELement.current.value = "";
    postBodyELement.current.value = "";
    postTagsELement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userid,
        title: postTitle,
        body: postBody,
        tags: postTags,
        // id: Date.now(),
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        // console.log(post)
        navigate("/view-post");
      });
  };

  return (
    <div className={styles.createPost}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="userid"
          placeholder="Your Username"
          ref={useridELement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Your Post Title"
          ref={postTitleELement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Description
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="4"
          ref={postBodyELement}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space!"
          ref={postTagsELement}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handlePostButton}
      >
        Post
      </button>
    </div>
  );
};


// export async function CreatePostAction(data){
//   const formData = await data.request.formData();
//   const postData = Object.fromEntries(formData);
//   postData.tags = postData.tags.split(" ");
//   console.log(postData);

//   fetch("https://dummyjson.com/posts/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(postData),
//   })
//     .then((res) => res.json())
//     .then((post) => {
//       console.log(post);
//     });

//   return redirect("/");
// }

export default CreatePost;
