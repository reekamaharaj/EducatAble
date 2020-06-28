"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Box_1 = require("@material-ui/core/Box");
var Typography_1 = require("@material-ui/core/Typography");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    root: {
        height: '400px',
        borderRight: '2px solid #fff',
        backgroundColor: '#72A0C1',
    },
    boxStyle: {
        justifyContent: 'center',
        padding: '40px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '700',
        color: 'white'
    }
});
function DYKSection() {
    var classes = useStyles();
    return (react_1.default.createElement("div", { style: { width: '50%' }, className: classes.root },
        react_1.default.createElement(Box_1.default, { display: 'flex', className: classes.boxStyle },
            react_1.default.createElement(Typography_1.default, { variant: 'h2' }, "Did you know?")),
        react_1.default.createElement(Box_1.default, { display: 'flex', className: classes.boxStyle },
            react_1.default.createElement(Typography_1.default, { variant: 'p' }, "Cat ipsum dolor sit amet, cheetah tomcat munchkin. Burmese havana brown, grimalkin singapura so american bobtail but tiger, yet american shorthair. "))));
}
exports.default = DYKSection;
//# sourceMappingURL=index.js.map