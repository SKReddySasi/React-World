"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const constants_1 = require("../utils/constants");
const UserContext_1 = __importDefault(require("../utils/UserContext"));
// import UserContextValue from '../utils/UserContext';
const Footer = () => {
    const user = (0, react_1.useContext)(UserContext_1.default);
    return ((0, jsx_runtime_1.jsx)("footer", { className: "shadow-top", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center py-4 max-w-[1200] m-auto", children: [(0, jsx_runtime_1.jsx)("img", { className: "w-36", src: constants_1.LOGO_URL, alt: "footerLogo" }), (0, jsx_runtime_1.jsx)("p", { "data-testid": "userName", children: user.user }), (0, jsx_runtime_1.jsx)("p", { children: "\u00A9 2023 Swiggy" })] }) }));
};
exports.default = Footer;
