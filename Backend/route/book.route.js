import express from 'express';  //routes define krne ke liye express ko import krenge
import { getBook } from '../controller/book.controller.js';//fn import kiya cont se
const router=express.Router();
router.get("/", getBook) ;   //router ki help se get req krenge apne fn pe
                            
export default router;
