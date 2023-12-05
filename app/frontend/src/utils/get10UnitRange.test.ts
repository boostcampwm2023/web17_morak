// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, test } from 'vitest';

import { get10UnitRange } from './get10UnitRange';

describe('currentPage를 주면 페이지네이션 범위를 만드는 get10UnitRange 함수를 테스트한다', () => {
  test('인자로 10의 배수가 아닌 값 중 시작점을 준다', () => {
    expect(get10UnitRange(1)).toEqual([1, 10]);
    expect(get10UnitRange(111)).toEqual([111, 120]);
  });

  test('인자로 10의 배수인 값을 준다', () => {
    expect(get10UnitRange(10)).toEqual([1, 10]);
    expect(get10UnitRange(20)).toEqual([11, 20]);
  });

  test('인자로 0 이하인 값을 주면 빈 배열을 반환한다', () => {
    expect(get10UnitRange(0)).toEqual([]);
    expect(get10UnitRange(-1)).toEqual([]);
    expect(get10UnitRange(-100)).toEqual([]);
  });
});
