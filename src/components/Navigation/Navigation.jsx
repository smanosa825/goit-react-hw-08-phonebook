import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </nav>
  );
};
