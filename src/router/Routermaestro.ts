import { Router} from 'express';
import {getALLTABLAS} from '../controllers/maestroControl'

const router = Router();

router.get('/', getALLTABLAS);


export default router;