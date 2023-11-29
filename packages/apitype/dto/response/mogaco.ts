import { ResponseMemberDto } from "./member";
import { ResponseParticipant } from "./participant";
import { Bigint } from "../type";
import { GroupsDto } from "src/groups/dto/groups.dto";

export interface ResponseMogacoDto {
  id: Bigint;
  groupId: Bigint;
  title: string;
  contents: string;
  date: Date;
  maxHumanCount: number;
  address: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  group: GroupsDto;
}

export interface ResponseMogacoWithMemberDto {
  id: Bigint;
  groupTitle: string;
  title: string;
  contents: string;
  date: Date;
  maxHumanCount: number;
  address: string;
  status: string;
  member: ResponseMemberDto;
  participants: ResponseParticipant[];
}
