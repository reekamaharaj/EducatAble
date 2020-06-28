"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
exports.default = {
    // Gets all questions
    getQuestions: function () {
        return axios_1.default.get("/api/questions");
    },
    // Gets the question with the given id
    getQuestion: function (id) {
        return axios_1.default.get("/api/questions/" + id);
    },
    // Deletes the question with the given id
    deleteQuestion: function (id) {
        return axios_1.default.delete("/api/questions/" + id);
    },
    // Saves a question to the database
    saveQuestion: function (questionData) {
        return axios_1.default.post("/api/questions", questionData);
    }
};
//# sourceMappingURL=API.js.map