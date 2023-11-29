import { ResponseMogacoDto } from '@morak/apitype';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { queryKeys } from '@/queries';

const refineMogacoList = (mogacoList: ResponseMogacoDto[]) =>
  mogacoList.map(({ id, title, date }) => ({ id, title, date }));

export const useCalendarMogacoQuery = (selectedDate: Date) =>
  useQuery({
    ...queryKeys.mogaco.list({ date: dayjs(selectedDate).format('YYYY-MM') }),
    select: refineMogacoList,
  });
