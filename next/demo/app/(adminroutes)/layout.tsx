import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>Admin routes header</p>
      {children}
    </div>
  );
};

export default layout;
