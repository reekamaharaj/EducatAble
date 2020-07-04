### Configuration files
- webpack.config.js
    - When using create react app we did not have this 
    - [Webpack](https://webpack.js.org/) is a static module bundler for JS
        - Webpack will compile JS modules
        - Entry point: src/index.tsx (Will start building bundle from here)
        - Output: public/dist (Where it will put the bundle)
        - devServer: contentBase -> where static files path starts; port -> client server port; proxy -> route paths to backend routes, server side client port
- tsconfig.json - ...Config file for ts xD
- package.json - start scripts
- package-lock.json - never delete D:
- modules.d.ts - where the interface for processEnv is defined
- .gitignore - files that will not be pushed to github
- .env - had the secret for the token

### b
**later... publicPath, Compress, historyApiFallback, cssloader**

### Front-end
- [x] FAQ page
    - [x] Display Questions
- [x] Login Button
- [x] Form for submitting questions
    - [ ] Send question to db
- [x] Logout
- [x] Something to indicate login status (current page states are enough?)
- User logged in
    - [ ] Option to save a question (like favorite)
- [ ] User page to view saved things
- [ ] (Admin thing) Page for an admin to view new questions that have been submitted and respond to them.
- [ ] (Admin) ON FAQ page, option for Admin to edit current questions/answers

### Back-end
- [x] ~~Sessions for pages~~
- [x] Basic Login/Register functionality
- [x] Password hashing/checking
- [x] Use TypeScript
- [ ] Email verification for Register

**
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
- [ ] Powerpoint presentation
