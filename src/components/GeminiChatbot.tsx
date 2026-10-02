import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, Trash2, Shield, ArrowDown, User, Loader2 } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface GeminiChatbotProps {
  lang: Language;
}

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isRtl = lang === 'ar';

  const defaultGreeting: Message = {
    id: 'initial-greeting',
    role: 'assistant',
    content:
      lang === 'ar'
        ? 'أهلاً بك! أنا مستشار ذكاء القرارات الرقمي الخاص بـ **سلمان الحربي**.\n\nيمكنني إجابتك بدقة عن: كيف ينقل "ذكاء القرار" شركتك من التحليلات النظرية إلى إجراءات استباقية فورية، تفاصيل مشاريع سلمان مع هيئة تنظيم الكهرباء وأكاديمية طويق، أو حوكمة ونشر النماذج اللغوية المحلية (Local LLMs) وفق معايير PDPL و NDMO.'
        : "Welcome! I am the official Decision Intelligence AI Advisor for **Salman Alharbi**.\n\nI can explain how Decision Intelligence transforms business operations, detail Salman's enterprise accomplishments at SERA and Tuwaiq Academy, or discuss privacy-first Local LLMs adhering to Saudi PDPL & NDMO frameworks.",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const [messages, setMessages] = useState<Message[]>([defaultGreeting]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  // Suggested prompt chips
  const suggestedPrompts =
    lang === 'ar'
      ? [
          '💡 كيف سيغير ذكاء القرار من شركتي؟',
          '⚡ ما هي أبرز أرقام وإنجازات سلمان في هيئة تنظيم الكهرباء (SERA)؟',
          '🛡️ كيف يضمن سلمان الامتثال للـ PDPL وسيادة البيانات بنسبة 100%؟',
          '🚗 اشرح لي كيف يعمل نظام دعم قرارات التأمين YOLOv8'
        ]
      : [
          '💡 How will Decision Intelligence transform my company?',
          "⚡ What are Salman's top milestones at SERA & Tuwaiq Academy?",
          '🛡️ How does Salman guarantee 100% PDPL data residency?',
          '🚗 Explain the YOLOv8 insurance decision support system'
        ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: newHistory.map((m) => ({
            role: m.role,
            content: m.content
          })),
          lang
        })
      });

      if (!response.ok) {
        throw new Error('Server returned error response');
      }

      const data = await response.json();
      const replyText = data.reply || (lang === 'ar' ? 'عذراً، لم أتمكن من استلام الإجابة حالياً.' : 'Sorry, could not process request.');

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          lang === 'ar'
            ? 'سلمان الحربي أخصائي ذكاء قرارات وعلوم بيانات رائد بالمملكة. يمكنك التواصل معه مباشرة عبر البريد salman.alharbi.q@gmail.com أو هاتف +966590197730 لمناقشة فرص التعاون والاستشارات الاستراتيجية.'
            : 'Salman Alharbi is an applied Decision Intelligence specialist based in Riyadh. You can connect with him directly at salman.alharbi.q@gmail.com or +966590197730.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([defaultGreeting]);
  };

  // Helper to format simple markdown (bold, lists, paragraphs)
  const renderFormattedMessage = (content: string) => {
    return content.split('\n').map((line, idx) => {
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      // Check if numbered list or bullet point
      const isBullet = line.trim().startsWith('-') || line.trim().startsWith('•') || line.trim().startsWith('*');
      const isNumber = /^\d+[\.\)]\s/.test(line.trim());

      // Simple bold replacement
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="text-emerald-300 font-bold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (isBullet || isNumber) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pl-2">
            <span className="text-emerald-400 font-mono select-none">•</span>
            <span className="flex-1">{formattedParts}</span>
          </div>
        );
      }

      return (
        <p key={idx} className="my-1 leading-relaxed">
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      <div
        className={`fixed bottom-6 z-40 ${
          isRtl ? 'left-6' : 'right-6'
        } flex items-center gap-3`}
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-[#0e1626] to-[#0a101d] border border-emerald-500/40 hover:border-emerald-400 shadow-2xl hover:shadow-emerald-500/20 backdrop-blur-xl transition-all duration-300 hover:scale-105"
            aria-label="Open Decision Intelligence AI Chatbot"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#080c14] animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#080c14]" />
            </div>

            <div className="flex flex-col text-left rtl:text-right">
              <span className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
                {lang === 'ar' ? 'مستشار ذكاء القرار (AI)' : 'Decision Intelligence AI'}
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  Gemini
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {lang === 'ar' ? 'استشرني عن أثر ذكاء القرار' : 'Ask how DI transforms companies'}
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Expanded Multi-turn Chat Panel */}
      {isOpen && (
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className={`fixed bottom-4 sm:bottom-6 z-50 w-[95vw] sm:w-[440px] max-w-[480px] h-[640px] max-h-[88vh] rounded-3xl bg-[#090f1b]/95 border border-slate-700/80 shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden transition-all duration-300 ${
            isRtl ? 'left-3 sm:left-6' : 'right-3 sm:right-6'
          }`}
        >
          {/* Header */}
          <div className="px-5 py-4 bg-[#0e1626] border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{lang === 'ar' ? 'مستشار ذكاء القرار' : 'Decision Intelligence AI'}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Gemini 3.8
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                  <span>{lang === 'ar' ? 'سلمان الحربي • ممثل معتمد' : 'Official Salman Alharbi Advisor'}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title={lang === 'ar' ? 'مسح المحادثة' : 'Clear Chat'}
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title={lang === 'ar' ? 'تصغير' : 'Minimize'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scroll-smooth">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2.5 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-md ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-br-none rtl:rounded-bl-none rtl:rounded-br-2xl'
                      : 'bg-[#121c31] border border-slate-800 text-slate-200 rounded-bl-none rtl:rounded-br-none rtl:rounded-bl-2xl'
                  }`}
                >
                  <div>{renderFormattedMessage(message.content)}</div>
                  <span
                    className={`block text-[10px] font-mono mt-1.5 opacity-60 ${
                      message.role === 'user' ? 'text-emerald-100 text-right rtl:text-left' : 'text-slate-400'
                    }`}
                  >
                    {message.timestamp}
                  </span>
                </div>

                {message.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs font-mono py-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-[#121c31] border border-slate-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1 text-[11px] text-slate-400">
                    {lang === 'ar' ? 'جارٍ صياغة التحليل التنفيذي...' : 'Formulating executive response...'}
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/40">
            <span className="text-[11px] font-mono text-slate-400 block mb-1.5">
              {lang === 'ar' ? 'أسئلة مقترحة سريعة:' : 'Suggested Prompts:'}
            </span>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {suggestedPrompts.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-white text-[11px] whitespace-nowrap shrink-0 transition-colors disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#0e1626] border-t border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                lang === 'ar'
                  ? 'اطرح سؤالاً عن ذكاء القرار، أو خبرات ومشاريع سلمان...'
                  : 'Ask about Decision Intelligence or Salman’s projects...'
              }
              disabled={isLoading}
              className="flex-1 bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
