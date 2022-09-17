import './app/bootstrap';
import express from 'express';
import createServer from './graphql/createServer';


const start = async () => {

  const server = await createServer();

  await server.start();

  const app = express();

  // This middleware should be added before calling `applyMiddleware`.
  server.applyMiddleware({ app, path: '/' });

  await new Promise<void>((r) => app.listen(5004 , '0.0.0.0', r));
  return server;
};

try {
  start();
} catch (e) {
  throw e;
}
