import { Application } from 'express';
import next from 'next';
import routes from './routes';

import { bootstrapModules } from './bootstrap-modules';
export const bootstrapClient = async ({ server }: { server: Application }) => {
  // tslint:disable-next-line:no-console
  console.info(`[Client] Bootstrapping...`);
  bootstrapModules({ routes });

  const dev = process.env.NODE_ENV !== 'production';
  const nextApp = next({ dev, dir: dev ? './src/client' : './dist/client' });
  const handler = routes.getRequestHandler(nextApp);
  await (nextApp as any).prepare();

  server.get('/_next/*', (req, res) => {
    return handler(req, res);
  });
  server.get('/static/*', (req, res) => {
    return handler(req, res);
  });
  server.use(handler);
};
