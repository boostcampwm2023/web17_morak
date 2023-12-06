import ReactDOMServer from 'react-dom/server';

export const reactElementToString = (element: React.ReactElement) =>
  ReactDOMServer.renderToString(element);
