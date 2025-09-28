"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const config_1 = __importDefault(require("./database/config"));
const employee_1 = __importDefault(require("./routes/employee"));
const port = config_1.default.port;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const path_1 = __importDefault(require("path"));
app.use("/employee", employee_1.default);
/** ruta para ver el documento pdf llamado node_mysql_app.pdf */
app.use("/docs", express_1.default.static(path_1.default.join(process.cwd(), "documents")));
/** Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ message: err.message });
    return;
});
app.listen(port, () => {
    console.log(` Example app listening at http://localhost:${port}`);
});
