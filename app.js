// using fs and path
const fs = require("fs");
const path = require("path");

// creating a directory "node-exercise"
fs.mkdirSync("node-exercise");

// use path and creating a file
const dirName = path.resolve(__dirname, "node-exercise");
const fileName = path.join(dirName, "main.js");

console.log(`the directory path is : ${dirName}`);
console.log(`the file path is : ${fileName}`);

// creating a file
const content = `console.log("Hello World")`;
const mainModule = () => {
  fs.writeFileSync(fileName, content, "utf-8");
};


// reading the file
const read_file_sync = () => {
  fs.readFileSync(fileName, "utf-8");
  console.log(content);
};

// read_file_sync();

// append file
const appendContent = `\nThis is my first Node.js program.`;
const append_file_sync = () => {
  fs.appendFileSync(fileName, appendContent);
  console.log(appendContent);
};

// append_file_sync();

// read append file
const read_append_file_sync = () => {
  fs.readFileSync(fileName, "utf-8");
  console.log(fileName);
};

// read_append_file_sync();

// renaming files
const newFileName = path.join(dirName, "index.js");
const renameFile = () => {
  fs.renameSync(fileName, newFileName);
  console.log(newFileName);
};

// renameFile();

// deleting files
const deleteFile = () => {
  fs.unlinkSync(newFileName);
};

// deleteFile();

const deleteDir = () => {
  fs.rmdirSync(dirName);
};

// deleteDir();