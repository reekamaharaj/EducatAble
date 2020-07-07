# Tasks

### Front-end
- [x] FAQ page
    - [x] Display Questions
- [x] Login Button
- [x] Form for submitting questions
    - [x] Send question to db
- [x] Logout
- [x] Something to indicate login status (current page states are enough?)
- User logged in
    - [x] Option to save a question (like favorite)
- [x] User page to view saved things
- [x] (Admin thing) Page for an admin to view new questions that have been submitted and respond to them.

### Back-end

-   [x] ~~Sessions for pages~~
-   [x] Basic Login/Register functionality
-   [x] Password hashing/checking
-   [x] Use TypeScript
-   [x] Email verification for Register
-   [x] Password verification for Register
-   [x] ReadMe
-   [x] Deploy working


### Things left

-   [ ] Entry password twice to Register
-   [ ] Seed db through user/admin functionalities to test as well as seed
-   [ ] Create user account for demoing
-   [ ] Powerpoint presentation

-   Admin stuff
    -   [ ] View questions submitted
    -   [ ] Ability to delete/edit existing questions
    -   [ ] Ability to add questions
    -   [ ] Ability to answer questions
    -   [ ] ON FAQ page, option for Admin to edit current questions/answers
    - [ ] (Admin) ON FAQ page, option for Admin to edit current questions/answers

### Review notes (6/6)
- [ ] Auth stuff: Token saves locally and if user doesn't log out it is still there after the server is restarted and the browser is closed. 
- [ ] Auth stuff: When a user logs out, remove email and admin from local Storage.

- [ ] FAQ: clear the question after it is submitted
- [ ] FAQ: Consider making the place to submit a question standout a little. (just my opinion xD)
- [ ] Admin/Navbar: When user is logged in as Admin, Nav bar link for the Admin page

- [ ] Login/Register: Redirect to home page or FAQ page after a user is logged in, we could then alert that they logged in or something. Maybe a little alert banner?
- [ ] Navbar: After login or logout, refresh or reload the page to make sure the nav bar is updated.
- [ ] Login: Alert to user when there is a wrong password or email doesnt exist as a registered user. Only console error right now and server console log
- [ ] Register: Display on the page the password requirements so a user knows when signing up what is expected
- [ ] Register: Password alert shows for an acceptable password, but it will still register the user. So change the message on that case to "sucessful register" or something like that.
