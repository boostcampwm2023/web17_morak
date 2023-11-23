export const MOGACO_POST = {
  TITLE: {
    REQUIRED: '제목을 입력해주세요',
    MAX: '최대 64자까지 입력 가능합니다',
    MAX_LENGTH: 64,
  },
  MEMBER: { LABEL: '작성자' },
  GROUP: { LABEL: '그룹', REQUIRED: '그룹을 선택해주세요' },
  COUNT: {
    LABEL: '최대 인원 수',
    REQUIRED: '최대 인원 수를 입력해주세요',
    PATTERN: '숫자만 입력 가능합니다',
    MIN: '최소 인원 수는 2명입니다',
    MIN_VALUE: 2,
    MAX: '최대 인원 수는 20명입니다',
    MAX_VALUE: 20,
  },
  ADDRESS: {
    LABEL: '장소',
    REQUIRED: '장소를 검색해주세요',
  },
  DATE: {
    LABEL: '날짜 및 시간',
    REQUIRED: '날짜를 선택해주세요',
    MIN: '현재 이후의 시간을 선택해주세요',
  },
  CONTENTS: {
    ROWS: 6,
    LABEL: '설명',
    REQUIRED: '설명을 입력해주세요',
    MAX: '최대 1000자까지 입력 가능합니다',
    MAX_LENGTH: 1000,
  },
};
