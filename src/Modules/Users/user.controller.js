import { Router } from "express";
import { protect } from "../../Middlewares/auth.middleware.js";
import * as user from "./user.services.js";

export const userRouter = Router();

// GET /users/me
userRouter.get("/me", protect, user.getMyProfile);

