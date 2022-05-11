const fs = require("fs");
const path = require("path");

const dirs = ['fields-banners', 'fields-icons']

const mkdirs = () => {
  for (d in dirs) {
    const dist = path.join(
      __dirname,
      "../../public/uploads/",
      dirs[d]
    );
    if (!fs.existsSync(dist)) {
      fs.mkdirSync(dist, { recursive: true });
    }
  }
};

module.exports = { mkdirs };