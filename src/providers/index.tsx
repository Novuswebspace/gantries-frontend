"use client";

import { Fragment, ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store";
import { Toaster } from "sonner";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <ReduxProvider store={store}>{children}</ReduxProvider>
      <Toaster richColors position="bottom-right" closeButton />
    </Fragment>
  );
};

export default AppProvider;
