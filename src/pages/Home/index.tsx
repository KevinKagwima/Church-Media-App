import Header from "@/components/layout/Header";
import Modal from "@/components/common/Modal";
import { FormDataProps } from "@/interfaces";
import EmailCard from "@/components/common/EmailCard";
import { useState } from "react";
import Button from "@/components/common/Button";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [emaillists, setEmailList] = useState<FormDataProps[]>([]);

  const handleAddEmail = (newEmail: FormDataProps) => {
    setEmailList((prev) => [
      ...prev,
      {
        ...newEmail,
      },
    ]);
  };

  return (
    <div>
      <Header action={() => setModalOpen(true)} />
      <main className="py-4 px-10">
        <div className="bg-blue-50 min-h-100  rounded-2xl flex justify-center items-center flex-col gap-5">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">
              Church Service WorkFlow Engine
            </h1>
            <p className="text-xl">
              Your digital production coordinator for church services
            </p>
          </div>
          <div className="grid gap-2 grid-cols-2">
            <Button type="button" title="Church Module" />
            <Button type="button" title="School Module" />
          </div>
        </div>
        {/* <div className="grid grid-cols-4 gap-3">
          {emaillists?.map((email_list) => (
            <EmailCard email={email_list.email} key={email_list.id} />
          ))}
        </div> */}
      </main>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)} onSubmit={handleAddEmail} />
      )}
    </div>
  );
}
