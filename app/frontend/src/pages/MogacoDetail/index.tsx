import { useEffect, useState } from 'react';

import { MogacoDetailPage } from '@/components';
import { mogaco } from '@/services';
import { MogacoProps } from '@/types';

export function MogacoDetail() {
  const [mogacoData, setMogacoData] = useState<MogacoProps | null>(null);

  useEffect(() => {
    if (mogacoData) return;

    const fetchMogacoData = async () => {
      const data = await mogaco.mogacoDetail();
      setMogacoData(data);
    };

    fetchMogacoData();
  }, [mogacoData]);

  if (!mogacoData) {
    return <div>불러오는 중...</div>;
  }

  const {
    id,
    memberId,
    groupId,
    title,
    participantList,
    maxHumanCount,
    date,
    address,
    contents,
    status,
  } = mogacoData;

  return (
    <MogacoDetailPage
      id={id}
      memberId={memberId}
      groupId={groupId}
      title={title}
      participantList={participantList}
      maxHumanCount={maxHumanCount}
      date={date}
      address={address}
      contents={contents}
      status={status}
    />
  );
}
