import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Header = () => {
  const { isLoggedIn, handleLogout } = useContext(PostList);

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <header className={`${styles.header} p-3 text-bg-dark`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <div className="text-end">
            {isLoggedIn ? (
              <>
                <Link to="/profile">
                  <button type="button" className="btn btn-primary me-2">
                    Profile
                  </button>
                </Link>
                {/* <Link> */}
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                {/* </Link> */}
              </>
            ) : (
              <>
                {/* Not logged in: show login and signup links */}
                <Link to="/Login">
                  <button type="button" className="btn btn-outline-light me-2">
                    Login
                  </button>
                </Link>
                <Link to="/Sign-up">
                  <button type="button" className="btn btn-primary">
                    Sign-up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
