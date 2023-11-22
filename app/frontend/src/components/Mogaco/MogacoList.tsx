import * as styles from './MogacoList.css';
import { MogacoItem } from '../commons/MogacoItem';

export function MogacoList() {
  const MOGACO_ITEM = [
    {
      id: 1,
      title: '사당역 모각코',
      group: '부스트캠프 웹 모바일 8기',
      detail:
        '사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 ',
      people: 2,
      maxPeople: 5,
      location: '서울 관악구 어디길 22 모락 카페',
      date: '2022-02-02',
    },
    {
      id: 1,
      title: '사당역 모각코',
      group: '부스트캠프 웹 모바일 8기',
      detail: '사당역에서 부스트캠프 모락 팀이 모입니다',
      people: 2,
      maxPeople: 5,
      location: '서울 관악구 어디길 22 모락 카페',
      date: '2022-02-02',
    },
    {
      id: 1,
      title: '사당역 모각코',
      group: '부스트캠프 웹 모바일 8기',
      detail: '사당역에서 부스트캠프 모락 팀이 모입니다',
      people: 2,
      maxPeople: 5,
      location: '서울 관악구 어디길 22 모락 카페',
      date: '2022-02-02',
    },
  ];
  return (
    <div className={styles.container}>
      {MOGACO_ITEM.map(
        ({ id, title, group, detail, people, maxPeople, location, date }) => (
          <MogacoItem
            key={id}
            id={id}
            title={title}
            group={group}
            detail={detail}
            people={people}
            maxPeople={maxPeople}
            location={location}
            date={date}
          />
        ),
      )}
    </div>
  );
}
