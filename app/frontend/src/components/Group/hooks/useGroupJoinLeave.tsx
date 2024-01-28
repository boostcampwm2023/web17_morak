import { useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/queries';
import { useJoinGroupQuery, useLeaveGroupQuery } from '@/queries/hooks/group';

export const useGroupJoinAndLeave = () => {
  const navigate = useNavigate();
  const { mutate: leaveGroup } = useLeaveGroupQuery();
  const { mutate: joinGroup } = useJoinGroupQuery();

  const { data: myGroup } = useQuery({
    ...queryKeys.group.myGroup(),
    staleTime: Infinity,
  });

  const joinedGroupId = myGroup?.[0]?.id;

  const handleJoin = (id: string) => {
    if (joinedGroupId) {
      leaveGroup(joinedGroupId);
    }

    joinGroup(id);
    navigate('/groups');
  };

  const handleLeave = (id: string) => {
    leaveGroup(id);
  };

  return { handleLeave, handleJoin };
};
