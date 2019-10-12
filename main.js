const fs = require("fs-extra");
const path = require("path");
const chokidar = require("chokidar");

/**
 * Create directory at path if path is not directory
 * @param {String} path
 */
function createIfNotExist(path) {
  if (!fs.existsSync(path)) {
    console.log("Creating directory : ", path);
    fs.mkdirSync(path);
  }
}

/**
 *
 * @param {String} fromPath - full path of old file
 * @param {String} toPath - full path of new file
 */
async function moveFile(fromPath, toPath) {
  await fs.rename(fromPath, toPath);
}

module.exports = function(config) {
  config.forEach(module => {
    const modulePath = module.directory;
    if (modulePath) {
      console.log("Monitoring " + modulePath);

      module.files.forEach(type => {
        createIfNotExist(path.join(module.directory + type.directory));
      });

      chokidar.watch(module.directory).on("add", filePath => {
        const fileExtension = path.extname(filePath).substr(1);
        const fileName = path.basename(filePath);

        module.files.forEach(async type => {
          if (type.fileTypes.includes(fileExtension)) {
            try {
              moveFile(
                filePath,
                path.join(modulePath, type.directory, fileName)
              );
            } catch (error) {
              console.log("error: ", error);
            }
            console.log(`Moved ${fileName} to ${type.directory} directory`);
          }
        });
      });
    }
  });
};
