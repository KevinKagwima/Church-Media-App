import Button from "../common/Button";
import Link from "next/link";
import { HeaderProps } from "@/interfaces";

export default function Header({ action }: HeaderProps) {
  return (
    <header className="bg-white px-10 py-4 flex gap-30 align-middle">
      <div className="logo">
        <h1 className="text-black font-extrabold text-3xl">
          <Link href="/">Church Media</Link>
        </h1>
      </div>
      <div className="ml-auto">
        <Button type="button" title="Get Shortlisted" action={action} />
      </div>
    </header>
  );
}
