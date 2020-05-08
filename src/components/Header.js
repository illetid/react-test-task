import * as React from "react";
import styled from "@emotion/styled";
import { useTheme } from "../utils/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import Link from "next/link";

const HeaderStyled = styled.header`
  width: 100%;
  padding: 20px;
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};

  .header {
    &__theme-switcher {
      color: ${({ theme }) => theme.primary};
      &:hover {
        color: ${({ theme }) => theme.secondary};
      }
    }
    &__logo {
      text-decoration: none;
      color: ${({ theme }) => theme.primary};
      font-size: ${({ theme }) => theme.fontSizeTitle};
      cursor: pointer;
    }

    &__content {
      display: flex;
    }

    &__menu {
      list-style: none;
      padding: 0 16px;
    }

    &__link {
      text-decoration: none;
      color: ${({ theme }) => theme.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
export const Header = () => {
  const themeState = useTheme();

  return (
    <HeaderStyled>
      <Link href="/">
        <span className="header__logo">Test task</span>
      </Link>
      <div className="header__content">
        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <Link href="/simple">
                <a className="header__link">Simple list</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="header__theme-switcher"
          onClick={() => themeState.toggle()}
        >
          {themeState.dark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </HeaderStyled>
  );
};
