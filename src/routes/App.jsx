import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
// import CreatePost from "../components/CreatePost";
// import PostList from "../components/PostList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/post-list-store";
// import WelcomeMessage from "../components/WelcomeMessage";
import Login from "../components/Login";

function App() {
  const [SelectedPostArea, SetSelectedPostArea] = useState("");
  return (
    <PostListProvider>
      <div className={styles.appContainer}>
        <SideBar
          SelectedPostArea={SelectedPostArea}
          SetSelectedPostArea={SetSelectedPostArea}
        />
        <div className={styles.hero}>
          <Header />
          {/* <WelcomeMessage/> */}
          <Outlet />
          {/* <Login/> */}
          {/* {SelectedPostArea === "View Post" ? <PostList /> : <CreatePost />} */}
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
