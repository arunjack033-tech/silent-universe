"use client";

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
    <motion.div className="relative z-10 mb-6 flex items-center justify-center" {...fadeMotion(0)}>
      <div className="flex items-center rounded-full bg-white/88 p-1 shadow-[0_12px_24px_rgba(160,146,199,0.16)] backdrop-blur-xl">
        <button
          type="button"
          onClick={() => onLanguageChange("ta")}
          className={`rounded-full px-3 py-1.5 text-[0.65rem] font-semibold transition ${
            language === "ta" ? "bg-[linear-gradient(180deg,#f6dff0_0%,#edcfe6_100%)] text-[#766795]" : "text-[#7e7199]"
          }`}
        >
          {copy.languageTamil}
        </button>
        <button
          type="button"
          onClick={() => onLanguageChange("en")}
          className={`rounded-full px-3 py-1.5 text-[0.65rem] font-semibold transition ${
            language === "en" ? "bg-[linear-gradient(180deg,#7d73b7_0%,#64598f_100%)] text-white" : "text-[#7e7199]"
          }`}
        >
          {copy.languageEnglish}
        </button>
      </div>
      <div className="absolute right-0 top-0 rounded-full bg-[linear-gradient(180deg,#7f74b8,#655993)] px-3 py-1.5 text-[0.65rem] font-semibold text-white shadow-[0_10px_20px_rgba(110,102,170,0.22)]">
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
        <p className="max-w-[12ch] text-[2.06rem] font-bold leading-[1.06] tracking-[-0.04em] text-[#7e86e2]">{copy.introCardText}</p>
        <p className="mt-4 max-w-[18ch] text-sm leading-7 text-[#8fa1ea]">{copy.introCardSubtext}</p>
      </div>
    </motion.section>
  );
}

export function EnvelopeCard({ onOpen, ariaLabel }: { onOpen: () => void; ariaLabel: string }) {
  const hearts = [
    { left: "13%", top: "38%" },
    { left: "20%", bottom: "24%" },
    { right: "16%", top: "40%" },
    { right: "20%", bottom: "26%" },
  ];

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onOpen}
      {...fadeMotion(0.34)}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.01 }}
      className="relative h-[15.4rem] w-full overflow-hidden rounded-[2rem] border border-white/65 bg-[linear-gradient(180deg,rgba(251,233,242,0.8)_0%,rgba(238,226,247,0.84)_54%,rgba(219,225,247,0.86)_100%)] shadow-[0_18px_40px_rgba(165,149,202,0.16)] backdrop-blur-[18px]"
    >
      <div className="absolute left-1/2 top-4 h-[2px] w-28 -translate-x-1/2 rounded-full bg-white/65" />
      {hearts.map((heart, index) => (
        <span
          key={index}
          className="absolute text-sm text-[#ff6689]"
          style={{ left: heart.left, right: heart.right, top: heart.top, bottom: heart.bottom }}
        >
          {"\u2665"}
        </span>
      ))}
      <div className="absolute left-1/2 top-1/2 flex h-[5.7rem] w-[7.4rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.2rem]">
        <div className="absolute inset-0 rounded-[1.3rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.72),rgba(255,255,255,0.06)_72%)] blur-md" />
        <div className="relative h-[4.35rem] w-[6.1rem] overflow-hidden rounded-[0.7rem] bg-[linear-gradient(180deg,#fffdfd_0%,#f4edfc_100%)] shadow-[0_12px_26px_rgba(178,159,214,0.24)]">
          <div className="absolute inset-0 rounded-[0.7rem] border border-[rgba(232,225,245,0.9)]" />
          <div className="absolute inset-x-0 bottom-0 h-[54%] bg-[linear-gradient(180deg,rgba(245,238,250,0.94)_0%,rgba(229,214,244,0.96)_100%)]" />
          <div className="absolute left-0 top-[51%] h-[49%] w-1/2 [clip-path:polygon(0_100%,100%_0,100%_100%)] bg-[linear-gradient(180deg,rgba(238,227,248,0.92)_0%,rgba(225,208,241,0.98)_100%)]" />
          <div className="absolute right-0 top-[51%] h-[49%] w-1/2 [clip-path:polygon(0_0,100%_100%,0_100%)] bg-[linear-gradient(180deg,rgba(238,227,248,0.92)_0%,rgba(225,208,241,0.98)_100%)]" />
          <div className="absolute left-0 right-0 top-0 h-[53%] [clip-path:polygon(0_0,50%_78%,100%_0)] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(241,232,251,0.98)_100%)]" />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,transparent_49.2%,rgba(201,186,226,0.36)_49.7%,transparent_50.2%)]" />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(225deg,transparent_49.2%,rgba(201,186,226,0.36)_49.7%,transparent_50.2%)]" />
        </div>
      </div>
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

