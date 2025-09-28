import express, { NextFunction, Request, Response } from "express";
const app = express();
import db from "./database/config";
import employee from "./routes/employee";
const port = db.port;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import path from "path";

app.use("/employee", employee);
/** ruta para ver el documento pdf llamado node_mysql_app.pdf */
app.use("/docs", express.static(path.join(process.cwd(), "documents")));
/** Error handler middleware */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ message: err.message });
    return;
});
app.listen(port, () => {
    console.log(` Example app listening at http://localhost:${port}`);
});