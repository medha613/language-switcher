

// /api/chat/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  const { message } = await req.json();

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", 
        messages: [
          { role: "system", content: "You are a helpful AI assistant." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    const reply = data.choices?.[0]?.message?.content || "Sorry, something went wrong.";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chatbot error:", error);
    return NextResponse.json({ error: "Chatbot failed" }, { status: 500 });
  }
}

