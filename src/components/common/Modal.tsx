import Button from "./Button";
import { FormProps, FormDataProps } from "@/interfaces";
import { useState } from "react";

export default function Modal({ onClose, onSubmit }: FormProps) {
  const [email, setEmail] = useState<FormDataProps>({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmail((prevEmail) => ({ ...prevEmail, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-40 flex justify-center items-center">
      <div className="p-4 rounded-lg bg-white w-full max-w-md grid gap-5">
        <div>
          <h1 className="text-black text-2xl font-bold">Get Shortlisted</h1>
          <p className="text-gray-600">Enter your email address below</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <input
                type="email"
                id="title"
                name="email"
                onChange={handleChange}
                value={email.email}
                placeholder="Enter Email Address"
                required
                className="w-full px-4 py-2 border-0 bg-gray-200 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button title="Submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