export function ReferenceBirthdayIntro({ copy, language, onLanguageChange, onOpen }: IntroProps) {
  const stageCopy =
    language === "ta"
      ? {
          appLabel: "Happy Birthday My Dear Devil",
          introEyebrow: "11:11",
          introTitle: "மென்மையும் காதலும் கலந்த ஒரு சிறிய பிறந்தநாள் உலகம்.",
          introDescription: "இங்கு நிறங்கள் மெதுவாக கலக்கின்றன. அதனால் இந்த முதல் பக்கம் இன்னும் இனிமையாகவும் மென்மையாகவும் காதலாகவும் தோன்றுகிறது.",
          introCardLabel: "பிறந்தநாள் கடிதம்",
          introCardText: "13.04க்காக நான் ஒரு சாதாரண செய்தி அனுப்பவே நினைக்கவில்லை. அதற்கு பதிலாக இதமாகவும் காதலாகவும் மனதில் நிற்கும் ஒரு சிறிய உலகத்தை உருவாக்க நினைத்தேன்.",
          introCardSubtext: "இந்த உறையைத் தொட்டு பாருங்கள். பிறந்தநாள் ஆச்சரியம் மெதுவாக திறக்கட்டும்.",
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

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f4dcef_0%,#efdcef_28%,#e8def1_58%,#cfd7f0_100%)] px-4 py-3 text-[#57446f]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_36%,rgba(160,170,224,0.06)_100%)]" />
      <IntroLiveHearts />
      <RisingHearts />
      <motion.div
        className="relative mx-auto min-h-[calc(100vh-1.5rem)] w-full max-w-[24.375rem] rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,251,253,0.8)_0%,rgba(251,240,247,0.78)_38%,rgba(241,233,247,0.76)_74%,rgba(230,234,248,0.78)_100%)] px-4 pb-4 pt-3 shadow-[0_22px_80px_rgba(157,145,202,0.16)] backdrop-blur-[18px]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <Header language={language} onLanguageChange={onLanguageChange} copy={copy} />
        <motion.div {...fadeMotion(0.1)} className="relative z-10">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#d48cab]">{stageCopy.introEyebrow}</p>
          <p className="mt-1 text-[0.7rem] text-[#8b7f9d]">{stageCopy.appLabel}</p>
        </motion.div>
        <motion.div {...fadeMotion(0.14)} className="relative z-10 mb-6 mt-2 flex gap-2">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} className={`h-1.5 flex-1 rounded-full ${index === 0 ? "bg-[linear-gradient(90deg,#f08db0,#f0b0c4)]" : "bg-white/75"}`} />
          ))}
        </motion.div>
        <motion.h1 {...fadeMotion(0.18)} className="relative z-10 max-w-[8.5ch] text-[2.22rem] font-bold leading-[1.02] tracking-[-0.05em] text-[#5b5078]">
          {stageCopy.introTitle}
        </motion.h1>
        <div className="mt-6 space-y-5">
          <LetterCard copy={{ ...copy, introCardLabel: stageCopy.introCardLabel, introCardText: stageCopy.introCardText, introCardSubtext: stageCopy.introCardSubtext }} />
          <EnvelopeCard onOpen={onOpen} ariaLabel={copy.openEnvelopeAria} />
          <PromiseCard label={stageCopy.promiseLabel} value={stageCopy.promiseValue} />
        </div>
      </motion.div>
    </div>
  );
}
