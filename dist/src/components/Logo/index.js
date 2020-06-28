"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Typography_1 = require("@material-ui/core/Typography");
var Box_1 = require("@material-ui/core/Box");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    root: {
        color: '#fff',
        fontWeight: '700',
        fontSize: '68px',
        letterSpacing: '3px',
        paddingLeft: '10px'
    },
    contentPlacing: {
        justifyContent: 'center'
    },
    picStyles: {
        width: '700px'
    }
});
function Logo() {
    var classes = useStyles();
    return (react_1.default.createElement("div", { style: { width: '100%' } },
        react_1.default.createElement(Box_1.default, { display: 'flex', className: classes.contentPlacing },
            react_1.default.createElement("img", { src: '/images/open-figures.png', alt: 'logo placeholder', className: classes.picStyles })),
        react_1.default.createElement(Box_1.default, { display: 'flex', className: classes.contentPlacing },
            react_1.default.createElement(Typography_1.default, { variant: 'h2', className: classes.root }, " EducatAble"))));
}
exports.default = Logo;
//# sourceMappingURL=index.js.map