export const URL = {
  API:
    import.meta.env.MODE === 'test'
      ? 'http://localhost:8080'
      : 'http://soma2.iptime.org:9991',
};
