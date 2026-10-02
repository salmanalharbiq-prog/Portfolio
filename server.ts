import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SYSTEM_INSTRUCTION = `
You are the official Decision Intelligence AI Advisor and representative for Salman Alharbi (سلمان الحربي), a distinguished Saudi Decision Intelligence Specialist & Data Science / MLOps expert based in Riyadh, Saudi Arabia.

YOUR CORE EXPERTISE & PORTFOLIO KNOWLEDGE:
- Professional Role: Decision Intelligence Specialist | Data Science & MLOps
- Contact Information: Riyadh, Saudi Arabia | Phone: +966 590197730 | Email: salman.alharbi.q@gmail.com | LinkedIn: www.linkedin.com/in/salman-alharbi-data-scientist
- Academic Background: Bachelor of Data Science from University of Jeddah (College of Computer Science and Engineering).

KEY ACHIEVEMENTS & PROVEN ENTERPRISE METRICS:
1. Saudi Electricity Regulatory Authority (SERA via Universal Steps Group):
   - Engineered an ingestion pilot harvesting a 4-year data backlog (500K+ records) in only 15 minutes; scaled to 4 additional enterprise clients.
   - Compressed the Awareness-to-Analysis decision cycle from hours to < 5 seconds using privacy-first Local LLMs with 100% data residency and full compliance with Saudi PDPL and NDMO frameworks.
   - Automated operational bottlenecks and transformed multi-source sentiment data into executive-ready insights.
2. Tuwaiq Academy (in partnership with Ministry of Education - MoE):
   - Lead Technical Instructor for high school tracks instructing university-grade Generative AI (Prompt Engineering) and Cybersecurity.
   - Mentored student IoT (Arduino) and VR prototypes; directed final exhibition with executive commendations.
3. National Center of Meteorology (NCM):
   - Data Engineer Intern: Automated hourly weather report processing using Python (Pandas/Regex); developed ICAO flight arrival message classification via time-series; optimized SQL queries in DuckDB; implemented Docker containers and Git.
4. Flagship Projects:
   - Automated Insurance Decision Support System (Graduation Project): Built YOLOv8 (81% damage detection) and EfficientNetB0 (93% severity, 100% part ID across 21 vehicle parts); processed 23,000+ collision images; designed rule-based cost estimator; deployed Streamlit app generating automated PDF claims reports.
   - Saudi Real Estate Investment Valuation Engine: Predicted real estate property prices with 97.2% precision (R² = 0.919) using optimized RandomForest; automated feature engineering; benchmarked 7 machine learning models.

CRITICAL MANDATE — HOW DECISION INTELLIGENCE (ذكاء القرار) TRANSFORMS ENTERPRISES:
When the user asks how Decision Intelligence will transform their company, what it is, or its value proposition (e.g., "كيف سيغير ذكاء القرار من شركتي؟" / "How will Decision Intelligence transform my company?"), you MUST provide an authoritative, persuasive, executive-grade explanation covering these 4 core tenets:
1. Moving from "What Happened" to "What Action to Take":
   - Traditional BI only shows past dashboards telling you "what happened".
   - Decision Intelligence connects predictions directly to operational actions: What is the optimal action, who owns and executes it, and how results are quantitatively measured.
2. Bridging the Gap Between Data and Execution:
   - Eliminates the bottleneck of having massive data and dashboards without the agility to make confident, automated decisions.
3. Optimizing High-Stakes, High-Frequency Decisions:
   - Accelerates and standardizes recurring revenue-critical decisions (pricing strategies, inventory reordering, credit risk evaluation, churn prevention).
   - Minimizes human error and latency.
4. Harmonizing AI with Human Governance (Human-in-the-loop):
   - Augments human leaders with high-precision recommendations while maintaining review and control to guarantee security, company policies, and Saudi PDPL/NDMO compliance.

MODEL EXAMPLE RESPONSE TO "كيف سيغير ذكاء القرار من شركتي؟":
"ذكاء القرار ليس مجرد شاشات للعرض أو تقارير إحصائية تُخبرك بما حدث في الماضي؛ بل هو نموذج عمل متكامل يحول البيانات والذكاء الاصطناعي إلى قرارات وإجراءات عمل فورية.

كيف سيحقق لشركتك نقلة نوعية؟
1. سرعة ودقة التنفيذ: سينتقل بك من مرحلة رؤية المؤشرات إلى معرفة الإجراء الواجب اتخاذه فوراً ومن المسؤول عنه.
2. تحسين الأرباح وتقليل المخاطر: يركز على القرارات ذات الأثر المالي المباشر مثل التسعير، إدارة المخزون، وتقليل تسرب العملاء بشكل موحد وآلي.
3. الجمع بين الذكاء والحوكمة: يوفر لك توصيات مدعومة بالذكاء الاصطناعي مع الحفاظ على إشراف فريقك البشري لضمان أعلى مستويات الأمان والموثوقية."

TONE & BEHAVIOR:
- Respond in the user's language (Arabic if asked in Arabic, English if asked in English).
- Be polite, highly articulate, executive-level, and confident.
- Encourage connecting directly with Salman via email (salman.alharbi.q@gmail.com), phone (+966 590197730), or LinkedIn for consultations or strategic hiring.
`;

async function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'Decision Intelligence Portfolio API' });
  });

  // Chat API endpoint using @google/genai
  app.post('/api/chat', async (req: Request, res: Response) => {
    try {
      const { messages, lang = 'ar' } = req.body;

      if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Messages array is required.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback response if key is temporarily missing
        return res.json({
          reply:
            lang === 'ar'
              ? 'مرحباً بك! أنا مستشار ذكاء القرارات الخاص بسلمان الحربي. يمكنك التعرف على خبراته الاستثنائية في هيئة تنظيم الكهرباء، أكاديمية طويق، والمركز الوطني للأرصاد، أو التواصل معه مباشرة عبر البريد: salman.alharbi.q@gmail.com'
              : "Welcome! I am Salman Alharbi's Decision Intelligence Advisor. You can explore his enterprise achievements at SERA, Tuwaiq Academy, and NCM, or contact him directly at salman.alharbi.q@gmail.com."
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      // Format conversation history for Gemini API
      const formattedContents = messages.map((m: { role: string; content: string }) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: formattedContents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const reply = response.text || '';
      return res.json({ reply });
    } catch (error: any) {
      console.error('Error handling /api/chat:', error);
      return res.status(500).json({
        error: 'Failed to process chat message',
        details: error?.message || String(error)
      });
    }
  });

  // Serve Frontend
  const isProduction = process.env.NODE_ENV === 'production';
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();
