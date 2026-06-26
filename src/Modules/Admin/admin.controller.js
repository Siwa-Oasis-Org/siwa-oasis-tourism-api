import { Router } from "express";
import { protect, adminOnly } from "../../Middlewares/auth.middleware.js";
import * as admin from "./admin.services.js";

export const adminRouter = Router();

// All admin routes require auth + admin role
adminRouter.use(protect, adminOnly);

// GET /admin/users
adminRouter.get("/users", admin.getAllUsers);

// GET /admin/logs
adminRouter.get("/logs", admin.getUpdateLogs);

// GET /admin/reports
adminRouter.get("/reports", admin.getReports);
