import { useRef } from "react";
import styles from "./SingUp.module.css";

const SingUp = () => {
  const usernameElement = useRef();
  const passwordElement = useRef();
  const confirmPasswordElement = useRef();

  const handleSignUp = () => {
    const username = usernameElement.current.value;
    const password = passwordElement.current.value;
    const confirmPassword = confirmPasswordElement.current.value;

    if (!username || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return; // Stop execution if any field is empty
    }

    if (password === confirmPassword) {
      console.log(username, password, confirmPassword);
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
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SingUp;
