# Node JS

- JavaScript **Runtime Environment**
- It is used for **server** side programming.

> ***Node.js is not a language, library or framework.***

---

## Node.js Installation

- Check that node.js is install or not. Use **`node`** or **`node -v`** or **`node --version`**
- If node.js not install then follow these steps.
  - Go to the [Nodejs.org](https://www.nodejs.org).
  - Go to the download option.
  - Download the **LTS** version of Node JS.
- After Installing repeat step 1.

---

## Node REPL

- Stands for **Read Evaluate Print Loop**.
- .help gives us commands.

---

## Node Files

- **`node fileName.js`** : Used to run javascript file using node.

---

## Process

- **process :** This object provides information about, and control over, the current Node.js process.
- **process.argv :** Returns an array containing the command-line arguments passed when the Node.js process was lanched.

> 1. Enter the **node repl**.  
> 2. type **`process`**. Returnss an object of information.
> 3. - *`process.release`**
>    - *`process.cwd()`**
>    - *`node fileName arguments`** : Arguments are space separated. Each argument stored in an array.

---

## module.exports

- Requiring Files.
- **`require()`** : A built-in function to include external modules that exist in seprate files.
- **`module.exports`** : A special object.

- Requiring Directories.
  1. first create a file with name always be the *`index.js`* and import all require files in new directory. and the *`index.js`* is used to export the directory.

---

## NPM (Node Package Manager)

- **npm** is the standard package manager for Node.js
- Just like a library of packages.
- Command line tool

### Packages

- Package is code of another developer which can be used by us.

### Installing Packages

- **`npm install <- package name ->`**

  > If package installed but doesn't show required file then follow these steps :
  > 1. **`npm init -y`**
  > 2. **`npm install`**
  > 3. **`pwd`** : Print Current Directory.
  > 4. **`npm install packageName`**

### package.json

- The package.json file contains descriptive and functional **metadata** about a project, such as a name, version and dependencies.
- **`npm install`** : when the package.json exist with all requires dependencies
- **`npm init`** : Initalize the package.json for our project.

---

## Local v/s Global

- **`npm install -g <- package name ->`** : Used to make any package Globally (Globally exist).
- **`npm link <- package name ->`** : Used to link, globally install package, before use that package.

---

## Import Modules

### require v/s import

- **`import { sum } from "./math.js"`**
- We can't selectively load only the pieceswe need with require but with import, we can selectively load only the pieces we need, which can save memory.
- Loading is synchronous for 'require' but can be asynchronous for 'import'.
- For import, add *`"type" : "module"`* in *`package.json`* of the project folder.
- Before import anything from another file, We have to use *`export`* keyword.

---
