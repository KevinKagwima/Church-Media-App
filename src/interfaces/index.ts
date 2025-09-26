export interface ButtonProps {
  title: string;
  type: "button" | "submit";
  action?: () => void;
}

export interface HeaderProps {
  action: () => void;
}

export interface FormDataProps {
  email: string;
  id?: number;
}

export interface FormProps {
  onClose: () => void;
  onSubmit: (email: FormDataProps) => void;
}

export interface EmailCardProps {
  email: string;
}
