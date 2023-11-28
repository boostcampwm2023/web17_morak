import { ResponseMemberDto } from "./member";
import { ResponseParticipant } from "./participant";

export interface ResponseMogacoDto {
  id: bigint;
  groupId: bigint;
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
