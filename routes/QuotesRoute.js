import express from 'express';
import { 
    getQuotes,
    getQuotesById,
    createQuote,
    updateQuote,
    deleteQuote
 } from "../controllers/Quotes.controller";

const router = express.Router();

router.get('/quote', getQuotes);
router.get('/quote/:id', getQuotesById);
router.post('/quote', createQuote);
router.patch('/quote/:id', updateQuote);
router.delete('/quote/:id', deleteQuote);

export default router;