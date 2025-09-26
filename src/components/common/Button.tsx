import { ButtonProps } from "@/interfaces";

export default function Button({ title }: ButtonProps) {
  return (
    <button className="py-2 px-4 rounded-md bg-blue-700 text-white">
      {title}
    </button>
  );
}
