"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = require("@material-ui/core/Button");
var styles_1 = require("@material-ui/styles");
var Box_1 = require("@material-ui/core/Box");
var useStyles = styles_1.makeStyles({
    learnMoreButton: {
        backgroundColor: '#72A0C1',
        color: '#fff',
        padding: '15px 25px',
        margin: '20px',
        border: '2px #fff solid',
        borderRadius: '15px',
        justifyContent: 'center',
        transitionDuration: '0.4s',
        transitionTimingFunction: 'linear',
        '&:hover': {
            color: '#72A0C1',
            backgroundColor: '#fff'
        }
    },
    contentPlacing: {
        justifyContent: 'center'
    }
});
function LearnMore() {
    var classes = useStyles();
    return (react_1.default.createElement("div", { style: { width: '100%' } },
        react_1.default.createElement(Box_1.default, { display: 'flex', className: classes.contentPlacing },
            react_1.default.createElement(Button_1.default, { className: classes.learnMoreButton }, " Learn More "))));
}
exports.default = LearnMore;
//# sourceMappingURL=index.js.map