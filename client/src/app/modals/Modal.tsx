"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { modalAction } from "../../redux/modalSlice";
import { RootState } from "../../redux/store";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.ModalReducer.activeModalName
  );

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
        justify-center 
        items-center 
        flex 
        overflow-x-hidden 
        overflow-y-auto 
        fixed 
        inset-0 
        z-50 
        outline-none 
        focus:outline-none
        bg-neutral-800/70
      "
      >
        <div
          className="
        relative 
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto 
        h-full 
        lg:h-auto
        md:h-auto
        "
        >
          {/*content*/}
          <div
            className={`
          translate
          duration-300
          h-full
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
        `}
          >
            <div
              className="
            translate
            h-full
            lg:h-auto
            md:h-auto
            border-0 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-white 
            outline-none 
            focus:outline-none
          "
            >
              {/*header*/}
              <div
                className="
              flex 
              items-center 
              p-6
              rounded-t
              justify-center
              bg-gray-50
              relative
              "
              >
                <div className="text-3xl font-light uppercase">{title}</div>
                <button
                  className="
                  p-1
                  border-0 
                  hover:opacity-70
                  transition
                  absolute
                  right-[10px]
                  top-[10px]
                  text-lime-600
                "
                  onClick={() =>
                    dispatch(
                      modalAction({ modalName: activeModal, isOpen: false })
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">{body}</div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6 pt-0">
                <div
                  className="
                  flex 
                  flex-row 
                  items-center 
                  gap-4 
                  w-full
                "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <button disabled={disabled}>{secondaryActionLabel}</button>
                  )}
                  <button disabled={disabled}>{actionLabel}</button>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
