export interface ChatOption {
  label: string;
  value: string;
}

export interface Message {
  id: number;
  sender: 'user' | 'owner';
  text?: string;
  image?: string;
  time: string;
  delivered?: boolean;
  read?: boolean;
  typing?: boolean;
  options?: ChatOption[];
}

export interface Chat {
  id: number;
  name: string;
  shop: string;
  city: string;
  avatar: string;
  online: boolean;
  pinned?: boolean;
  messages: Message[];
}