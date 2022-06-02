import * as jwt from 'jsonwebtoken'
import 'dotenv/config';
import { NextFunction } from 'express';

export const auth= async (req, res, next: NextFunction) =>{

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({ msg: "Acesso negado!" });

    try {
        
        jwt.verify(token, process.env.SECRET);
        next();
    } catch (err) {
        res.status(400).json({ msg: "O Token é inválido!" });
    }}

