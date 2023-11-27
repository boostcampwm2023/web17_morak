export async function enableMocking() {
  if (import.meta.env.MODE !== 'development') {
    return undefined;
  }

  const { worker } = await import('../mocks/browser');

  return worker.start();
}
