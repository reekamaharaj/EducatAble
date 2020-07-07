# Notes relevant to the project

Typescript is infering the "something" types

```sh
const value = Promise.resolve("something");
```

-   Promise is a class
-   Resolve is a method that returns a Promise

```sh
value.then((thing) => console.log(thing))
```

-   Value is the defined promise
-   .then() says give me the Promised value
-   () is the callback function => thing the callback function does

```sh
.catch((error) => console.log("error", error));
```

-   .catch() will happen if the Promised value is rejected
-   () is the callback function => thing the callback function does

```sh
const anotherValue = Promise.reject("something");
```

-   Reject is a method that will reject a Promise

-   Promise is an object. That is Promising to give something. The something that a Promise gives, can be many things.

-   A Promise holds something and will give back when its asked for. But only after it gets it.
-   To ask for what the Promise holds -> .then()

-   A promise can be rejected. One reason could be that the promise never got the things it was told to hold.
-   To handle a rejected Promise -> .catch()

```sh
async function clara(){
    try {
        console.log(await value);
    }
    catch(error) {
        console.log(error);
    }
}
```

-   Another way to ask for the Promise is by using an async/await function.
-   For an async function you tell the function to wait for the Promise (await will tell it what the Promise that it should wait for is)
-   async function () try{await...} catch(error){}
-   try .then()
-   catch(error) .catch()

```sh
function bork(num){
    return num.split(".");
}

try{
    console.log(bork("boop"));
} catch(error){
    console.log("nope");
    }
```

-   try/catch can be used to catch errors in everything. not just async functions

---

## package.json script options

```sh
"scripts": {
    "clean": "rm dist/bundle.js",
    "build-dev": "webpack -d --mode development",
    "build-prod": "webpack -p --mode production",
    "start": "webpack-dev-server --hot --mode development"
  }
```

```sh
"scripts": {
  "clean": "rm dist/bundle.js",
  "build-dev": "webpack -d --mode development",
  "build-prod": "webpack -p --mode production",
  "start-client": "webpack-dev-server --hot --mode development",
  "start-server": "nodemon server.js",
  "start": "concurrently \"npm:start-client\" \"npm:start-server\""
}
```

```sh
  "scripts": {
  "clean": "rm dist/bundle.js",
  "build-dev": "webpack -d --mode development",
  "build-prod": "webpack -p --mode production",
  "start": "webpack-dev-server --hot --mode development",
  "start-server": "ts-node-dev server.ts"
},
```

---

### Configuration files

-   webpack.config.js
    -   When using create react app we did not have this
    -   [Webpack](https://webpack.js.org/) is a static module bundler for JS
        -   Webpack will compile JS modules
        -   Entry point: src/index.tsx (Will start building bundle from here)
        -   Output: public/dist (Where it will put the bundle)
        -   devServer: contentBase -> where static files path starts; port -> client server port; proxy -> route paths to backend routes, server side client port
-   tsconfig.json - ...Config file for ts xD
-   package.json - start scripts
-   package-lock.json - never delete D:
-   modules.d.ts - where the interface for processEnv is defined
-   .gitignore - files that will not be pushed to github
-   .env - has the secret for the token
