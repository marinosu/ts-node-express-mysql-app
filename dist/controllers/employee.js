"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../database/db"));
const helper_1 = require("../helper/helper");
const config_1 = __importDefault(require("../database/config"));
const table = config_1.default.tables.employee;
function getAllEmployees(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const rows = yield db_1.default.query(`SELECT * FROM employee`);
        const data = (0, helper_1.emptyOrRows)(rows);
        return data;
    });
}
function getEmployeeByID(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const rows = yield db_1.default.query(`SELECT * FROM ${table} WHERE id=${req.params.id}`);
        const data = (0, helper_1.emptyOrRows)(rows);
        return data;
    });
}
function create(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            name: payload.name,
            email: payload.email,
        };
        const result = yield db_1.default.query(`INSERT INTO employee SET ?`, data);
        let message = "Error in creating Record";
        if (result.affectedRows) {
            message = "Record created successfully";
        }
        return { message };
    });
}
function update(id, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            name: payload.name,
            email: payload.email,
        };
        const result = yield db_1.default.query(`UPDATE employee SET? WHERE id = ?`, [
            data,
            id,
        ]);
        let message = "Error in updating Record";
        if (result.affectedRows) {
            message = "Record updated successfully";
        }
        return { message };
    });
}
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db_1.default.query(`DELETE FROM employee WHERE id=?`, [id]);
        let message = "Error in deleting Record";
        if (result.affectedRows) {
            message = "Record deleted successfully";
        }
        return { message };
    });
}
exports.default = {
    getAllEmployees,
    create,
    update,
    remove,
    getEmployeeByID,
};
