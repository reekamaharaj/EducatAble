"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirm = void 0;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var core_1 = require("@material-ui/core");
var Button_1 = require("@material-ui/core/Button");
var Confirm = /** @class */ (function (_super) {
    __extends(Confirm, _super);
    function Confirm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.continue = function (e) {
            e.preventDefault();
            // PROCESS FORM //
            _this.props.nextStep();
        };
        _this.back = function (e) {
            e.preventDefault();
            _this.props.prevStep();
        };
        return _this;
    }
    Confirm.prototype.render = function () {
        var _a = this.props.values, firstName = _a.firstName, lastName = _a.lastName, email = _a.email;
        var theme = styles_1.createMuiTheme();
        return (react_1.default.createElement(styles_1.ThemeProvider, { theme: theme },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(AppBar_1.default, { title: 'Confirm' }),
                react_1.default.createElement(core_1.List, null,
                    react_1.default.createElement(core_1.ListItem, { primaryText: 'First Name', secondaryText: firstName }),
                    react_1.default.createElement(core_1.ListItem, { primaryText: 'Last name', secondaryText: lastName }),
                    react_1.default.createElement(core_1.ListItem, { primaryText: 'Email', secondaryText: email })),
                react_1.default.createElement("br", null),
                react_1.default.createElement(Button_1.default, { label: 'Confirm & Continue', primary: true, style: styles.button, onClick: this.continue }),
                react_1.default.createElement("br", null),
                react_1.default.createElement(Button_1.default, { label: 'Back', primary: false, style: styles.button, onClick: this.back }))));
    };
    return Confirm;
}(react_1.Component));
exports.Confirm = Confirm;
var styles = {
    button: {
        margin: 15,
    },
};
exports.default = Confirm;
//# sourceMappingURL=index.js.map