import { useContext, useRef } from "react";
import styles from "./Login.module.css";
import { PostList } from "../store/post-list-store";

const Login = () => {
  const { id, password , handleLogin } = useContext(PostList);

  const loginUsernameElement = useRef();
  const loginPasswordElement = useRef();

  const handleLoginButton = () => {
    const loginUsername = loginUsernameElement.current.value;
    const loginPassword = loginPasswordElement.current.value;
    if (!loginUsername || !loginPassword) {
      alert("Please fill in all fields.");
      return; // Stop execution if any field is empty
    }

    if (loginUsername === id && loginPassword === password) {
      handleLogin()
    } else {
      alert("Incorrect Username/Password!");
    }
  };

  return (
    <form className={styles.login}>
      <h1 className="h3 mb-3 fw-normal">Login to Encord</h1>
      <div className={styles.input}>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="krish"
            fdprocessedid="oerdr8"
            ref={loginUsernameElement}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
      </div>
      <div className={styles.input}>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            fdprocessedid="uvdchp"
            ref={loginPasswordElement}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
      </div>

      <button
        className="btn btn-primary w-100 py-2"
        type="button"
        fdprocessedid="pixm5e"
        onClick={handleLoginButton}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
