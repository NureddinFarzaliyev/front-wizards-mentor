export const SmallButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: any;
}) => {
  return (
    <button
      onClick={onClick}
      className="transition-all cursor-pointer font-medium rounded-lg bg-gray-700 px-4 py-2 text-sm text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};
