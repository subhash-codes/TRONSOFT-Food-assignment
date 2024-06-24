import express from 'express'
import { addTocart, removeFromCart, getCart } from '../Controllers/cartController.js'
import authMiddleware from '../Middlewear/auth.js';

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware, addTocart)
cartRouter.post("/remove",authMiddleware, removeFromCart)
cartRouter.post("/get",authMiddleware, getCart)

export default cartRouter;