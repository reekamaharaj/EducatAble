"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Container_1 = require("@material-ui/core/Container");
var styles_1 = require("@material-ui/core/styles");
var Box_1 = require("@material-ui/core/Box");
var index_1 = require("../components/Logo/index");
var index_2 = require("../components/LearnMore/index");
var index_3 = require("../components/DYKSection/index");
var index_4 = require("../components/Resources/index");
var index_5 = require("../components/Footer/index");
var useStyles = styles_1.makeStyles({
    root: {
        backgroundColor: '#72A0C1',
    },
});
function Homepage() {
    var classes = useStyles();
    return react_1.default.createElement("div", { style: { width: '100%' }, className: classes.root },
        react_1.default.createElement(Container_1.default, { className: classes.root },
            react_1.default.createElement(index_1.default, null),
            react_1.default.createElement(index_2.default, null)),
        react_1.default.createElement(Box_1.default, { display: "flex", flexWrap: "nowrap", p: 1, m: 1 },
            react_1.default.createElement(index_3.default, null),
            react_1.default.createElement(index_4.default, null)),
        react_1.default.createElement(index_5.default, null));
}
exports.default = Homepage;
//# sourceMappingURL=Homepage.js.map