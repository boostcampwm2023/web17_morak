import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MogacoDetailPage } from '@/components';
import { mogaco } from '@/services';
import { Mogaco } from '@/types';

export function MogacoDetail() {
  const { id } = useParams();
  const [mogacoData, setMogacoData] = useState<Mogaco | null>(null);

  useEffect(() => {
    if (!id || mogacoData) {
      return;
    }

    const fetchMogacoData = async () => {
      const data = await mogaco.detail(id);
      setMogacoData(data);
    };

    fetchMogacoData();
  }, [id, mogacoData]);

  if (!mogacoData) {
    return <div>불러오는 중...</div>;
  }

  const {
    memberId,
    groupId,
    title,
    maxHumanCount,
    date,
    address,
    contents,
    status,
  } = mogacoData;

  return (
    <MogacoDetailPage
      id={id as string}
      memberId={memberId}
      groupId={groupId}
      title={title}
      maxHumanCount={maxHumanCount}
      date={date}
      address={address}
      contents={contents}
      status={status}
    />
  );
}
