"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// Create the context with the specified type for the context value
const UserContext = (0, react_1.createContext)({
    user: "Sasi",
});
exports.default = UserContext;
