import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { IoMdCloseCircle } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-black fixed inset-0 bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white relative z-10 h-fit w-fit rounded-lg p-6 shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 absolute right-8 top-8"
        >
          <IoMdCloseCircle  className='' size={25}/>
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
