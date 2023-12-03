export interface ChatMessage {
  room: string;
  user: string;
  contents: string;
  messageType: string;
  date: Date;
}

export const StatusCode = Object.freeze({
  success: 200,
  error: 400,
}); // 231129 ccxz84 | chat error 추후 확장 필요

export interface RequestGetPrevChatMessage {
  room: string;
  cursorDate: Date;
}

export type StatusType = number;
