import { ReactNode } from "react";

export const BigButton = ({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className="bg-gray-800 h-40 w-40 text-white/80 hover:text-white rounded-lg flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-gray-700 transition ring ring-white/20 hover:ring-white/60"
      onClick={onClick}
    >
      <div className="w-20 h-20 mb-2">{icon}</div>
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
};
