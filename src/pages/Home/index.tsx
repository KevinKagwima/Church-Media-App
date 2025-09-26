import Header from "@/components/layout/Header";
import Modal from "@/components/common/Modal";
import { FormDataProps } from "@/interfaces";
import EmailCard from "@/components/common/EmailCard";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [emaillists, setEmailList] = useState<FormDataProps[]>([]);

  const handleAddEmail = (newEmail: FormDataProps) => {
    setEmailList((prev) => [
      ...prev,
      {
        ...newEmail,
        id: emaillists.length + 1,
      },
    ]);
  };

  return (
    <div>
      <Header action={() => setModalOpen(true)} />
      <main className="py-4 px-10">
        <div className="grid grid-cols-4 gap-3">
          {emaillists?.map((email_list) => (
            <EmailCard email={email_list.email} key={email_list.id} />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)} onSubmit={handleAddEmail} />
      )}
    </div>
  );
}
