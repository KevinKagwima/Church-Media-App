import Header from "@/components/layout/Header";
import Modal from "@/components/common/Modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Header action={() => setModalOpen(true)} />
      <main></main>
      {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
