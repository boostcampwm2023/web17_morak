import { ResponseMemberDto } from "./member";
import { ResponseParticipant } from "./participant";
import { Bigint } from "../type";

export interface ResponseMogacoDto {
  id: Bigint;
  groupId: Bigint;
  title: string;
  contents: string;
  date: Date;
  maxHumanCount: number;
  address: string;
  status: string;
}

export interface ResponseMogacoWithMemberDto extends ResponseMogacoDto {
  groupTitle: string;
  member: ResponseMemberDto;
  participants: ResponseParticipant[];
}
