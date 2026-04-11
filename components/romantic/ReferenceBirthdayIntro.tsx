"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Language = "en" | "ta";

type IntroCopy = {
  appLabel: string;
  introEyebrow: string;
  introTitle: string;
  introDescription?: string;
  introCardLabel: string;
  introCardText: string;
  introCardSubtext: string;
  promiseLabel: string;
  promiseValue: string;
  languageTamil: string;
  languageEnglish: string;
  openEnvelopeAria: string;
};

type IntroProps = {
  copy: IntroCopy;
  language: Language;
  onLanguageChange: (language: Language) => void;
  onOpen: () => void;
  isPlaying: boolean;
  onToggleAudio: () => void;
};

function fadeMotion(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.68, delay, ease: "easeOut" as const },
  };
}

function IntroLiveHearts() {
  const hearts = [
    { top: "18%", left: "10%", size: "text-lg", delay: "0s", duration: "3.4s" },
    { top: "24%", left: "20%", size: "text-xs", delay: "0.8s", duration: "4.2s" },
    { top: "32%", left: "12%", size: "text-sm", delay: "1.1s", duration: "3.8s" },
    { top: "20%", right: "11%", size: "text-lg", delay: "0.3s", duration: "3.6s" },
    { top: "30%", right: "17%", size: "text-xs", delay: "1.4s", duration: "4s" },
    { bottom: "22%", left: "9%", size: "text-sm", delay: "1.8s", duration: "3.7s" },
    { bottom: "14%", right: "18%", size: "text-xs", delay: "2.1s", duration: "4.1s" },
  ];

  return (
    <>
      {hearts.map((heart, index) => (
        <span
          key={index}
          className={`pointer-events-none absolute text-[#ff4f72] ${heart.size} live-heart`}
          style={{
            top: heart.top,
            left: heart.left,
            right: heart.right,
            bottom: heart.bottom,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          {"\u2665"}
        </span>
      ))}
    </>
  );
}

function IntroCardHearts() {
  const hearts = [
    { top: "18%", left: "8%", size: "text-sm", delay: "0s", duration: "3.4s" },
    { top: "26%", right: "10%", size: "text-xs", delay: "0.7s", duration: "4.1s" },
    { top: "53%", left: "10%", size: "text-sm", delay: "1.1s", duration: "3.6s" },
    { bottom: "18%", right: "9%", size: "text-xs", delay: "1.7s", duration: "4s" },
  ];

  return (
    <>
      {hearts.map((heart, index) => (
        <span
          key={index}
          className={`pointer-events-none absolute z-20 text-[#ff5d84] ${heart.size} live-heart`}
          style={{
            top: heart.top,
            left: heart.left,
            right: heart.right,
            bottom: heart.bottom,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          {"\u2665"}
        </span>
      ))}
    </>
  );
}

function RisingHearts() {
  const hearts = [
    { left: "14%", delay: "0s", duration: "5.2s", size: "text-sm" },
    { left: "28%", delay: "1.2s", duration: "6s", size: "text-xs" },
    { right: "22%", delay: "0.8s", duration: "5.8s", size: "text-sm" },
    { right: "12%", delay: "1.8s", duration: "6.2s", size: "text-xs" },
  ];

  return (
    <>
      {hearts.map((heart, index) => (
        <span
          key={index}
          className={`pointer-events-none absolute bottom-10 text-[#ff5d84] ${heart.size}`}
          style={{
            left: heart.left,
            right: heart.right,
            animationName: "riseHeart",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDuration: heart.duration,
            animationDelay: heart.delay,
          }}
        >
          {"\u2665"}
        </span>
      ))}
    </>
  );
}

function IntroClouds() {
  const clouds = [
    { top: "10%", left: "-1%", scale: 0.76, delay: "0s", opacity: 0.66 },
    { top: "16%", right: "7%", scale: 1.26, delay: "0.3s", opacity: 0.98 },
    { top: "31%", right: "4%", scale: 0.74, delay: "1.2s", opacity: 0.88 },
    { top: "41%", right: "7%", scale: 1.18, delay: "0.8s", opacity: 0.94 },
    { top: "60%", right: "2%", scale: 0.78, delay: "1.8s", opacity: 0.82 },
    { bottom: "22%", left: "-1%", scale: 0.92, delay: "1.4s", opacity: 0.72 },
    { bottom: "15%", right: "8%", scale: 0.82, delay: "1.6s", opacity: 0.84 },
  ];

  return (
    <>
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className="intro-cloud pointer-events-none absolute"
          style={{
            top: cloud.top,
            right: cloud.right,
            left: cloud.left,
            bottom: cloud.bottom,
            opacity: cloud.opacity,
            transform: `scale(${cloud.scale})`,
            animationDelay: cloud.delay,
          }}
        >
          <span className="intro-cloud-puff intro-cloud-main" />
          <span className="intro-cloud-puff intro-cloud-left" />
          <span className="intro-cloud-puff intro-cloud-right" />
          <span className="intro-cloud-puff intro-cloud-tail" />
        </div>
      ))}
    </>
  );
}

export function Header({
  language,
  onLanguageChange,
  copy,
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
  copy: IntroCopy;
}) {
  return (
    <motion.div className="relative z-10 mb-4 flex items-center justify-center pt-5" {...fadeMotion(0)}>
      <div className="flex items-center gap-1 rounded-full bg-white/88 p-1 shadow-[0_10px_24px_rgba(149,129,198,0.16)]">
        <button
          type="button"
          onClick={() => onLanguageChange("ta")}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            language === "ta" ? "bg-[linear-gradient(180deg,#f5d8ef,#eec4e4)] text-[#6e5f96]" : "text-[#9a8eb2]"
          }`}
        >
          {copy.languageTamil}
        </button>
        <button
          type="button"
          onClick={() => onLanguageChange("en")}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            language === "en" ? "bg-[linear-gradient(180deg,#7c71b4,#62578f)] text-white" : "text-[#9a8eb2]"
          }`}
        >
          {copy.languageEnglish}
        </button>
      </div>
      <div className="absolute right-0 shrink-0 rounded-full bg-[linear-gradient(180deg,#7f74b8,#655993)] px-2.5 py-1.5 text-[0.62rem] font-semibold text-white shadow-[0_10px_20px_rgba(110,102,170,0.22)] sm:px-3 sm:text-[0.65rem]">
        1/6
      </div>
    </motion.div>
  );
}

