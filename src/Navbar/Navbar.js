import React from "react";
import "./navbar.style.scss";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <a className="navbar-brand text-white fs-4 fw-bold" href="#">
          لوجو
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/**************** */}
          <AiOutlineMenu fontSize={25} color="white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الرئيسية
              </a>
              <ul className="dropdown-menu text-right">
                <li>
                  <a className="dropdown-item" href="#">
                    عنصر1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    عنصر 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الخرائط
              </a>
              <ul className="dropdown-menu text-right">
                <li>
                  <a className="dropdown-item" href="#">
                    عنصر1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    عنصر2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الاقسام
              </a>
              <ul className="dropdown-menu text-right">
                <li>
                  <a className="dropdown-item" href="#">
                    عنصر 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    عنصر 2{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                عن الشركة
              </a>
              <ul className="dropdown-menu text-right">
                <li>
                  <a className="dropdown-item" href="#">
                    عنصر1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    عنصر2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الصفحات
              </a>
              <ul className=" dropdown-menu text-right">
                <li>
                  <a className="dropdown-item" href="#">
                    عنصر1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    عنصر2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="buttons-group d-none d-lg-flex justify-content-center align-items-center">
          <button className="button btn-lg button-primary mx-3 border-0 rounded-1  text-white">
            اضافة قائمة
          </button>
          <button className="button btn-lg border-0 button-secondary  rounded-1">
            تسجيل الدخول
          </button>
          <div className="dropdown dropdown-sm ms-5">
            <span
              className="text-white dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ع ر
            </span>
            <ul
              style={{ maxWidth: "200px" }}
              className="dropdown-menu mt-3"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  العربية
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  الانجليزية
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-100 buttons-group my-3 d-lg-none  d-flex justify-content-between align-items-center">
          <div className="buttons-group">
            <button className="ms-0 button button-primary mx-3 border-0 rounded-1 text-white">
              اضافة قائمة
            </button>
            <button className=" button border-0 button-secondary  rounded-1">
              تسجيل الدخول
            </button>
          </div>
          <div className="dropdown dropdown-sm">
            <span
              className=" dropdown-toggle text-light"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ع ر
            </span>
            <ul
              className="dropdown-menu mt-2"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  العربية
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  الانجليزية
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
