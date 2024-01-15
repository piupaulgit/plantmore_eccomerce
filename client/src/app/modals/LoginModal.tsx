"use client";

import React, { useEffect, useState } from "react";
import Input from "../inputs/Input";
import Modal from "./Modal";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { modalAction } from "../../redux/modalSlice";
import toast, { Toaster } from "react-hot-toast";
import { userLogin } from "@/services/apis/user";
import { saveUser } from "@/redux/userSlice";

interface User {
  email: string;
  password: string;
}

const LoginModal = () => {
  const loginModalState = useSelector(
    (state: RootState) => state.ModalReducer.activeModalName
  );
  const dispatch = useDispatch();
  const [user, setUser] = useState<User>(Object);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(true);

  useEffect(() => {
    if (user.email && user.password) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [user]);

  const handleOnChange = (e: any) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const login = () => {
    setIsLoading(true);
    setIsDisable(true);
    try {
      userLogin(user).then((res: any) => {
        if (res.status === "success") {
          toast.success(res.message);
          const { email, accessToken, role } = res.user;
          localStorage.setItem("accessToken", accessToken);
          dispatch(modalAction({ modalName: "loginModal", isOpen: false }));
          dispatch(
            saveUser({
              email,
              accessToken,
              role,
            })
          );
        } else {
          toast.error(res.message);
        }
        setIsLoading(false);
      });
    } catch (err: any) {
      toast.error(err);
    }
  };

  const bodyContent = (
    <>
      <h2 className=" font-bold text-2xl text-gray-700">
        Welcome to Plant More
      </h2>
      <h6 className=" font-light mb-8 text-sm">
        If you have an account plese login here
      </h6>
      <div className="flex flex-col gap-4">
        <Input
          id="email"
          label="Email Address"
          disabled={false}
          required
          onChange={(e: any) => handleOnChange(e)}
        />
        <Input
          id="password"
          label="Password"
          disabled={false}
          required
          type="password"
          onChange={(e: any) => handleOnChange(e)}
        />
      </div>
    </>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <button
        className="bg-lime-600 text-white py-3 hover:bg-gray-900 disabled:bg-gray-400"
        disabled={isDisable}
        onClick={login}
      >
        {isLoading ? "Logging you in. Please wait... " : "Login"}
      </button>
      <div
        className="
      text-neutral-500 text-center mt-2 font-light"
      >
        <p>
          First time using Plant More?
          <button
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline hover:text-lime-600 font-bold pl-2
            "
            onClick={() =>
              dispatch(
                modalAction({ modalName: "registerModal", isOpen: true })
              )
            }
          >
            {" "}
            Create an account here
          </button>
        </p>
      </div>
    </div>
  );
  return (
    <>
      <Toaster />
      <Modal
        disabled={false}
        isOpen={loginModalState === "loginModal" ? true : false}
        title="User Login"
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default LoginModal;
