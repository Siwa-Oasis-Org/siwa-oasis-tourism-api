import { Router } from "express";
import * as auth from "./auth.services.js";

export const authRouter = Router();

// POST /auth/register
authRouter.post("/register", auth.register);

// POST /auth/login
authRouter.post("/login", auth.login);
