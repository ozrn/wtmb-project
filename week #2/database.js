const fs = require("fs");

const save = function (fileName, data) {
  fs.writeFileSync(fileName, JSON.stringify(data));
};

const load = function (fileName) {
  return JSON.parse(fs.readFileSync(fileName, "utf8")); // JSON.parse reads a str and converts it into a proper JS object
};

module.exports = { save, load }; // exporting both of them within an object
