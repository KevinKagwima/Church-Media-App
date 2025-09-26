import { ButtonProps } from "@/interfaces";

export default function Button({ title, type, action }: ButtonProps) {
  return (
    <button
      onClick={action}
      type={type}
      className="py-2 px-4 rounded-md bg-blue-700 text-white cursor-pointer"
    >
      {title}
    </button>
  );
}
