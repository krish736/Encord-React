import { useRef, useState } from "react";
import styles from "./SingUp.module.css";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const { handleSignUp } = useContext(PostList);
  const usernameElement = useRef();
  const passwordElement = useRef();
  const confirmPasswordElement = useRef();
  const navigate = useNavigate();
  // const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUpButton = () => {
    const username = usernameElement.current.value;
    const password = passwordElement.current.value;
    const confirmPassword = confirmPasswordElement.current.value;

    if (!username || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return; // Stop execution if any field is empty
    }

    if (password === confirmPassword) {
      // console.log(username, password, confirmPassword);
      handleSignUp(username, password);
      navigate("/Login");
    } else {
      alert("Password does not match! Please enter again");
    }
  };

  return (
    <form className={styles.signUp}>
      <h1 className="h3 mb-3 fw-normal">Welcome to Encord</h1>
      <div className={styles.input}>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            fdprocessedid="oerdr8"
            ref={usernameElement}
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
            ref={passwordElement}
          />
          <label htmlFor="floatingPassword">Password</label>
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
            ref={confirmPasswordElement}
          />
          <label htmlFor="floatingPassword">Confirm Password</label>
        </div>
      </div>

      <button
        className="btn btn-primary w-100 py-2"
        type="button"
        fdprocessedid="pixm5e"
        onClick={handleSignUpButton}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SingUp;
