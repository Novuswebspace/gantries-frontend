"use client";

import { Fragment, ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store";
import { Toaster } from "sonner";
import AuthProvider from "./auth-provider";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <ReduxProvider store={store}>
        <AuthProvider>{children}</AuthProvider>
      </ReduxProvider>
      <Toaster richColors position="bottom-right" closeButton />
    </Fragment>
  );
};

export default AppProvider;
