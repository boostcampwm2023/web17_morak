export interface ResponseChatUserDto {
  userId: string;
  nickname: string;
  profilePicture: string;
}

export interface RequestUserRoomDto {
  user: string;
  room: string;
}

export interface RequestChatDto {
  user: string;
  message: string;
}

export type User = string;
