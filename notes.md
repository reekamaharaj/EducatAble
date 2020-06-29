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

Typescript is infering the something types

```sh
const value = Promise.resolve("something");
```

Promise is a class; resolve is a method that returns a Promise;

```sh
value.then((thing) => console.log(thing))
```

[value is the defined promise] [.then() says give me the Promised value]. [() is the callback function] => [thing the callback function does]

```sh
.catch((error) => console.log("error", error));
```

[.catch() will happen if the Promised value is rejected] [() is the callback function] => [thing the callback function does]

```sh
const anotherValue = Promise.reject("something");
```

reject is a method that will reject a Promise

Promise is an object.
That is Promising to give something.
The something that a Promise gives, can be many things.

A Promise holds something and will give back when its asked for. But only after it gets it.
to ask for what the Promise holds -> .then()

A promise can be rejected.
One reason could be that the promise never got the things it was told to hold.
To handle a rejected Promise -> .catch()

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

Another way to ask for the Promise is by using an async/await function.
For an async function [.then() -> async function (){await...}]
.catch() ->try/catch(error) where [try .then()] and [catch(error) .catch()]


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

try catch can be used to catch errors :3

