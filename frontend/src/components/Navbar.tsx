import { Link } from "react-router-dom";

export function Navbar() {
  const list: string[] = ["Home", "Analytics", "Marketplace", "About"];

  return (
    <div>
      <h2>SoyaEasy</h2>
      <nav>
        <ul>
          {list.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <li key={item}>
                <Link to={path}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button>Register</button>
    </div>
  );
}
