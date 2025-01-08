import { ReactNode } from "react";
import Header from "../src/common/Header";
import FooterSection from "../src/common/Footer";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      
    </>
  );
};

export default LayoutProvider;
