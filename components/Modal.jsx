import React from "react";
import { useSelector } from "react-redux";
import { selectModal } from "../store/modalSlice";
import { Dialog, Transition } from "@headlessui/react";

const Modal = () => {
  const modal = useSelector(selectModal);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Modal;
