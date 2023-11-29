export interface ChatMessage {
  roomId: string;
  senderId: string;
  contents: string;
  messageType: string;
  id: string;
  date: Date;
}

export const StatusCode = Object.freeze({
  success: 200,
  error: 400,
}); // 231129 ccxz84 | chat error 추후 확장 필요

export type StatusType = number;
