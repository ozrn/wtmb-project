const fs = require("fs");

const save = function (data) {
  fs.writeFileSync("felis-data.json", JSON.stringify(data));
  //console.log(data);
};

const load = function (data) {
  console.log(data);
};

module.exports = { save, load }; // exporting both of them within an object
