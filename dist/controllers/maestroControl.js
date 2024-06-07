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
exports.getALLTABLAS = void 0;
const axios_1 = __importDefault(require("axios"));
// URL del servicio REST de tu compañero
const externalServiceURL = 'http://10.42.1.191:3000/api/personas'; // Cambia esta URL según sea necesario
// Controlador para obtener los datos desde el servicio REST de tu compañero
const getALLTABLAS = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(externalServiceURL);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error al obtener datos del servicio externo:', error);
        res.status(500).json({ message: 'Error al obtener datos del servicio externo' });
    }
});
exports.getALLTABLAS = getALLTABLAS;
