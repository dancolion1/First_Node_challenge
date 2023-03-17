// Bonus Task
const fs = require("fs");
const path = require("path");

fs.mkdirSync("node-exercise");
fs.mkdirSync("./node-exercise/data");

const dir_name = path.resolve(__dirname, "./node-exercise/data");
const file_name = path.join(dir_name, "data.txt");

const content = `Node JS is a runtime environment`;

const mainModule = () => {
  fs.writeFileSync(file_name, content, "utf-8");
};

mainModule();

const read_file = () => {
  fs.readFileSync(file_name, "utf-8");
  console.log(content);
};

read_file();

const new_file_name = path.join(dir_name, "config.txt");
const rename_file = () => {
  fs.renameSync(file_name, new_file_name);
  console.log(new_file_name);
};

rename_file();

const delete_file = () => {
  fs.unlinkSync(new_file_name);
};

delete_file();

const delete_dir = () => {
  fs.rmdirSync(dir_name);
};

delete_dir();