export function LetterCard({ copy }: { copy: IntroCopy }) {
  return (
    <motion.section
      className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/36 shadow-[0_18px_42px_rgba(163,149,201,0.16)] backdrop-blur-[18px]"
      {...fadeMotion(0.2)}
    >
      <div className="border-b border-white/65 bg-white/80 px-5 py-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#9fa9eb]">{copy.introCardLabel}</p>
      </div>
      <div className="bg-[linear-gradient(180deg,rgba(247,226,241,0.66)_0%,rgba(232,224,248,0.74)_62%,rgba(214,222,248,0.78)_100%)] px-5 pb-5 pt-6">
        <p className="max-w-[11ch] break-words text-[clamp(1.8rem,7vw,2.06rem)] font-bold leading-[1.04] tracking-[-0.04em] text-[#7e86e2] sm:max-w-[12ch]">{copy.introCardText}</p>
        <p className="mt-4 max-w-[22ch] text-[0.92rem] leading-6 text-[#8fa1ea] sm:max-w-[18ch] sm:text-sm sm:leading-7">{copy.introCardSubtext}</p>
      </div>
    </motion.section>
  );
}

export function EnvelopeCard({ onOpen, ariaLabel }: { onOpen: () => void; ariaLabel: string }) {
  const sparkleDots = [
    { left: "12%", top: "20%", delay: "0.2s", tone: "text-[#f3d58e]" },
    { right: "14%", top: "24%", delay: "0.9s", tone: "text-[#f3d58e]" },
    { left: "24%", bottom: "18%", delay: "1.2s", tone: "text-[#ff7d9f]" },
    { right: "18%", bottom: "22%", delay: "0.6s", tone: "text-[#ff7d9f]" },
    { right: "8%", bottom: "8%", delay: "1.6s", tone: "text-white/80" },
  ];

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onOpen}
      {...fadeMotion(0.34)}
      whileTap={{ scale: 0.985 }}
      whileHover={{ scale: 1.01 }}
      className="relative block aspect-[10/7] w-full overflow-hidden rounded-[2rem] sm:h-[15.4rem] sm:aspect-auto"
    >
      {sparkleDots.map((item, index) => (
        <span
          key={index}
          className={`pointer-events-none absolute z-10 text-[0.8rem] animate-[liveHeartFloat_2.8s_ease-in-out_infinite] ${item.tone}`}
          style={{ left: item.left, right: item.right, top: item.top, bottom: item.bottom, animationDelay: item.delay }}
        >
          {item.tone.includes("#ff") ? "\u2665" : "\u2726"}
        </span>
      ))}
      <Image
        src="/envelope-first-page.png"
        alt=""
        aria-hidden="true"
        width={1024}
        height={768}
        className="block h-full w-full object-cover"
      />
    </motion.button>
  );
}

