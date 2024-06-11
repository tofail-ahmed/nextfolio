// src/app/layout.js
"use client";

import store, { persistor } from "@/redux/store";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider, useSelector } from "react-redux";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Tofail Ahmed",
  description: "Portfolio website by Tofail Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <RootContent>{children}</RootContent>
      {/* </PersistGate> */}
    </Provider>
  );
}

function RootContent({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  // console.log(darkMode);
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${
          darkMode ? "bg-black text-white" : "bg-slate-300 text-black"
        }`}
      >
        <div>
          <Toaster
            toastOptions={{
              style: {
                border: "2px #4A044E solid",
                background: "#FFF",
              },
              classNames: {
                error: "text-red-400",
                success: "text-green-400",
                warning: "text-yellow-400",
                info: "text-blue-400",
              },
            }}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
