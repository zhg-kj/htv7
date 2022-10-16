"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snow = void 0;
var react_1 = __importDefault(require("react"));
require("./index.css");
var styled_components_1 = __importDefault(require("styled-components"));
var defaultProps = {
    particles: 300,
};
exports.Snow = function (_a) {
    var height = _a.height, backgroundColor = _a.backgroundColor, backgroundImage = _a.backgroundImage, color = _a.color, size = _a.size, particles = _a.particles;
    var Wraper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    height: ", ";\n    background-color: ", ";\n    filter: drop-shadow(0 0 10px rgb(252, 223, 223));\n    background-image: url(", ");\n    background-position: center;\n    background-size: cover;\n    background-attachment: fixed;\n    opacity: 1;\n  "], ["\n    width: 100%;\n    height: ", ";\n    background-color: ", ";\n    filter: drop-shadow(0 0 10px rgb(252, 223, 223));\n    background-image: url(", ");\n    background-position: center;\n    background-size: cover;\n    background-attachment: fixed;\n    opacity: 1;\n  "])), height ? height : '100vh', backgroundColor ? backgroundColor : null, backgroundImage);
    var Snow = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    width: ", ";\n    height: ", ";\n    background: ", ";\n    border-radius: 50%;\n  "], ["\n    position: absolute;\n    width: ", ";\n    height: ", ";\n    background: ", ";\n    border-radius: 50%;\n  "])), size ? size : '11px', size ? size : '11px', color ? color : 'white');
    var snowSize = [];
    for (var i = 0; i < particles; i++) {
        snowSize.push(i);
    }
    var snowRender = snowSize.map(function (item) { return (react_1.default.createElement(Snow, { key: item, className: "snow" })); });
    return react_1.default.createElement(Wraper, null, snowRender);
};
exports.Snow.defaultProps = defaultProps;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map