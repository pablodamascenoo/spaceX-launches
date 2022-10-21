import { Link } from "react-router-dom";
import Styles from "./index.module.css";

export default function Header() {
  return (
    <header className={Styles.header}>
      <h1 className="text-2xl w-fit pt-1">SpaceX Launches</h1>
      <hr className="w-[90%] mt-4" />
      <nav className="flex justify-around w-screen my-auto ">
        <Link to={"/"} className={Styles.link}>
          Home
        </Link>
        <Link to={"/previous"} className={Styles.link}>
          Previous
        </Link>
        <Link to={"/next"} className={Styles.link}>
          Next
        </Link>
        <Link to={"/upcoming"} className={Styles.link}>
          Upcoming
        </Link>
      </nav>
    </header>
  );
}
