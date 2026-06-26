import { Router } from "express";
import { protect } from "../../Middlewares/auth.middleware.js";
import * as chatbot from "./chatbot.services.js";

export const chatbotRouter = Router();

// POST /chatbot/ask
chatbotRouter.post("/ask", protect, chatbot.askChatbot);

// GET /chatbot/history
chatbotRouter.get("/history", protect, chatbot.getChatHistory);
