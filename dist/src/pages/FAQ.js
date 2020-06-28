"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = require("@material-ui/core/Button");
function logOut() {
    axios
        .post("/auth/logout")
        .then(function (result) {
        var data = result.data;
        if (result.status === 200) {
            setIsError(false);
            console.log(data);
            return setResText(data);
        }
        else {
            setIsError(true);
            return setResText("Not logged in, you can't log out.");
        }
    });
}
function FAQ(props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null, "FAQ Page"),
        react_1.default.createElement(Button_1.default, { onClick: logOut }, "Log Out")));
}
exports.default = FAQ;
//# sourceMappingURL=FAQ.js.map