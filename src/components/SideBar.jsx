import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const SideBar = ({ SelectedPostArea, SetSelectedPostArea }) => {
  const handleSelectPostArea = (area) => {
    return () => {
      SetSelectedPostArea(area);
    };
  };

  return (
    <div
      className={`${styles.sidebar} d-flex flex-column flex-shrink-0 p-3 text-bg-dark`}
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Encord</span>
      </a>
      <hr />
      <div className={styles.postOptions}>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="/view-post"
              className={`nav-link text-white ${
                SelectedPostArea === "View Post" && "active"
              }`}
              aria-current="page"
              onClick={handleSelectPostArea("View Post")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              View Post
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/create-post"
              className={`nav-link text-white ${
                SelectedPostArea === "Create Post" && "active"
              }`}
              onClick={handleSelectPostArea("Create Post")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default SideBar;
