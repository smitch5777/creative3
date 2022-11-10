import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Duck</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Fox">Fox</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    </>
  )
};

export default Layout;