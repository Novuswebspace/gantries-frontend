"use client";

import { Fragment, ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </Fragment>
  );
};

export default AppProvider;
