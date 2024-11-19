"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <NextUIProvider>
      {isClient && (
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          autoClose={3000}
          newestOnTop
          closeOnClick
          draggable
          pauseOnHover
          className="z-[999]"
        />
      )}
      {children}
    </NextUIProvider>
  );
}


