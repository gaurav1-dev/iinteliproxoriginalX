/**
 * ChatBot.tsx — iinteliProX AI Assistant floating widget
 *
 * Fully self-contained React chat widget.
 * Communicates with the n8n webhook directly via fetch (streaming supported).
 * No dependency on @n8n/chat DOM internals — 100% reliable.
 *
 * Mounted globally in __root.tsx RootShell → persists across all routes.
 */

import { useEffect, useRef, useState, useCallback, useId } from "react";

/* ─── Config ─────────────────────────────────────────────────────────────── */

const WEBHOOK_URL =
  "https://iinteliprox.app.n8n.cloud/webhook/1dac89b9-a47d-477d-8a12-a7b324aa2433/chat";

const SESSION_KEY = "iip-chat-session-id";
const HISTORY_KEY = "iip-chat-history";

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "bot",
  text: `👋 Welcome to iinteliProX!\n\nI'm your AI Assistant. I can help you with:\n\n• Website Development\n• AI Chatbots\n• WhatsApp Automation\n• Business Automation\n• SEO\n• Digital Marketing\n• Pricing\n• Free Consultation\n\nHow can I help you today?`,
  ts: Date.now(),
};

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
  ts: number;
  error?: boolean;
}

/* ─── Session ID ─────────────────────────────────────────────────────────── */

function getSessionId(): string {
  if (typeof window === "undefined") return "ssr";
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

/* ─── Persist history ────────────────────────────────────────────────────── */

function loadHistory(): ChatMessage[] {
  try {
    const raw = sessionStorage.getItem(HISTORY_KEY);
    if (raw) return JSON.parse(raw) as ChatMessage[];
  } catch { /* ignore */ }
  return [WELCOME];
}

function saveHistory(msgs: ChatMessage[]) {
  try {
    sessionStorage.setItem(HISTORY_KEY, JSON.stringify(msgs));
  } catch { /* ignore */ }
}

/* ─── Icons ──────────────────────────────────────────────────────────────── */

function SparkleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z"
        fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round" />
      <path d="M19 2L19.5 4.5L22 5L19.5 5.5L19 8L18.5 5.5L16 5L18.5 4.5L19 2Z"
        fill="white" opacity="0.7" />
      <path d="M5 17L5.4 18.6L7 19L5.4 19.4L5 21L4.6 19.4L3 19L4.6 18.6L5 17Z"
        fill="white" opacity="0.5" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseXIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Message bubble ─────────────────────────────────────────────────────── */

function MessageBubble({ msg }: { msg: ChatMessage }) {
  const isUser = msg.role === "user";
  return (
    <div style={{
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      marginBottom: "12px",
    }}>
      {!isUser && (
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, marginRight: 8, marginTop: 2,
          boxShadow: "0 2px 8px rgba(99,102,241,0.4)",
        }}>
          <SparkleIcon size={14} />
        </div>
      )}
      <div style={{
        maxWidth: "80%",
        padding: "10px 14px",
        borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
        background: isUser
          ? "linear-gradient(135deg,#6366f1,#8b5cf6)"
          : msg.error
            ? "rgba(239,68,68,0.12)"
            : "rgba(255,255,255,0.07)",
        color: isUser ? "#fff" : msg.error ? "#fca5a5" : "rgba(255,255,255,0.9)",
        fontSize: "0.875rem",
        lineHeight: 1.55,
        border: isUser ? "none" : msg.error ? "1px solid rgba(239,68,68,0.3)" : "1px solid rgba(255,255,255,0.1)",
        boxShadow: isUser ? "0 4px 12px rgba(99,102,241,0.35)" : "none",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
      }}>
        {msg.text}
      </div>
    </div>
  );
}

/* ─── Typing indicator ───────────────────────────────────────────────────── */

function TypingDots() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%",
        background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, boxShadow: "0 2px 8px rgba(99,102,241,0.4)",
      }}>
        <SparkleIcon size={14} />
      </div>
      <div style={{
        padding: "10px 16px",
        borderRadius: "18px 18px 18px 4px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex", gap: 5, alignItems: "center",
      }}>
        {[0, 0.2, 0.4].map((delay, i) => (
          <span key={i} style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "rgba(139,92,246,0.8)",
            display: "inline-block",
            animation: `iipTypingBounce 1.2s ${delay}s ease-in-out infinite`,
          }} />
        ))}
      </div>
    </div>
  );
}

