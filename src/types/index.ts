// src/types/index.ts

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Manager {
  id: string;
  email: string;
  fullName: string;
  role: "owner" | "admin" | "manager";
  projectId: number;
  createdAt: Date;
}

export interface Dialog {
  id?: string;
  projectId?: number;
  imageUrl?: string;
  name?: string;
  lastMessage?: string; //should be Message?
  unreadCount?: number;
  source?: "telegram" | "whatsapp" | "direct" | string;
  updatedAt?: Date;
}

export interface Message {
  id: number;
  dialogId: number;
  side: "manager" | "client";
  content: string;
  senderId: string;
  type: "text" | "file" | "image";
  status: "sent" | "delivered" | "read";
  createdAt: Date;
  fileUrl?: string;
  fileName?: string;
}

export interface Integration {
  id: number;
  projectId: number;
  type: string;
  name: string;
  status: "active" | "inactive" | "error";
  config: Record<string, any>;
}
