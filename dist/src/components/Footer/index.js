"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Box_1 = require("@material-ui/core/Box");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    root: {
        backgroundColor: '#EBECF0',
        padding: '20px',
        fontFamily: 'Roboto, sans-serif'
    },
    contentPlacing: {
        justifyContent: 'center'
    }
});
function Footer() {
    var classes = useStyles();
    return (react_1.default.createElement("div", { style: { width: '100%' }, className: classes.root },
        react_1.default.createElement(Box_1.default, { display: 'flex', className: classes.contentPlacing },
            react_1.default.createElement(Box_1.default, { p: 1 }, "\u00A9 2020 EducatAble"))));
}
exports.default = Footer;
//# sourceMappingURL=index.js.map