export type GroupCreate = {
  name: string;
  type: 'public' | 'private';
  joinType: GroupJoin[];
};
export type GroupJoin = 'approve' | 'code';
