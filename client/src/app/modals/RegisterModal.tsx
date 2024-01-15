"use client";

import React, { useEffect, useState } from "react";
import Input from "../inputs/Input";
import Modal from "./Modal";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { modalAction } from "../../redux/modalSlice";
import { userRegistration } from "@/services/apis/user";
import toast, { Toaster } from "react-hot-toast";

interface NewUser {
  email: string;
  password: string;
  confirmPassword: string;
  role: 0;
}

const RegisterModal = () => {
  const registerModalState = useSelector(
    (state: RootState) => state.ModalReducer.activeModalName
  );
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState<NewUser>(Object);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(true);

  useEffect(() => {
    if (
      newUser.email &&
      newUser.password &&
      newUser.password === newUser.confirmPassword
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [newUser]);

  const handleOnChange = (e: any) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  const register = () => {
    setIsLoading(true);
    setIsDisable(true);
    userRegistration(newUser).then((res) => {
      if (res.status) {
        setIsLoading(false);
        setIsDisable(true);
        toast.success("Here is your toast.");
        setNewUser({ email: "", password: "", confirmPassword: "", role: 0 });
      } else {
        toast.error(res.message);
      }
    });
  };

  const bodyContent = (
    <>
      <h2 className=" font-bold text-2xl text-gray-700">
        Welcome to Plant More
      </h2>
      <h6 className=" font-light mb-8 text-sm">
        If you don't have an account please register here
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
        <Input
          id="confirmPassword"
          label="Confirm Password"
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
        onClick={register}
        disabled={isDisable}
      >
        {isLoading ? "Adding you. Please wait... " : "Register"}
      </button>
      <div
        className="
      text-neutral-500 text-center mt-2 font-light"
      >
        <p>
          Have an account already?
          <button
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline hover:text-lime-600 font-bold pl-2
            "
            onClick={() =>
              dispatch(modalAction({ modalName: "loginModal", isOpen: true }))
            }
          >
            {" "}
            Login here
          </button>
        </p>
      </div>
    </div>
  );
  return (
    <>
      <Modal
        disabled={false}
        isOpen={registerModalState === "registerModal" ? true : false}
        title="User Registration"
        body={bodyContent}
        footer={footerContent}
      />
      <Toaster />
    </>
  );
};

export default RegisterModal;
