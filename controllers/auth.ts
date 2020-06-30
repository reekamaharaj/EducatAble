import * as jwtmiddleware from "express-jwt";


export const auth = jwtmiddleware({ secret: process.env.SECRET || "secret", algorithms: ["HS256"] })