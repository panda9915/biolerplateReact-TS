import React, { FC } from "react";
import { useAuthorization } from "../../hooks";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../Logo";

interface IProps {}

export const Header: FC<IProps> = (props: IProps): JSX.Element => {
  const { isAuthorized, resetAuthorization } = useAuthorization();

  return (
    <nav>
      <div>
        <Link to="/">
          <Logo />
        </Link>
        <NavLink
          style={({ isActive }) => isActive ? { borderBottom: "1px solid blue" } : undefined}
          to="/"
          end
        >Рецепти</NavLink>
        <NavLink
          style={({ isActive }) => isActive ? { borderBottom: "1px solid blue" } : undefined}
          to="/ingredients"
          end
        >Інгредієнти</NavLink>
        <NavLink
          style={({ isActive }) => isActive ? { borderBottom: "1px solid blue" } : undefined}
          to="/storage"
          end
        >Сховок</NavLink>
      </div>

      {!isAuthorized ? (
        <div>
          <Link to="/sign-in">Увійти</Link>
        </div>
      ) : (
        <div>
          <button onClick={resetAuthorization}>
            Вийти
          </button>
          <Link to="/profile">
            profile
          </Link>
        </div>
      )}
    </nav>
  );
};
