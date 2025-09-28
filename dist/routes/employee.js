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
const express_1 = __importDefault(require("express"));
const employee_1 = __importDefault(require("../controllers/employee"));
const router = express_1.default.Router();
// create employee
router.post("/create", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(yield employee_1.default.create(req.body));
    }
    catch (err) {
        next(err);
    }
}));
// get employee by id
router.get("/all", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emp = yield employee_1.default.getAllEmployees(req);
        res.json(emp);
    }
    catch (err) {
        console.error(`Error while getting Records `, err.message);
        next(err);
    }
}));
// update employee by id
router.put("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emp = yield employee_1.default.update(req.params.id, req.body);
        res.json(emp);
    }
    catch (err) {
        console.error(`Error while getting Records `, err.message);
        next(err);
    }
}));
// Delete employee by id
router.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emp = yield employee_1.default.remove(req.params.id);
        res.json(emp);
    }
    catch (err) {
        console.error(`Error while getting Records `, err.message);
        next(err);
    }
}));
exports.default = router;
