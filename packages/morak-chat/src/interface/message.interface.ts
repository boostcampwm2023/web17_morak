export interface ChatMessage {
  messageType: string;
  user: string;
  room: string;
  contents: string;
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
