import { Request, Response } from "express";
import axios, {isCancel, AxiosError} from 'axios';

// URL del servicio REST de tu compañero
const externalServiceURL = 'http://10.42.1.191:3000/api/personas';  // Cambia esta URL según sea necesario

// Controlador para obtener los datos desde el servicio REST de tu compañero
export const getALLTABLAS = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(externalServiceURL);
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener datos del servicio externo:', error);
    res.status(500).json({ message: 'Error al obtener datos del servicio externo' });
  }
};

