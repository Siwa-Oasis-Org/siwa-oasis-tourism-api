import { ChatHistory } from "../../DB/Models/ChatHistory.model.js";

// ─── Send Question ────────────────────────────────────────────────────────────
// دي هتبعت السؤال لـ AI API وترجع الإجابة
// حالياً بترجع mock response - هتوصل هنا لـ Gemini/OpenAI
export const askChatbot = async (req, res) => {
  const { question } = req.body;
  if (!question)
    return res.status(400).json({ success: false, message: "Question is required" });

  try {
    // TODO: استبدل ده بـ real AI API call (Gemini / OpenAI)
    const answer = `مرحباً! سؤالك كان: "${question}". الإجابة ستكون من الـ AI هنا.`;

    // Save to history
    const chat = await ChatHistory.create({
      user_id: req.user.user_id,
      question,
      answer,
    });

    return res.status(200).json({ success: true, answer, chat_id: chat.chat_id });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Get Chat History ─────────────────────────────────────────────────────────
export const getChatHistory = async (req, res) => {
  try {
    const history = await ChatHistory.findAll({
      where: { user_id: req.user.user_id },
      order: [["timestamp", "DESC"]],
    });
    return res.status(200).json({ success: true, history });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
