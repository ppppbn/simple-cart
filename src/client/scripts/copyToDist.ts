import { copy } from 'fs-extra';

// tslint:disable:no-console
const copyToDist = async () => {
  const copyPromises = [
    copy('src/client/.next', 'dist/client/.next/'),
    copy('src/client/static', 'dist/client/static/'),
    copy('src/client/custom-antd.less', 'dist/client/custom-antd.less'),
  ];

  try {
    await Promise.all(copyPromises);
  } catch (error) {
    console.log(error);
  }
};

copyToDist().then(() => {
  console.log('Copy files success');
  process.exit();
});