export function PromiseCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.section
      className="relative rounded-[1.7rem] border border-white/70 bg-white/42 px-5 py-4 text-center shadow-[0_16px_36px_rgba(162,147,199,0.12)] backdrop-blur-[18px]"
      {...fadeMotion(0.46)}
    >
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#d48cab]">{label}</p>
      <p className="mt-2 text-sm leading-7 text-[#74688d]">{value}</p>
    </motion.section>
  );
}

export function ReferenceBirthdayIntro({ copy, language, onLanguageChange, onOpen, isPlaying, onToggleAudio }: IntroProps) {
  const stageCopy =
    language === "ta"
      ? {
          appLabel: "Happy Birthday My Dear Devil",
          introEyebrow: "11:11",
          introTitle: "உன் நினைவுகளால் நான் கட்டிய  இந்தச் சிறிய உலகத்திற்கு வா…இங்கே ஒவ்வொரு பக்கமும் உனக்காக எழுதப்பட்ட என் இதயத்தின் சத்தம்..",
          introDescription: "இங்கு நிறங்கள் மெதுவாக கலக்கின்றன. அதனால் இந்த முதல் பக்கம் இன்னும் இனிமையாகவும் மென்மையாகவும் காதலாகவும் தோன்றுகிறது.",
          introCardLabel: "என் அன்பின் கதை இங்கே தொடங்குகிறது…",
          introCardText: "இந்த 13.04.2026  விட, நீ என் வாழ்க்கையில் வந்த நாள் தான் எனக்கு மிக முக்கியமானது. இது வெறும் பிறந்தநாள் வாழ்த்து அல்ல, என் இதயத்தின் ஒவ்வொரு துடிப்பையும் உனக்காக சமர்ப்பிக்கும் கவிதை. ❤️ நம் காதலின் ஆரம்பத்தை இந்த வரிகளில் நீ உணர்வாய் என்று நினைக்கிறேன். ஒவ்வொரு முறை நீ இதைப் பார்க்கும் போதும், என் அன்பின் குரல் உனக்கு கேட்கும். உனக்காகவே சேமிக்கப்பட்ட என் காதலின் அழகான குட்டி உலகம் இது.",
          introCardSubtext: "இதயம்\Nநினைவுகள்\Nகாதல்\Nஅன்பு\Nஆசைகள்\Nமொழியாய் திகழ்கின்றன...",
          promiseLabel: "வாக்குறுதி",
          promiseValue: "இந்த உறையை ஒரு முறை தொட்டால், முழு காதல் கதை தொடங்கும்.",
        }
      : {
          appLabel: "Happy Birthday My Dear Devil",
          introEyebrow: "11:11",
          introTitle: "A little birthday universe, wrapped in softness and love.",
          introDescription: "The colors blend gently now, so the first screen feels softer, sweeter, and more romantic instead of sharply split.",
          introCardLabel: "Birthday letter",
          introCardText: "For 13.04, I did not want to send just a message. I wanted to create a gentle little world that feels warm, romantic, and unforgettable.",
          introCardSubtext: "Tap the envelope and let this birthday surprise unfold slowly.",
          promiseLabel: "Promise",
          promiseValue: "One tap on the envelope, and the whole love story begins.",
        };
  void stageCopy;

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[linear-gradient(180deg,#f6dff0_0%,#f2e0f2_18%,#e6e0f5_44%,#d5dcf6_74%,#bfd1f0_100%)] px-3 py-4 text-[#57446f] sm:px-5 sm:py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_14%,rgba(255,255,255,0.24),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,231,244,0.16),transparent_24%),radial-gradient(circle_at_78%_78%,rgba(197,220,255,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_38%,rgba(159,181,230,0.05)_100%)]" />
      <IntroLiveHearts />
      <RisingHearts />
      <motion.div
        className="relative mx-auto min-h-[calc(100svh-2rem)] w-full max-w-[30rem] rounded-[1.9rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,250,253,0.78)_0%,rgba(250,239,247,0.74)_36%,rgba(241,234,247,0.74)_62%,rgba(227,233,248,0.78)_100%)] px-4 pb-4 pt-3 shadow-[0_24px_84px_rgba(152,151,206,0.16)] backdrop-blur-[18px] sm:min-h-[calc(100svh-3rem)] sm:rounded-[2rem] sm:px-5 sm:pb-5"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[2rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.3),transparent_20%),radial-gradient(circle_at_82%_14%,rgba(255,233,245,0.24),transparent_18%),radial-gradient(circle_at_76%_82%,rgba(198,222,255,0.18),transparent_20%)]" />
          <IntroClouds />
          <IntroCardHearts />
        </div>
        <Header language={language} onLanguageChange={onLanguageChange} copy={copy} />
        <motion.div {...fadeMotion(0.1)} className="relative z-10 pb-3 pr-16">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#d48cab]">{copy.introEyebrow}</p>
          <p className="mt-1 text-[0.7rem] text-[#8b7f9d]">{copy.appLabel}</p>
          <button
            type="button"
            onClick={onToggleAudio}
            className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border-0 bg-white/88 p-2 pb-3 shadow-[0_8px_18px_rgba(110,102,170,0.14)]"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="6" y="5" width="4" height="14" rx="2" fill="#a86ad6"/><rect x="14" y="5" width="4" height="14" rx="2" fill="#a86ad6"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 5v14l11-7L7 5z" fill="#a86ad6"/></svg>
            )}
          </button>
        </motion.div>
        <motion.div {...fadeMotion(0.14)} className="relative z-10 mb-6 mt-2 flex gap-2">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} className={`h-1.5 flex-1 rounded-full ${index === 0 ? "bg-[linear-gradient(90deg,#f08db0,#f0b0c4)]" : "bg-white/75"}`} />
          ))}
        </motion.div>
        <motion.h1 {...fadeMotion(0.18)} className="relative z-10 max-w-[10ch] break-words text-[clamp(1.75rem,5.2vw,2.4rem)] font-bold leading-[1.02] tracking-[-0.05em] text-[#5b5078]">
          {copy.introTitle}
        </motion.h1>
        <div className="mt-6 space-y-5">
          <LetterCard copy={copy} />
          <EnvelopeCard onOpen={onOpen} ariaLabel={copy.openEnvelopeAria} />
          <PromiseCard label={copy.promiseLabel} value={copy.promiseValue} />
        </div>
      </motion.div>
    </div>
  );
}
