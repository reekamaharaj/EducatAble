### Front-end
- [x] FAQ page
    - [x] Display Questions
- [x] Login Button
- [x] Form for submitting questions
    - [ ] Send question to db
- [ ] Logout
- [ ] Something to indicate login status (current page states are enough?)
- User logged in
    - [ ] Option to save a question


### Back-end
- [x] ~~Sessions for pages~~
- [x] Basic Login/Register functionality
- [x] Password hashing/checking
- [x] Use TypeScript
- [ ] Email verification for Register
- [ ] Password verification for Register
    - [ ] Entry password twice to Register
- Admin stuff
    - [ ] View questions submitted
    - [ ] Ability to delete/edit existing questions
    - [ ] Ability to add questions
- [ ] Random "did you know" generation. New thing everyday?

### Other
- [ ] ReadMe
- [ ] Deploy working
- [ ] Seed db through user/admin functionalities to test as well as seed
- [ ] Create user account for demoing

### Files
- [ ] webpack.config.js
- [ ] tsconfig.json
- [ ] server.js
- [ ] README.md
- [ ] package-lock.json
- [ ] package.json
- [ ] notes.md
- [ ] modules.d.ts
- [ ] .gitignore
- [ ] .env
- [ ] src folder
    - [ ] components folder
        - [ ] Confirm.js
        - [ ] DYKSection.js
        - [ ] Footer.js
        - [ ] LearnMore.js
        - [ ] Logo.js
        - [ ] Nav.js
        - [ ] Question.js
        - [ ] Resources.js
        - [ ] ResourceSection.js
    - [ ] pages folder
        - [ ] FAQ.js
        - [ ] Homepage.js
        - [ ] Login.js
        - [ ] Register.js
    - [ ] utils folder
        - [ ] API.js
    - [ ] App.tsx
    - [ ] index.tsx
    - [ ] styles.css
- [ ] routes folder
    - [ ] api folder
        - [ ] question.ts
    - [ ] auth folder
        - [ ] user.ts
    - [ ] index.ts
- [ ] public folder
    - [ ] images folder
        - [ ] logo.png
        - [ ] open-figures.png
    - [ ] index.html
- [ ] node_modules
- [ ] models
    - [ ] index.ts
    - [ ] newquestion.ts
    - [ ] question.ts
    - [ ] user.ts
- [ ] controllers
    - [ ] auth.ts
    - [ ] controllers.ts
    - [ ] userControllers.ts
















---
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
Typescript is infering the "something" types

```sh
const value = Promise.resolve("something");
```

- Promise is a class
- Resolve is a method that returns a Promise

```sh
value.then((thing) => console.log(thing))
```

- Value is the defined promise
- .then() says give me the Promised value
- () is the callback function => thing the callback function does

```sh
.catch((error) => console.log("error", error));
```

- .catch() will happen if the Promised value is rejected
- () is the callback function => thing the callback function does

```sh
const anotherValue = Promise.reject("something");
```

- Reject is a method that will reject a Promise

 - Promise is an object. That is Promising to give something. The something that a Promise gives, can be many things.

- A Promise holds something and will give back when its asked for. But only after it gets it. 
- To ask for what the Promise holds -> .then()

- A promise can be rejected. One reason could be that the promise never got the things it was told to hold.
- To handle a rejected Promise -> .catch()

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

- Another way to ask for the Promise is by using an async/await function.
- For an async function you tell the function to wait for the Promise (await will tell it what the Promise that it should wait for is)
- async function () try{await...} catch(error){}
- try .then() 
- catch(error) .catch()


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

- try/catch can be used to catch errors in everything. not just async functions

