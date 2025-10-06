import { ReactNode } from "react";
import "../globals.css";
import RegularHeader from "@/app/(regularroutes)/components/RegularHeader";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <RegularHeader />
      {children}
    </div>
  );
};

export default layout;