/* ─── Error Fallback ─────────────────────────────────────────────────────── */

function ErrorFallback({ onRetry }: { onRetry: () => void }) {
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: "1rem", padding: "2rem", textAlign: "center",
    }}>
      <div style={{ fontSize: "2.5rem" }}>⚠️</div>
      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.6 }}>
        Sorry, our AI Assistant is temporarily unavailable.
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={onRetry}
          style={{
            padding: "0.5rem 1.2rem", borderRadius: "999px",
            background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
            color: "#fff", fontWeight: 600, fontSize: "0.85rem",
            border: "none", cursor: "pointer",
          }}
        >
          Try Again
        </button>
        <a
          href="/contact"
          style={{
            padding: "0.5rem 1.2rem", borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: "0.85rem",
            border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none",
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

/* ─── Main ChatBot component ─────────────────────────────────────────────── */

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window === "undefined") return [WELCOME];
    return loadHistory();
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [ripple, setRipple] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launchBtnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputId = useId();

  /* Scroll to bottom on new messages */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  /* Persist messages */
  useEffect(() => {
    if (typeof window !== "undefined") saveHistory(messages);
  }, [messages]);

  /* ESC key closes chat */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        launchBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  /* Focus input when chat opens */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  /* Animation timing */
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const t = setTimeout(() => setIsVisible(false), 280);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  /* Trap focus inside panel */
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      "button, input, textarea, a[href], [tabindex]:not([tabindex='-1'])"
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    panel.addEventListener("keydown", handler);
    return () => panel.removeEventListener("keydown", handler);
  }, [isOpen, isVisible]);

  const toggle = useCallback(() => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
    setIsOpen(v => !v);
  }, []);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text,
      ts: Date.now(),
    };

    const botMsgId = crypto.randomUUID();
    const initialBotMsg: ChatMessage = {
      id: botMsgId,
      role: "bot",
      text: "",
      ts: Date.now(),
    };

    setMessages(prev => [...prev, userMsg, initialBotMsg]);
    setInput("");
    setIsLoading(true);
    setHasError(false);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "text/event-stream, application/json, text/plain, */*",
        },
        body: JSON.stringify({
          chatInput: text,
          action: "sendMessage",
          sessionId: getSessionId(),
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      let accumulatedText = "";

      const updateBotText = (chunkText: string) => {
        accumulatedText += chunkText;
        const currentText = accumulatedText;
        setMessages(prev =>
          prev.map(m => (m.id === botMsgId ? { ...m, text: currentText } : m))
        );
      };

      if (res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          // Keep the last incomplete fragment in buffer
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;

            let cleanLine = trimmed;
            if (cleanLine.startsWith("data:")) {
              cleanLine = cleanLine.replace(/^data:\s*/, "");
            }
            if (cleanLine === "[DONE]") continue;

            try {
              const parsed = JSON.parse(cleanLine);
              if (parsed && typeof parsed === "object") {
                if (parsed.type === "item" && typeof parsed.content === "string") {
                  updateBotText(parsed.content);
                } else if (typeof parsed.output === "string") {
                  updateBotText(parsed.output);
                } else if (typeof parsed.text === "string") {
                  updateBotText(parsed.text);
                } else if (typeof parsed.message === "string") {
                  updateBotText(parsed.message);
                }
              }
            } catch {
              // If line is not JSON, it might be raw text fragment
              if (!cleanLine.startsWith("{") && !cleanLine.startsWith("[")) {
                updateBotText(cleanLine);
              }
            }
          }
        }

        // Process leftover buffer content
        if (buffer.trim()) {
          let cleanLine = buffer.trim();
          if (cleanLine.startsWith("data:")) cleanLine = cleanLine.replace(/^data:\s*/, "");
          if (cleanLine !== "[DONE]") {
            try {
              const parsed = JSON.parse(cleanLine);
              if (parsed && typeof parsed === "object") {
                if (parsed.type === "item" && typeof parsed.content === "string") {
                  updateBotText(parsed.content);
                } else if (typeof parsed.output === "string") {
                  updateBotText(parsed.output);
                } else if (typeof parsed.text === "string") {
                  updateBotText(parsed.text);
                } else if (typeof parsed.message === "string") {
                  updateBotText(parsed.message);
                }
              }
            } catch {
              if (!cleanLine.startsWith("{") && !cleanLine.startsWith("[")) {
                updateBotText(cleanLine);
              }
            }
          }
        }
      } else {
        // Fallback for environments without stream reader
        const rawText = await res.text();
        const lines = rawText.split("\n");
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;
          let cleanLine = trimmed;
          if (cleanLine.startsWith("data:")) cleanLine = cleanLine.replace(/^data:\s*/, "");
          if (cleanLine === "[DONE]") continue;
          try {
            const parsed = JSON.parse(cleanLine);
            if (parsed.type === "item" && typeof parsed.content === "string") {
              updateBotText(parsed.content);
            } else if (typeof parsed.output === "string") {
              updateBotText(parsed.output);
            }
          } catch {
            updateBotText(cleanLine);
          }
        }
      }

      // If no text was accumulated, show fallback message
      if (!accumulatedText.trim()) {
        setMessages(prev =>
          prev.map(m =>
            m.id === botMsgId
              ? { ...m, text: "I received your message! How can I help you further?" }
              : m
          )
        );
      }
    } catch (error) {
      console.error("Chat error:", error);
      // Remove empty bot placeholder on true network failure
      setMessages(prev => prev.filter(m => m.id !== botMsgId || m.text.length > 0));
      // Append real error message
      const errMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "bot",
        text: "Sorry, I encountered a network connection error. Please check your internet connection and try again.",
        ts: Date.now(),
        error: true,
      };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }, [sendMessage]);

  const handleRetry = useCallback(() => {
    setHasError(false);
    setMessages([WELCOME]);
  }, []);

  return (
    <>
      {/* ── Global styles ── */}
      <style>{`
        @keyframes iipLaunchPulse {
          0%   { box-shadow: 0 0 0 0 rgba(99,102,241,0.5), 0 8px 32px rgba(99,102,241,0.4); }
          70%  { box-shadow: 0 0 0 12px rgba(99,102,241,0), 0 8px 32px rgba(99,102,241,0.4); }
          100% { box-shadow: 0 0 0 0 rgba(99,102,241,0), 0 8px 32px rgba(99,102,241,0.4); }
        }
        @keyframes iipPanelIn {
          from { opacity:0; transform:translateY(16px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes iipPanelOut {
          from { opacity:1; transform:translateY(0) scale(1); }
          to   { opacity:0; transform:translateY(16px) scale(0.97); }
        }
        @keyframes iipTypingBounce {
          0%,60%,100% { transform:translateY(0); opacity:0.5; }
          30%          { transform:translateY(-5px); opacity:1; }
        }
        @keyframes iipRipple {
          from { transform:scale(0); opacity:0.6; }
          to   { transform:scale(2.5); opacity:0; }
        }
        @keyframes iipSpinOnce {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }

        #iip-launch-btn {
          position: fixed;
          bottom: max(1.5rem, calc(1rem + env(safe-area-inset-bottom, 0px)));
          right: max(1.5rem, calc(1rem + env(safe-area-inset-right, 0px)));
          z-index: 9999;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          padding: 0;
          outline: none;
          overflow: hidden;

          /* Premium blue/purple gradient */
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%);

          /* Glassmorphism border */
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.2),
            0 8px 32px rgba(99,102,241,0.45),
            0 2px 8px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.25);

          animation: iipLaunchPulse 2.4s cubic-bezier(0.4,0,0.6,1) infinite;
          transition:
            transform 220ms cubic-bezier(0.34,1.56,0.64,1),
            box-shadow 220ms ease;

          /* Glassmorphism pseudo-overlay handled via inner div */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #iip-launch-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(255,255,255,0.18) 0%, transparent 60%);
          border-radius: 50%;
          pointer-events: none;
        }

        #iip-launch-btn:hover {
          transform: scale(1.08);
          animation-play-state: paused;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.3),
            0 12px 40px rgba(99,102,241,0.6),
            0 4px 16px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }

        #iip-launch-btn:focus-visible {
          outline: 2px solid #a78bfa;
          outline-offset: 3px;
          animation-play-state: paused;
        }

        #iip-launch-btn:active {
          transform: scale(0.95);
        }

        .iip-ripple {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          animation: iipRipple 0.6s ease-out forwards;
          pointer-events: none;
        }

        /* Icon swap */
        #iip-launch-btn .iip-icon-spark,
        #iip-launch-btn .iip-icon-close {
          position: absolute;
          transition: opacity 200ms ease, transform 220ms cubic-bezier(0.34,1.56,0.64,1);
          display: flex; align-items: center; justify-content: center;
        }
        #iip-launch-btn[aria-expanded="false"] .iip-icon-spark { opacity:1; transform:rotate(0) scale(1); }
        #iip-launch-btn[aria-expanded="false"] .iip-icon-close  { opacity:0; transform:rotate(90deg) scale(0.5); }
        #iip-launch-btn[aria-expanded="true"]  .iip-icon-spark  { opacity:0; transform:rotate(-90deg) scale(0.5); }
        #iip-launch-btn[aria-expanded="true"]  .iip-icon-close  { opacity:1; transform:rotate(0) scale(1); }

        /* Chat panel */
        #iip-chat-panel {
          position: fixed;
          bottom: max(5.5rem, calc(5rem + env(safe-area-inset-bottom, 0px)));
          right: max(1.5rem, calc(1rem + env(safe-area-inset-right, 0px)));
          z-index: 9998;
          width: 380px;
          height: 580px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transform-origin: bottom right;

          /* Glassmorphism */
          background: linear-gradient(
            160deg,
            rgba(15,12,30,0.96) 0%,
            rgba(20,16,42,0.97) 100%
          );
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);

          border: 1px solid rgba(139,92,246,0.25);
          box-shadow:
            0 24px 80px rgba(0,0,0,0.8),
            0 0 0 1px rgba(255,255,255,0.06),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        #iip-chat-panel.iip-panel-in {
          animation: iipPanelIn 280ms cubic-bezier(0.22,1,0.36,1) both;
        }
        #iip-chat-panel.iip-panel-out {
          animation: iipPanelOut 220ms cubic-bezier(0.55,0,1,0.45) both;
        }

        /* Header */
        .iip-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 100%);
          border-bottom: 1px solid rgba(139,92,246,0.2);
          flex-shrink: 0;
        }

        .iip-header-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg,#6366f1,#8b5cf6,#a78bfa);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 0 2px rgba(139,92,246,0.3), 0 4px 12px rgba(99,102,241,0.4);
        }

        .iip-header-title {
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: rgba(255,255,255,0.95);
          line-height: 1.2;
        }

        .iip-header-sub {
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
          font-size: 0.7rem;
          color: #a78bfa;
          margin-top: 1px;
          letter-spacing: 0.01em;
        }

        .iip-status {
          display: flex; align-items: center; gap: 5px;
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
          margin-left: auto;
        }

        .iip-status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 0 2px rgba(52,211,153,0.25);
          animation: iipLaunchPulse 2s ease-in-out infinite;
        }

        .iip-close-btn {
          width: 30px; height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.6);
          transition: background 180ms, color 180ms;
          flex-shrink: 0;
        }
        .iip-close-btn:hover {
          background: rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.9);
        }
        .iip-close-btn:focus-visible {
          outline: 2px solid #a78bfa;
          outline-offset: 2px;
        }

        /* Messages area */
        .iip-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px 16px 8px;
          scroll-behavior: smooth;
        }

        .iip-messages::-webkit-scrollbar { width: 4px; }
        .iip-messages::-webkit-scrollbar-track { background: transparent; }
        .iip-messages::-webkit-scrollbar-thumb {
          background: rgba(139,92,246,0.3);
          border-radius: 2px;
        }

        /* Input area */
        .iip-input-area {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          padding: 12px 16px 16px;
          border-top: 1px solid rgba(139,92,246,0.15);
          background: rgba(0,0,0,0.2);
          flex-shrink: 0;
        }

        .iip-textarea {
          flex: 1;
          resize: none;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 14px;
          padding: 10px 14px;
          color: rgba(255,255,255,0.9);
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
          font-size: 0.875rem;
          line-height: 1.5;
          min-height: 42px;
          max-height: 120px;
          outline: none;
          transition: border-color 180ms, background 180ms;
          overflow-y: auto;
        }

        .iip-textarea::placeholder { color: rgba(255,255,255,0.3); }
        .iip-textarea:focus {
          border-color: rgba(139,92,246,0.55);
          background: rgba(255,255,255,0.08);
        }

        .iip-send-btn {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg,#6366f1,#8b5cf6);
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          flex-shrink: 0;
          transition: transform 180ms, opacity 180ms, box-shadow 180ms;
          box-shadow: 0 4px 12px rgba(99,102,241,0.4);
        }
        .iip-send-btn:hover:not(:disabled) {
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(99,102,241,0.55);
        }
        .iip-send-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .iip-send-btn:focus-visible {
          outline: 2px solid #a78bfa;
          outline-offset: 2px;
        }

        /* Powered-by footer */
        .iip-powered {
          text-align: center;
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.2);
          padding: 6px 0 8px;
          letter-spacing: 0.03em;
        }

        @media (max-width: 480px) {
          #iip-launch-btn {
            bottom: max(1.25rem, calc(1rem + env(safe-area-inset-bottom, 0px)));
            right: max(1rem, calc(0.75rem + env(safe-area-inset-right, 0px)));
            width: 52px;
            height: 52px;
          }
          #iip-chat-panel {
            bottom: max(4.75rem, calc(4.25rem + env(safe-area-inset-bottom, 0px)));
            right: 8px;
            left: 8px;
            width: auto;
            height: 72vh;
            max-height: 520px;
          }
        }
      `}</style>

      {/* ── Floating launcher button ── */}
      <button
        id="iip-launch-btn"
        ref={launchBtnRef}
        type="button"
        onClick={toggle}
        aria-label={isOpen ? "Close iinteliProX AI Assistant" : "Open iinteliProX AI Assistant"}
        aria-expanded={isOpen}
        aria-controls="iip-chat-panel"
        aria-haspopup="dialog"
      >
        {ripple && <span className="iip-ripple" />}

        {/* Sparkle icon (closed state) */}
        <span className="iip-icon-spark" aria-hidden="true">
          <SparkleIcon size={24} />
        </span>

        {/* Close icon (open state) */}
        <span className="iip-icon-close" aria-hidden="true">
          <CloseXIcon />
        </span>
      </button>

      {/* ── Chat panel ── */}
      {isVisible && (
        <div
          id="iip-chat-panel"
          ref={panelRef}
          className={isOpen ? "iip-panel-in" : "iip-panel-out"}
          role="dialog"
          aria-modal="true"
          aria-label="iinteliProX AI Assistant"
          aria-labelledby="iip-chat-title"
        >
          {/* Header */}
          <div className="iip-header">
            <div className="iip-header-avatar" aria-hidden="true">
              <SparkleIcon size={18} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="iip-header-title" id="iip-chat-title">
                iinteliProX AI Assistant
              </div>
              <div className="iip-header-sub">Your Growth on Autopilot</div>
            </div>
            <div className="iip-status">
              <span className="iip-status-dot" aria-hidden="true" />
              Online
            </div>
            <button
              type="button"
              className="iip-close-btn"
              onClick={() => { setIsOpen(false); launchBtnRef.current?.focus(); }}
              aria-label="Close chat"
            >
              <CloseXIcon />
            </button>
          </div>

          {/* Messages */}
          {hasError ? (
            <ErrorFallback onRetry={handleRetry} />
          ) : (
            <div className="iip-messages" aria-live="polite" aria-atomic="false" role="log">
              {messages.map(msg => (
                <MessageBubble key={msg.id} msg={msg} />
              ))}
              {isLoading && <TypingDots />}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input area */}
          {!hasError && (
            <div className="iip-input-area">
              <label htmlFor={inputId} className="sr-only">
                Message iinteliProX AI Assistant
              </label>
              <textarea
                id={inputId}
                ref={inputRef}
                className="iip-textarea"
                rows={1}
                placeholder="Type your message…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                aria-label="Message input"
                maxLength={2000}
                autoComplete="off"
              />
              <button
                type="button"
                className="iip-send-btn"
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </div>
          )}

          <div className="iip-powered" aria-hidden="true">
            Powered by iinteliProX AI
          </div>
        </div>
      )}
    </>
  );
}
