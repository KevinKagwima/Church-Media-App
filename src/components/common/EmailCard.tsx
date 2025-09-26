import { EmailCardProps } from "@/interfaces";

export default function EmailCard({ email }: EmailCardProps) {
  return (
    <div className="p-4 rounded-lg bg-gray-200 grid">
      <h4 className="text-xl font-bold">Email Address</h4>
      <p className="text-gray-500">{email}</p>
    </div>
  );
}
