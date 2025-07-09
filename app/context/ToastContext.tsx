"use client";
import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return (
    <div className="z-999">
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default ToasterContext;
