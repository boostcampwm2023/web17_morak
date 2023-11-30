export interface ResponseChatUserDto {
  userId: string;
  nickname: string;
  profilePicture: string;
}

export interface RequestUserRoomDto {
  user: string;
  room: string;
}

export type User = string;
