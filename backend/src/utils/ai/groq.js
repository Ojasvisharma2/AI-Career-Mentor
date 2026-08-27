const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function groqChat(prompt) {
  try {
    const result = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [{ role: "user", content: prompt }],
    });

    const text = result.choices[0]?.message?.content;
    return text || "No response from Groq.";
  } catch (err) {
    console.error("❌ Groq API Error:", err.message);
    throw new Error("Groq AI failed.");
  }
}

module.exports = { groqChat };