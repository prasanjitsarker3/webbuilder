import { ReactNode } from "react";
import Header from "../src/common/Header";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutProvider;
