"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Homepage_1 = require("./pages/Homepage");
var Login_1 = require("./pages/Login");
var Register_1 = require("./pages/Register");
var FAQ_1 = require("./pages/FAQ");
var Nav_1 = require("./components/Nav");
function App(props) {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(Nav_1.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Homepage_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/login', component: Login_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/register', component: Register_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/FAQ', component: FAQ_1.default })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map