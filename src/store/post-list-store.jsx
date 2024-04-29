import { createContext, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  handleSignUp: () => {},
  id: "",
  password: "",
  handleLogin: () => {},
  isLoggedIn: false,
  handleLogout: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    // console.log("dispatched");
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_Initial_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    // DEFAULT_POST_LIST
    []
  );

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleSignUp = (username, password) => {
    console.log(username);
    setId(username);
    setPassword(password);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
    navigate("/view-post")
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
    navigate("/Login"); 
    // setId("")
    // setPassword("")
  };

  const [fetching, setFeching] = useState(false);

  // const handleInitaliseButton = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };
  const addPost = (post) => {
    // console.log("add post called");
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_Initial_POST",
      payload: {
        posts: posts,
      },
    });
  };

  useEffect(() => {
    setFeching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFeching(false);
      });

    return () => {
      // console.log("useEffect Clean UP");
      // controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        fetching: fetching,
        handleSignUp: handleSignUp,
        id: id,
        password: password,
        handleLogin: handleLogin,
        isLoggedIn:isLoggedIn,
        handleLogout: handleLogout
        // username: username,
        // password: password,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Post 1",
//     body: "this is post 1",
//     reaction: 0,
//     userid: "user-1",
//     tags: ["post", "1"],
//   },
//   {
//     id: "2",
//     title: "Post 2",
//     body: "this is post 2",
//     reaction: 0,
//     userid: "user-2",
//     tags: ["post", "2"],
//   },
// ];

export default PostListProvider;
