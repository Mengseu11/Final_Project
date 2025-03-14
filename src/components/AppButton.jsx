import { FaPlus } from "react-icons/fa";

export function ButtonIcon({onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className="px-3.5 py-3.5 text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200"
    >
      {icon}
    </button>
  );
}
