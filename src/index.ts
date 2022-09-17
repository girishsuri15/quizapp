import 'dotenv/config';
import express from 'express';
import createServer from './graphql/createServer';
import envConfig from './config/envVariables';

const start = async () => {
  const env = envConfig(process.env);
  const server = await createServer();

  await server.start();

  const app = express();

  // This middleware should be added before calling `applyMiddleware`.
  server.applyMiddleware({ app, path: '/' });

  await new Promise<void>((r) => app.listen(env.port , '0.0.0.0', r));
  console.log(`${env.env} server start serving at ${env.port}`)
  return server;
};

try {
  start();
} catch (e) {
  throw e;
}
