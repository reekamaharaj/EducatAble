"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var Button_1 = require("@material-ui/core/Button");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Typography_1 = require("@material-ui/core/Typography");
var Icon_1 = require("@material-ui/core/Icon");
var useStyles = styles_1.makeStyles({
    root: {
        flexGrow: 1,
        color: 'white',
        backgroundColor: '#72A0C1'
    },
    mainBtn: {
        margin: '10px',
        padding: '10px 20px',
        color: 'white',
        fontSize: '16px',
    },
    linkStyling: {
        textDecoration: 'none'
    },
    space: {
        flexGrow: 1
    },
    iconSpacing: {
        paddingRight: '5px'
    }
});
function Nav() {
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(AppBar_1.default, { position: 'static' },
            react_1.default.createElement(Toolbar_1.default, { className: classes.root },
                react_1.default.createElement(Typography_1.default, { variant: 'h5' }, "EducatAble"),
                react_1.default.createElement("a", { href: "/", className: classes.linkStyling },
                    react_1.default.createElement(Button_1.default, { className: classes.mainBtn },
                        react_1.default.createElement(Icon_1.default, { className: classes.iconSpacing }, "home"),
                        " Home")),
                react_1.default.createElement("a", { href: "/FAQ", className: classes.linkStyling },
                    react_1.default.createElement(Button_1.default, { className: classes.mainBtn },
                        react_1.default.createElement(Icon_1.default, { className: classes.iconSpacing }, "help"),
                        "FAQ")),
                react_1.default.createElement(Typography_1.default, { className: classes.space }, ' '),
                react_1.default.createElement("a", { href: "/login", className: classes.linkStyling },
                    react_1.default.createElement(Button_1.default, { className: classes.mainBtn },
                        react_1.default.createElement(Icon_1.default, { className: classes.iconSpacing }, "account_circle"),
                        "Log-In")),
                " |",
                react_1.default.createElement("a", { href: "/register", className: classes.linkStyling },
                    react_1.default.createElement(Button_1.default, { className: classes.mainBtn },
                        react_1.default.createElement(Icon_1.default, { className: classes.iconSpacing }, "how_to_reg"),
                        "Register"))))));
}
exports.default = Nav;
//# sourceMappingURL=index.js.map