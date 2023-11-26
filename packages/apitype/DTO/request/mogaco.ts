export interface RequestCreateMogacoDto {
  groupId: number;
  title: string;
  contents: string;
  date: string;
  maxHumanCount: number;
  address: string;
  status: string;
}

export interface RequestStatusDto {
  status: string;
}
