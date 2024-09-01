import React from "react";
import Spinner from "./spinner";

type LoadingScreenProps = {
  loadingText?: string;
};

const LoadingScreen = ({ loadingText = "Loading..." }: LoadingScreenProps) => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="space-y-3 text-primary">
        <Spinner size="4rem" />
        <p className="text-center font-bold">{loadingText}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
