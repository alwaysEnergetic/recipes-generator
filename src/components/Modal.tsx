import React from "react";

export type ModalProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: React.ReactNode;
};

export default function Modal(props: ModalProps) {
  return (
    props.showModal && (
      <div
        onClick={(e) => {
          props.setShowModal(false);
        }}
        className="fixed top-0  left-0 p-8 bg-black bg-opacity-80 w-full h-screen z-10"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-3/4 flex space-x-4 p-8 h-full m-auto bg-white shadow-2xl rounded-3xl"
        >
          {props.children}
        </div>
      </div>
    )
  );
}
