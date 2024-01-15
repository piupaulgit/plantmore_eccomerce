"use client";

import { logo } from "../../assets/images";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../redux/modalSlice";
import { usePathname } from "next/navigation";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useUser } from "../_lib/Auth";

const Header = () => {
  const dispath = useDispatch();
  const pathName = usePathname();
  useUser();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    useState<boolean>(false);
  const userDetail = useSelector(
    (state: RootState) => state.UserReducer.currentUser
  );

  return (
    <header className="flex py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="">
            <Image src={logo} alt="plant more logo" width="120" />
          </a>
          <nav className="flex sm:justify-center space-x-4">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Products", "/products"],
              ["Contact", "/contact"],
            ].map(([title, url]) => (
              <Link
                href={url}
                className={`${
                  pathName == url ? "text-lime-600 underline" : "text-slate-700"
                } rounded-lg px-3 py-2  font-medium hover:bg-slate-100 hover:text-slate-900`}
              >
                {title}
              </Link>
            ))}
          </nav>
          {!userDetail.email ? (
            <ul className="flex gap-2 text-sm">
              <li className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </li>
              <li>
                <button
                  className="text-gray-600 hover:text-lime-600"
                  onClick={() =>
                    dispath(
                      modalAction({ modalName: "registerModal", isOpen: true })
                    )
                  }
                >
                  Register
                </button>
              </li>
              <li>/</li>
              <li>
                <button
                  className="text-gray-600 hover:text-lime-600"
                  onClick={() =>
                    dispath(
                      modalAction({ modalName: "loginModal", isOpen: true })
                    )
                  }
                >
                  Login
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex gap-6 items-center">
              <li>
                <a className=" relative flex" href="/wishList">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                  <span className=" right-[-12px] top-[-8px] absolute bg-lime-600 w-4 h-4 block text-[8px]/[16px] text-gray-50 rounded-xl text-center">
                    09
                  </span>
                </a>
              </li>
              <li>
                <a className=" relative flex" href="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-basket"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <span className=" right-[-11px] top-[-8px] absolute bg-lime-600 w-4 h-4 block text-[8px]/[16px] text-gray-50 rounded-xl text-center">
                    10
                  </span>
                </a>
              </li>
              <li className=" relative">
                <button
                  className="w-[35px] h-[35px] ml-3 rounded-full bg-lime-600 text-white text-center flex justify-center items-center hover:bg-gray-700"
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </button>
                {isProfileDropdownOpen && (
                  <div className=" rounded-md bg-white border-[1px] absolute z-10 min-w-[200px] right-0">
                    <ul>
                      <li className=" font-light text-sm py-2 px-5 text-gray-700 bg-slate-100">
                        Hello, {userDetail.email}
                      </li>
                      <li>
                        <Link
                          className=" font-light text-sm py-2 px-5 text-gray-700 hover:bg-slate-100 block"
                          href=""
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className=" font-light text-sm py-2 px-5 text-gray-700 hover:bg-slate-100 block"
                          href=""
                        >
                          Order
                        </Link>
                      </li>
                      <li>
                        <Link
                          className=" font-light text-sm py-2 px-5  text-white bg-red-500 hover:bg-slate-800 block"
                          href=""
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
