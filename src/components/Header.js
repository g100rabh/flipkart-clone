import React, { useState } from "react";
import classes from "./Header.module.css";
import brandLogo from "../assests/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiChevronDown } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { PiDotsThreeVertical } from "react-icons/pi";
import { BiChevronUp } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assests/logoimg.jpg";

const Header = () => {
  const [signinHover, setSigninHover] = useState(false);
  return (
    <div className={classes.header}>
      <div className={classes.container_1}>
        <div className={classes.header_brand}>
          <RxHamburgerMenu className={classes.hamBurger} />
          <img src={logo} alt="logo" className={classes.logo_image} />
        </div>
        <div className={classes.header_search}>
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>
        
      </div>
      <div className={classes.container}>
      <img className={classes.search__logo} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTE1NzBfODc5OTgpIj4KICAgIDxwYXRoIGQ9Ik0xOCAyMC4yNVYzLjc1QzE4IDIuOTIxNTcgMTcuMzI4NCAyLjI1IDE2LjUgMi4yNUw3LjUgMi4yNUM2LjY3MTU3IDIuMjUgNiAyLjkyMTU3IDYgMy43NUw2IDIwLjI1QzYgMjEuMDc4NCA2LjY3MTU3IDIxLjc1IDcuNSAyMS43NUgxNi41QzE3LjMyODQgMjEuNzUgMTggMjEuMDc4NCAxOCAyMC4yNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik0xMiAxMC4xMDU1TDEyIDE3LjYwNTUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik05Ljc1IDE1LjM1NTVMMTIgMTcuNjA1NUwxNC4yNSAxNS4zNTU1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNMTAuNSA0LjVIMTMuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfMTE1NzBfODc5OTgiPgogICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+Cg==" alt="search" />
        <div
          className={classes.header_signin}
          onMouseEnter={() => setSigninHover(true)}
          onMouseLeave={() => setSigninHover(false)}
        >
          <CgProfile className={classes.proImg} />
          <span>
            <text>Login</text>
            {!signinHover ? (
              <BiChevronDown className={classes.arrow} />
            ) : (
              <BiChevronUp className={classes.arrow} />
            )}
          </span>
        </div>
        <div className={classes.header_cart}>
          <BsCart3 className={classes.cartIcon} />
          <span>Cart</span>
        </div>
        <div className={classes.header_seller}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.49979 13.0547V19.2729C4.49979 19.4658 4.57881 19.6507 4.71947 19.7871C4.86012 19.9235 5.05088 20.0001 5.24979 20.0001H18.7498C18.9487 20.0001 19.1395 19.9235 19.2801 19.7871C19.4208 19.6507 19.4998 19.4658 19.4998 19.2729V13.0547"
              stroke="#212121"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.0625 4H18.9375C19.1002 4.0013 19.2582 4.05324 19.3881 4.14817C19.5181 4.24309 19.6132 4.37599 19.6594 4.52727L21 9.09091H3L4.34062 4.52727C4.38682 4.37599 4.4819 4.24309 4.61187 4.14817C4.74183 4.05324 4.8998 4.0013 5.0625 4V4Z"
              stroke="#212121"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 9.09082V10.5454C9 11.3169 8.68393 12.0568 8.12132 12.6024C7.55871 13.148 6.79565 13.4545 6 13.4545C5.20435 13.4545 4.44129 13.148 3.87868 12.6024C3.31607 12.0568 3 11.3169 3 10.5454V9.09082"
              stroke="#212121"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.9999 9.09082V10.5454C14.9999 11.3169 14.6839 12.0568 14.1213 12.6024C13.5586 13.148 12.7956 13.4545 11.9999 13.4545C11.2043 13.4545 10.4412 13.148 9.87861 12.6024C9.316 12.0568 8.99993 11.3169 8.99993 10.5454V9.09082"
              stroke="#212121"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9999 9.09082V10.5454C20.9999 11.3169 20.6838 12.0568 20.1212 12.6024C19.5586 13.148 18.7955 13.4545 17.9999 13.4545C17.2042 13.4545 16.4412 13.148 15.8785 12.6024C15.3159 12.0568 14.9999 11.3169 14.9999 10.5454V9.09082"
              stroke="#212121"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Become a seller</span>
        </div>
        <div className={classes.header_dots}>
          <PiDotsThreeVertical className={classes.dots_3} />
        </div>
      </div>
    </div>
  );
};

export default Header;
