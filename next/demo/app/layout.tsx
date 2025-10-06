import { ReactNode } from "react";
import "./globals.css";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default layout;
