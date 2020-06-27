import axios from "axios";

export default {
    // Gets all questions
    getQuestions: function () {
        return axios.get("/api/questions");
    },
    // Gets the question with the given id
    getQuestion: function (id) {
        return axios.get("/api/questions/" + id);
    },
    // Deletes the question with the given id
    deleteQuestion: function (id) {
        return axios.delete("/api/questions/" + id);
    },
    // Saves a question to the database
    saveQuestion: function (questionData) {
        return axios.post("/api/questions", questionData);
    },
    // After a login...
    // postLogin: function (setIsError, setResText) {
    //     return axios
    //     .post("/auth/login", {
    //         email,
    //         password
    //     })
    //     .then((result) => { 
    //         if (result.status === 200) {
    //             alert("Logined with email: " + email),
    //                 setIsError(false);
    //                 setResText("Logined yay");
    //         } else {
    //             setIsError(true);
    //             setResText("Username or password was incorrect");
    //         }
    //     });
    // },
    // After Register ...
    // postRegister: function(setIsError, setResText){
    //     return axios
    //         .post("/auth/register", {
    //             email,
    //             password,
    //         })
    //         .then((result) => {
    //             if (result.status === 200) {
    //                 alert("Registered with email: " + email),
    //                     setIsError(false);
    //                     setResText("Registered yay");
    //             } else {
    //                 setIsError(true);
    //                 setResText("Error")
    //             }
    //         });
    // }
};
