
import express from 'express';
import { bootstrapClient } from './client/bootstrap-client';

(async () => {
  const server = express();

  // bootstrap client (nextjs);
  await bootstrapClient({ server });

  // 5. start server
  const port = parseInt(process.env.PORT ? process.env.PORT : '', 10) || 3000;
  await server.listen(port);

  // tslint:disable-next-line:no-console
  console.info(`[Server] Server listens on port ${port} ...`);
})();
