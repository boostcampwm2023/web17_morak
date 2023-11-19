import { useEffect } from 'react';

import axios from 'axios';

export function Auth() {
  const getUser = async () => {
    const response = await axios.get('http://localhost:8080/member/me', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  return <div>유저 정보 요청하는 페이지</div>;
}
