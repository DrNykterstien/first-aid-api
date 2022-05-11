const clc = require('cli-color');
const app = require('./app');
const { dbConnect } = require('./utils/db');
const { mkdirs } = require('./utils/startup');
require('dotenv').config();

const start = async () => {
  try {
    await dbConnect();
    mkdirs()
    const port = process.env.PORT ?? 4000;
    app.listen(port, () => {
      console.log(clc.green(`🚀 Server ready at http://localhost:${port}`));
      console.log(clc.white(`🍉 API at http://localhost:${port}/api`));
      console.log(clc.red('\n(っ◕‿◕)っ'));
    });
  } catch (error) {
    console.error(error);
  }
};

start();
