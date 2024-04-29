import styles from "./SingUp.module.css";

const SingUp = () => {
  return (
    <form className={styles.signUp}>
      <h1 class="h3 mb-3 fw-normal">Welcome to Encord</h1>
      <div className={styles.input}>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            fdprocessedid="oerdr8"
          />
          <label for="floatingInput">Username</label>
        </div>
      </div>
      <div className={styles.input}>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            fdprocessedid="uvdchp"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <div className={styles.input}>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            fdprocessedid="uvdchp"
          />
          <label for="floatingPassword"> Confirm Password</label>
        </div>
      </div>
      <button
        class="btn btn-primary w-100 py-2"
        type="submit"
        fdprocessedid="pixm5e"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SingUp;
