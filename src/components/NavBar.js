import { NavLink } from "react-router-dom";

const NaVBar = () => {
  return (
    <ul>
        <li>
            <NavLink to="/" role="button"><span>Home</span></NavLink>
            <NavLink to="/greet" role="button"><span>Greet someone</span></NavLink>
        </li>
    </ul>
  )
};

export default NaVBar;
