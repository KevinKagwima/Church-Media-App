export interface ButtonProps {
  title: string;
  type: "button" | "submit";
  action: () => void;
}

export interface HeaderProps {
  action: () => void;
}

export interface ModalProps {
  onClose: () => void;
}
