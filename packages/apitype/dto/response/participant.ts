import { Bigint } from "../type";

export interface ResponseParticipant {
  id: Bigint;
  providerId: string;
  email: string;
  nickname: string;
  profilePicture: string;
}
