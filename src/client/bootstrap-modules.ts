import { readdir } from 'fs-extra';
import Routes from 'next-routes';

export const bootstrapModules = async ({ routes }: { routes: Routes }) => {
  // tslint:disable-next-line:no-console
  console.info('[Client] Loading client modules...');
  const rootDir = `${process.env.NODE_ENV !== 'production' ? 'src' : 'dist'}/client/modules`;
  const moduleNames = await readdir(rootDir);
  const excludedModules: string[] = [];
  for (const moduleName of moduleNames) {
    if (excludedModules.indexOf(moduleName) !== -1) {
      continue;
    }
    // tslint:disable-next-line:no-console
    console.info(`[Client] Loading module '${moduleName}'...`);

    // tslint:disable-next-line:no-console
    console.info(`[Client] [${moduleName}] Setup routes...`);
    let setupRoutes: any;
    try {
      setupRoutes = require(`./modules/${moduleName}/routes`).setupRoutes;
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
      // ignore service not found
    }
    if (setupRoutes) {
      setupRoutes({ routes });
    }
  }
  // tslint:disable-next-line:no-console
  console.info('[Client] Done loading modules...');
};
