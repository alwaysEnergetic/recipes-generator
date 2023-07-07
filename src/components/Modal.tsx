import React from "react";

export type ModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  children: React.ReactNode;
};

export default function Modal(props: ModalProps) {
  return props.show ? (
    <div
      onClick={(e) => {
        props.setShow(false);
      }}
      className="fixed top-0  left-0 p-8 bg-black bg-opacity-80 w-full h-screen z-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full md:w-3/4 md:flex overflow-auto space-x-4 p-8 h-full m-auto bg-white shadow-2xl rounded-3xl"
      >
        <div className="md:hidden flex justify-end">
          <button
            onClick={(e) => {
              props.setShow(false);
            }}
            className="bg-black text-white rounded-lg p-2 px-4"
          >
            CLOSE
          </button>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    <div></div>
  );
}
