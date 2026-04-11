"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ReferenceBirthdayIntro } from "@/components/romantic/ReferenceBirthdayIntro";

type HeartConfig = { id: number; left: number; size: number; duration: number; delay: number };
type Language = "en" | "ta";
type Copy = {
  appLabel: string; back: string; introEyebrow: string; introTitle: string; introDescription?: string;
  introCardLabel: string; introCardText: string; introCardSubtext: string; promiseLabel: string; promiseValue: string;
  letterEyebrow: string; letterTitle: string; letterDescription: string; letterPrivate: string; letterTo: string; letterText: string;
  fromPlaceholder: string; linePlaceholder: string; previewPrefix: string; previewMiddle: string; previewFallbackName: string; previewFallbackLine: string;
  continueLove: string; envelopeEyebrow: string; envelopeTitle: string; envelopeDescription: string; hiddenNote: string; hiddenText: string;
  tapToOpen: string; openedWithLove: string; envelopeHelper: string; envelopeFirst: string; nextMemory: string;
  exploreEyebrow: string; exploreTitle: string; exploreDescription: string; loveBadge: string; upgradePath: string; upgradeText: string; revealSurprise: string;
  giftEyebrow: string; giftTitle: string; giftDescription: string; mysteryBox: string; mysteryText: string; openFinal: string;
  finalEyebrow: string; finalTitle: string; finalDescription: string; closingNote: string; closingText1: string; closingText2: string; fromLabel: string; fromFallback: string; replay: string;
  memoryLabel: string; memoryItems: string[]; memoryText: string; coupons: string[]; languageTamil: string; languageEnglish: string; openEnvelopeAria: string; openEnvelopeNoteAria: string;
};

const BIRTHDAY_DATE = "11:11";
const HEART_ICON = "\u2665";
const LOVE_ICON = "\u2764\uFE0F";
const TOTAL_STEPS = 6;

function getLongLetter(language: Language, fromValue: string, loveValue: string) {
  if (language === "ta") {
    return [
      "உன் பிறந்தநாளுக்காக ஒரு சாதாரண வாழ்த்து மட்டும் சொல்லணும்னு எனக்கு தோணல. நம்ம காதலை மெதுவா உணர வைக்கும் ஒரு சிறிய உலகம் உனக்காக உருவாக்கணும்னு தான் நினைத்தேன்.",
      "நீ என் வாழ்க்கையில் வந்த பிறகு சில விஷயங்கள் மாறல, முழு வாழ்க்கைதான் மென்மையாயிற்று. என் நாட்கள் அமைதியா ஆனது, என் இதயம் நிம்மதியா ஆனது, நான் நினைக்காத அளவுக்கு காதல் அழகா ஆனது.",
      "நீ சிரிக்கிற போது எனக்கு உலகமே லேசா இருக்கு. நீ பேசுற போது என் மனசு அமைதியா இருக்கு. நீ அருகில் இருந்தா சாதாரண நாள்கூட ஒரு நினைவாக மாறிடுது.",
      loveValue || "நீ என் வாழ்க்கையை இன்னும் இனிமையா, இன்னும் அழகா, இன்னும் அர்த்தமுள்ளதா மாற்றுற.",
      `எப்போதும் அன்போட, ${fromValue || "உன்னை ஆழமா காதலிக்கிறவன்"}.`,
    ];
  }

  return [
    "For your birthday, I did not want to send only a wish. I wanted to open a little space filled with warmth, softness, and the kind of love that stays in the heart for a long time.",
    "Since you came into my life, nothing has felt ordinary in the same way. My days feel gentler, my thoughts feel calmer, and even silence feels beautiful when it somehow carries you in it.",
    "Your smile has become one of my safest places. Your presence makes heavy days lighter, and the smallest moment with you somehow turns into something worth keeping forever.",
    loveValue || "You make my life feel softer, brighter, and much more beautiful than I ever expected.",
    `Always yours, ${fromValue || "someone who loves you deeply"}.`,
  ];
}

function getScratchRewards(language: Language) {
  return language === "ta"
    ? ["லவ் கிஃப்ட்", "சேலை", "ஹேர் கிளிப்", "நெக் செயின்", "ப்யூட்டி கிட்ட்", "அணைப்பு", "முத்தம்", "காதல் கடிதம்"]
    : ["Love Gift", "Saree", "Hair Clip", "Neck Chain", "Face kit", "Hug", "Kiss", "Love Letter"];
}

function getPoemLetter(language: Language, fromValue: string, loveValue: string) {
  if (language === "ta") {
    return [
      "என் தேவதைக்கு... ஒரு அழகான கவிதை...",
      "என் வாழ்க்கையின் மிக அழகான நாளில், உன் புன்னகையின் மழையில் நனைந்தேன்.",
      "நீ என் உலகை நிறைக்கும் ஒளியாக, என் இருளை நீக்கும் நிலவாக, என் உயிரின் ஒவ்வொரு துடிப்பிலும் வாழும் நினைவாக மாறிவிட்டாய்.",
      "என் உள்ளம் முழுவதும் பார்த்த அந்த நொடி, என் இதயம் உனக்காகவே துடிக்கத் தொடங்கியது.",
      "இந்த சிறிய உலகில் நீ இல்லையெனில், என் வாழ்க்கைக்கு அர்த்தமே இல்லை. உனக்காக துடிக்கும் என் இதயம் என் இதயத்தின் ஒரு பகுதி.",
      "நம் காதலின் பயணத்தில் இது ஒரு அழகான தொடக்கம் மட்டுமே. இன்னும் பல நினைவுகளை உன்னுடன் சேர்ந்து உருவாக்க காத்திருக்கிறேன்.",
      loveValue || "நீ என் வாழ்க்கையை இன்னும் அழகாக மாற்றுகிறாய்.",
      `- ${fromValue || "உன்னை காதலாக நேசிக்கும் ஒருவன்"}.`,
    ];
  }

  return [
    "To my angel... A beautiful poem...",
    "On the most beautiful day of my life, I was drenched in the rain of your smile.",
    "You became the light that fills my world, the moon that removes my darkness, a memory that lives in every heartbeat of mine.",
    "In that moment when my heart saw you completely, it began to beat only for you.",
    "In this small world, without you, my life has no meaning. The heart that beats for you is a part of my very soul.",
    "This is just a beautiful beginning in the journey of our love. I am waiting to create many more memories with you.",
    loveValue || "You make my life feel softer, brighter, and more beautiful.",
    `- ${fromValue || "Someone who loves you deeply"}.`,
  ];
}
void getLongLetter;

const copy: Record<Language, Copy> = {
  en: {
    appLabel: "Happy Birthday My Dear Devil",
    back: "Back",
    introEyebrow: BIRTHDAY_DATE,
    introTitle: "I took the love in my heart and gently wove it into words… to create a little world, made just for you.",
    
    introCardLabel: "A letter from my universe",
    introCardText: "This… is a small little space made just for you. A tiny piece of my world, created with all the love I carry for you. You are not just someone in my life… you are the happiness I never knew I was missing.",
    introCardSubtext: "Tap the envelope… and step into something I made just for you.",
    promiseLabel: "A small promise",
    promiseValue: "One gentle tap… and you’ll step into a little universe I created just for you, filled with love, memories, and everything I feel for you.",
    letterEyebrow: "Love letter",
    letterTitle: "The letter opens, and your heart finally starts speaking.",
    letterDescription: "This page now feels more intimate, more poetic, and easier to personalize later with your own words.",
    letterPrivate: "Private",
    letterTo: "To the one who makes my world softer",
    letterText: "There are people who simply come into life… and then there are people who quietly change everything. You are that feeling for me. The calm in my chaos, the warmth in my quiet moments, and the peace I never knew I needed. You are my comfort, my happiness, my little healing… my medicine without even trying. And somewhere, without me even realizing it, you became my everything.",
    fromPlaceholder: "from: your name",
    linePlaceholder: "write one soft love line",
    previewPrefix: "Preview:",
    previewMiddle: "wrote,",
    previewFallbackName: "Your name",
    previewFallbackLine: "You make my life feel lighter and more beautiful.",
    continueLove: `Continue with love ${LOVE_ICON}`,
    envelopeEyebrow: "Open me",
    envelopeTitle: "Some feelings deserve one more envelope before they are fully revealed.",
    envelopeDescription: "This keeps the classic envelope moment alive, but now it feels more polished, dreamy, and gift-like on mobile.",
    hiddenNote: "Hidden note",
    hiddenText: "Your love brings peace to my mind, warmth to my days, and a kind of happiness I never want to lose.",
    tapToOpen: "Tap to open",
    openedWithLove: "Opened with love",
    envelopeHelper: "The reveal pauses here for a moment, like a breath before the next soft memory opens.",
    envelopeFirst: "Open the envelope first",
    nextMemory: `Next memory ${LOVE_ICON}`,
    exploreEyebrow: "Love explore",
    exploreTitle: "A few little places where my love for you keeps blooming.",
    exploreDescription: "This section feels less like reading and more like walking through tiny pieces of what makes her special to you.",
    loveBadge: "Love",
    upgradePath: "Next upgrade",
    upgradeText: "We can later turn these into swipe cards with real photos and personal memories.",
    revealSurprise: "Reveal the surprise",
    giftEyebrow: "Gift reveal",
    giftTitle: "The surprise now feels softer, prettier, and a little more magical.",
    giftDescription: "I kept the sweet coupon idea, but made the reveal feel more premium and more in tune with the birthday-love theme.",
    mysteryBox: "Mystery box",
    mysteryText: "The real surprise gift can be placed here later. Right now, this card builds anticipation without spoiling the moment too early.",
    openFinal: "Open the final page",
    finalEyebrow: "Final page",
    finalTitle: "Happy Birthday, my love. You deserve tenderness, joy, and beautiful surprises.",
    finalDescription: "The ending now lands more softly, with a calmer emotional finish that still feels personal.",
    closingNote: "Closing note",
    closingText1: "Thank you for making my world gentler, brighter, and more alive simply by being in it.",
    closingText2: "I hope this birthday surrounds you with peace, laughter, affection, and the kind of love that lingers long after the day is over.",
    fromLabel: "From",
    fromFallback: "Someone who loves you deeply",
    replay: "Replay the experience",
    memoryLabel: "Memory",
    memoryItems: ["The calm your presence brings into even my busiest days", "The care hidden inside your smallest words and gestures", "The way ordinary moments become special when you are in them"],
    memoryText: "Later this can become a real memory, a photo, or a tiny story from your journey together.",
    coupons: ["Movie Night", "Dinner Date", "Long Drive", "Secret Gift"],
    languageTamil: "Tamil",
    languageEnglish: "English",
    openEnvelopeAria: "Open the envelope",
    openEnvelopeNoteAria: "Open the envelope note",
  },
  ta: {
    appLabel: "ஹாப்பி பர்த்டே என் குட்டி பிசாசு",
    back: "பின்",
    introEyebrow: BIRTHDAY_DATE,
    introTitle: "என் இதயத்தில் இருக்கும் காதலை வார்த்தைகளாக நெய்து… உனக்காக மட்டும் ஒரு சிறிய உலகம் நான் உருவாக்கியிருக்கேன்.",
    
    introCardLabel: "என் அன்பின் கதை இங்கே தொடங்குகிறது…",
    introCardText: "இது… உனக்காக மட்டும் உருவாக்கப்பட்ட ஒரு சிறிய இடம். என் உலகத்தின் ஒரு மென்மையான பகுதி… நான் உன்னுக்காக வைத்திருக்கும் எல்லா காதலாலும் உருவானது. நீ என் வாழ்க்கையில் ஒரு மனிதர் மட்டும் இல்லை… நான் இழந்திருந்த மகிழ்ச்சியை மீண்டும் உணர வைத்த உணர்வு நீ தான்.",
    introCardSubtext: "இந்த உறையை மெதுவாகத் தொடு… நான் உனக்காக உருவாக்கிய ஒரு உலகத்துக்குள் நுழை.",
    promiseLabel: "ஒரு சிறிய வாக்குறுதி",
    promiseValue: "ஒரு மென்மையான தொடுதல்… நீ உனக்காக நான் உருவாக்கிய ஒரு சிறிய உலகத்துக்குள் நுழைவாய்… அதில் என் காதல், நினைவுகள், உணர்வுகள் அனைத்தும் இருக்கும்.",
    letterEyebrow: "காதல் கடிதம்",
    letterTitle: "கடிதம் திறக்குது, இதயத்திலிருந்த வார்த்தைகள் வடிவம் பெற ஆரம்பிக்குது.",
    letterDescription: "இந்த page இப்போ இன்னும் personal feel கொடுக்குது. பிறகு இதை உன் உண்மையான words-ஆ easy-ஆ customize பண்ணலாம்.",
    letterPrivate: "தனிப்பட்டது",
    letterTo: "என் உலகத்தை மென்மையாக்கும் அவளுக்கு",
    letterText: "நீ வந்த பிறகு… என் உலகம் அழகாக மாறிடுச்சு. சாதாரண நாள்கள்கூட  அழகான நினைவுகளா மாத்திட.  நீ என் மகிழ்ச்சி… நீ எனக்கு எல்லாமே ஆகிட்டே. ❤️",
    fromPlaceholder: "from: உன் பெயர்",
    linePlaceholder: "ஒரு மென்மையான காதல் வரி எழுது",
    previewPrefix: "முன்னோட்டம்:",
    previewMiddle: "என்று எழுதியிருக்கிறார்,",
    previewFallbackName: "உன் பெயர்",
    previewFallbackLine: "நீ என் வாழ்க்கையை இன்னும் அழகாக மாற்றுற.",
    continueLove: `காதலோடு தொடரு ${LOVE_ICON}`,
    envelopeEyebrow: "திறந்து பார்",
    envelopeTitle: "சில உணர்வுகள் முழுசாக வெளிவர இன்னொரு envelope தேவைப்படுது.",
    envelopeDescription: "பழைய envelope moment-ஐ வைத்தே, mobile-க்கு இன்னும் dreamy-ஆவும் sweet-ஆவும் மாற்றினேன்.",
    hiddenNote: "ரகசிய குறிப்பு",
    hiddenText: "உன் காதல் என் மனதுக்கு அமைதி, என் நாள்களுக்கு வெப்பம், நான் இழக்க விரும்பாத ஒரு சந்தோஷம் எல்லாம் கொடுத்தது.",
    tapToOpen: "திறக்க touch பண்ணு",
    openedWithLove: "காதலோடு திறந்துவிட்டாய்",
    envelopeHelper: "அடுத்த நினைவுக்கு முன்னாடி ஒரு மென்மையான pause மாதிரி இந்த reveal அமைந்து இருக்கும்.",
    envelopeFirst: "முதலில் envelope திறக்கவும்",
    nextMemory: `அடுத்த நினைவு ${LOVE_ICON}`,
    exploreEyebrow: "காதல் பயணம்",
    exploreTitle: "உன்னை நான் இன்னும் இன்னும் காதலிக்க காரணமான சில சின்ன இடங்கள்.",
    exploreDescription: "இந்த section படிக்கிற மாதிரி இல்லாமல், அவளை special ஆக்கும் tiny feelings-ஐ explore பண்ணுற மாதிரி இருக்கும்.",
    loveBadge: "காதல்",
    upgradePath: "அடுத்த மேம்பாடு",
    upgradeText: "பிறகு இதை real photos, swipe cards, personal memories உடன் இன்னும் அழகாக்கலாம்.",
    revealSurprise: "சர்ப்ரைஸை திற",
    giftEyebrow: "பரிசு reveal",
    giftTitle: "இந்த surprise section இப்போ இன்னும் soft-ஆவும் pretty-ஆவும் magical-ஆவும் feel ஆகுது.",
    giftDescription: "பழைய coupon idea-ஐ வைத்தே, birthday-love theme-க்கு பொருந்தும் premium reveal feel கொடுத்தேன்.",
    mysteryBox: "ரகசிய பெட்டி",
    mysteryText: "உண்மையான surprise gift-ஐ பிறகு இங்கே வைக்கலாம். இப்போக்கு இது suspense-ஐ build பண்ணி excitement-ஐ வைத்திருக்கும்.",
    openFinal: "கடைசி பக்கத்தை திற",
    finalEyebrow: "கடைசி பக்கம்",
    finalTitle: "இனிய பிறந்தநாள் வாழ்த்துகள் என் காதலே. நீ மென்மை, சந்தோஷம், அழகான சர்ப்ரைஸ்கள் எல்லாவற்றிற்கும் தகுதியானவள்.",
    finalDescription: "Ending இப்போ இன்னும் soft-ஆ land ஆகும் மாதிரி refine பண்ணியிருக்கேன். personal feelவும் அதில் இருக்கும்.",
    closingNote: "முடிவு குறிப்பு",
    closingText1: "என் உலகத்தை மென்மையாகவும் பிரகாசமாகவும் உயிரோடு இருக்குமாறும் மாற்றியது நீயே. அதற்காக நன்றி.",
    closingText2: "இந்த பிறந்தநாள் உன்னை அமைதி, சிரிப்பு, அன்பு, நாள் முடிந்த பின்னும் மனதில் நீளும் காதல் எல்லாம் சுற்றி இருக்கணும் என்று நான் விரும்புகிறேன்.",
    fromLabel: "அனுப்புவது",
    fromFallback: "உன்னை ஆழமாக காதலிக்கும் ஒருவர்",
    replay: "மீண்டும் பாரு",
    memoryLabel: "நினைவு",
    memoryItems: ["என் busiest days-ல கூட நீ கொடுக்கும் அமைதி", "உன் சின்ன வார்த்தைகளுக்குள் இருக்கும் அக்கறை", "சாதாரண தருணங்கள்கூட உன்னுடன் இருக்கும்போது special ஆகி விடுவது"],
    memoryText: "பிறகு இதை ஒரு real memory-ஆ, photo-ஆ, அல்லது உங்கள் இருவரின் tiny story-ஆ மாற்றலாம்.",
    coupons: ["Movie Night", "Dinner Date", "Long Drive", "Secret Gift"],
    languageTamil: "தமிழ்",
    languageEnglish: "ஆங்கிலம்",
    openEnvelopeAria: "உறையை திற",
    openEnvelopeNoteAria: "உறை குறிப்பை திற",
  },
};

const pureTamilCopy: Copy = {
  appLabel: "ஹாப்பி பர்த்டே என் குட்டி பிசாசு",
  back: "பின்",
  introEyebrow: BIRTHDAY_DATE,
  introTitle: "உன் நினைவுகளால் நான் கட்டிய  இந்தச் சிறிய உலகத்திற்கு வா…இங்கே ஒவ்வொரு பக்கமும் உனக்காக எழுதப்பட்ட என் இதயத்தின் சத்தம்..",
  introDescription: "இங்கு நிறங்கள் மெதுவாக கலக்கின்றன. அதனால் முதல் பக்கம் இன்னும் இனிமையாகவும் மென்மையாகவும் காதலாகவும் தோன்றுகிறது.",
  introCardLabel: "என் அன்பின் கதை இங்கே தொடங்குகிறது…",
  introCardText: "இந்த 13.04.2026  விட, நீ என் வாழ்க்கையில் வந்த நாள் தான் எனக்கு மிக முக்கியமானது. இது வெறும் பிறந்தநாள் வாழ்த்து அல்ல, என் இதயத்தின் ஒவ்வொரு துடிப்பையும் உனக்காக சமர்ப்பிக்கும் கவிதை. ❤️ நம் காதலின் ஆரம்பத்தை இந்த வரிகளில் நீ உணர்வாய் என்று நினைக்கிறேன். ஒவ்வொரு முறை நீ இதைப் பார்க்கும் போதும், என் அன்பின் குரல் உனக்கு கேட்கும். உனக்காகவே சேமிக்கப்பட்ட என் காதலின் அழகான குட்டி உலகம் இது.",
  introCardSubtext: "இதயம்\nநினைவுகள்\nகாதல்\nஅன்பு\nஆசைகள்\nமொழியாய் திகழ்கின்றன...",
  promiseLabel: "வாக்குறுதி",
  promiseValue: "இந்த உறையை ஒரு முறை தொட்டால், முழு காதல் கதை தொடங்கும்.",
  letterEyebrow: "காதல் கடிதம்",
  letterTitle: "நம் காதலின் அடுத்த பக்கம்",
  letterDescription: "இந்தப் பக்கத்தில் உனக்காக இன்னும் தனிப்பட்ட சொற்களை நாம்பிறகு சேர்க்கலாம்.",
  letterPrivate: "தனிப்பட்டது",
  letterTo: "அன்புடன்...",
  letterText: "என் மௌனம் பேசும் மொழியும், என் விழிகள் சொல்லும் கவிதையும், உன் இதயம் மட்டும் உணரும் ரகசியம்.",
  fromPlaceholder: "அனுப்புபவர் பெயர்",
  linePlaceholder: "ஒரு மென்மையான காதல் வரியை எழுதுங்கள்",
  previewPrefix: "முன்னோட்டம்:",
  previewMiddle: "என்று எழுதியுள்ளார்,",
  previewFallbackName: "உன் பெயர்",
  previewFallbackLine: "நீ என் வாழ்கையை இன்னும் அழகாக மாற்றுகிறாய்.",
  continueLove: `காதலுடன் தொடருங்கள் ${LOVE_ICON}`,
  envelopeEyebrow: "திறந்து பார்",
  envelopeTitle: "சில உணர்வுகள் முழுமையாக வெளிவர இன்னொரு உறை தேவைப்படுகிறது.",
  envelopeDescription: "இந்தப் பகுதி பழைய உறை தருணத்தை அப்படியே வைத்துக்கொண்டு இன்னும் இனிமையாகத் திறக்கிறது.",
  hiddenNote: "ரகசிய குறிப்பு",
  hiddenText: "உன் காதல் என் மனதிற்கு அமைதியும், என் நாள்களுக்கு இதமுமாக இருக்கிறது.",
  tapToOpen: "திறக்க தொட்டு பார்",
  openedWithLove: "காதலுடன் திறந்தது",
  envelopeHelper: "அடுத்த நினைவிற்கு முன் வரும் மென்மையான இடைவேளை போல இந்தத் திறப்பு அமைந்திருக்கிறது.",
  envelopeFirst: "முதலில் உறையைத் திற",
  nextMemory: `அடுத்த நினைவு ${LOVE_ICON}`,
  exploreEyebrow: "காதல் பயணம்",
  exploreTitle: "நான் உன்னை இன்னும் அதிகமாக நேசிக்கச் செய்யும் சில சிறு இடங்கள்.",
  exploreDescription: "இந்தப் பகுதி வாசிப்பதற்காக மட்டும் இல்லாமல், நம் நினைவுகளைத் தொட்டுப் பார்க்கும் ஒரு சிறிய நடைபயணம் போல இருக்கும்.",
  loveBadge: "காதல்",
  upgradePath: "அடுத்த மேம்பாடு",
  upgradeText: "பிறகு இதை நம் உண்மையான புகைப்படங்களும் நினைவுகளும் சேர்த்து இன்னும் அழகாக மாற்றலாம்.",
  revealSurprise: "ஆச்சரியத்தைத் திற",
  giftEyebrow: "பரிசு திறப்பு",
  giftTitle: "இந்த ஆச்சரிய பகுதி இப்போது இன்னும் மென்மையாகவும் அழகாகவும் தெரிகிறது.",
  giftDescription: "இந்த பரிசு பகுதியை பிறந்தநாள் காதல் உணர்வுக்கு பொருத்தமாக வைத்திருக்கிறேன்.",
  mysteryBox: "ரகசிய பெட்டி",
  mysteryText: "உண்மையான பரிசை பிறகு இங்கே சேர்க்கலாம். இப்போது இது ஆவலை மெதுவாக உயர்த்திக்கொண்டு செல்லும்.",
  openFinal: "கடைசி பக்கத்தைத் திற",
  finalEyebrow: "கடைசி பக்கம்",
  finalTitle: "இனிய பிறந்தநாள் வாழ்த்துகள் என் காதலே. உனக்காக இந்த மென்மையான சிறு உலகம்.",
  finalDescription: "இது அமைதியான, இனிமையான, மனதை வருடும் ஒரு நிறைவு தருணம்.",
  closingNote: "முடிவு குறிப்பு",
  closingText1: "என் உலகத்தை மென்மையாகவும் ஒளிவிட்டதாகவும் மாற்றியது நீ தான்.",
  closingText2: "இந்தப் பிறந்தநாள் உன்னை அமைதி, சிரிப்பு, அன்பு, நீண்ட நாட்கள் மனதில் நிற்கும் நினைவுகள் எல்லாவற்றாலும் சுற்றிக்கொள்ள வேண்டும்.",
  fromLabel: "அனுப்புபவர்",
  fromFallback: "உன்னை ஆழமாக நேசிக்கும் ஒருவர்",
  replay: "மீண்டும் பாருங்கள்",
  memoryLabel: "நினைவு",
  memoryItems: [
    "என் பரபரப்பான நாட்களிலும் நீ கொடுக்கும் அமைதி",
    "உன் சிறிய சொற்களுக்குள் இருக்கும் அக்கறை",
    "சாதாரண தருணங்களைக் கூட சிறப்பாக மாற்றும் உன் இருப்பு",
  ],
  memoryText: "பிறகு இதை நம் உண்மையான நினைவுகள், புகைப்படங்கள், சிறு கதைகள் ஆகியவையாக மாற்றலாம்.",
  coupons: ["திரைப்பட இரவு", "இரவு உணவு சந்திப்பு", "நீண்ட பயணம்", "ரகசிய பரிசு"],
  languageTamil: "தமிழ்",
  languageEnglish: "English",
  openEnvelopeAria: "உறையைத் திற",
  openEnvelopeNoteAria: "உறை குறிப்பைத் திற",
};

function getActiveCopy(language: Language) {
  return language === "ta" ? pureTamilCopy : copy.en;
}

function createHearts(count: number): HeartConfig[] {
  return Array.from({ length: count }, (_, index) => ({ id: index, left: Math.random() * 100, size: 14 + Math.random() * 18, duration: 9 + Math.random() * 6, delay: Math.random() * 5 }));
}

function BackgroundHearts() {
  const [hearts] = useState<HeartConfig[]>(() => createHearts(24));
  return <div className="pointer-events-none fixed inset-0 overflow-hidden">{hearts.map((heart) => <span key={heart.id} className="rain-heart text-[#ff6b7f]/85" style={{ left: `${heart.left}%`, fontSize: `${heart.size}px`, animationDuration: `${heart.duration}s`, animationDelay: `${heart.delay}s` }}>{HEART_ICON}</span>)}</div>;
}

function IntroLiveHearts() {
  const hearts = [
    { top: "18%", left: "10%", size: "text-lg", delay: "0s", duration: "3.4s" },
    { top: "24%", left: "20%", size: "text-xs", delay: "0.8s", duration: "4.2s" },
    { top: "32%", left: "12%", size: "text-sm", delay: "1.1s", duration: "3.8s" },
    { top: "20%", right: "11%", size: "text-lg", delay: "0.3s", duration: "3.6s" },
    { top: "30%", right: "17%", size: "text-xs", delay: "1.4s", duration: "4s" },
    { top: "68%", right: "8%", size: "text-lg", delay: "0.9s", duration: "4.4s" },
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


function AppClouds() {
  // Bigger and more clouds for a dreamy effect
  const clouds = [
    { top: "8%", left: "-5%", scale: 1.6 },
    { top: "18%", left: "12%", scale: 1.3 },
    { top: "28%", left: "28%", scale: 1.1 },
    { top: "38%", left: "44%", scale: 1.5 },
    { top: "48%", left: "60%", scale: 1.2 },
    { top: "58%", left: "76%", scale: 1.4 },
    { top: "68%", left: "88%", scale: 1.7 },
    { top: "20%", left: "70%", scale: 1.2 },
    { top: "60%", left: "20%", scale: 1.3 },
    { top: "80%", left: "50%", scale: 1.5 },
    { top: "10%", left: "80%", scale: 1.1 },
    { top: "85%", left: "10%", scale: 1.4 },
    // Extra clouds for denser effect
    { top: "25%", left: "5%", scale: 1.2 },
    { top: "55%", left: "35%", scale: 1.3 },
    { top: "75%", left: "65%", scale: 1.1 },
    { top: "35%", left: "85%", scale: 1.4 },
    { top: "65%", left: "55%", scale: 1.2 },
    { top: "15%", left: "45%", scale: 1.3 },
    { top: "45%", left: "75%", scale: 1.1 },
    { top: "70%", left: "25%", scale: 1.2 },
  ];

  return (
    <>
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className="intro-cloud pointer-events-none absolute"
          style={{
            top: cloud.top,
            left: cloud.left,
            transform: `scale(${cloud.scale})`,
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

function ProgressDots({ step, totalSteps }: { step: number; totalSteps: number }) {
  return <div className="mb-5 flex gap-2">{Array.from({ length: totalSteps }, (_, index) => <span key={index} className={`h-1.5 flex-1 rounded-full transition-all ${index < step ? "bg-[linear-gradient(90deg,#d77767,#efb19b)]" : "bg-white/75"}`} />)}</div>;
}

function PrimaryButton({ label, onClick, tone = "dark", className = "" }: { label: string; onClick: () => void; tone?: "dark" | "rose" | "light"; className?: string }) {
  const toneClass =
    tone === "rose"
      ? "bg-[linear-gradient(180deg,#d7baf6_0%,#b59de9_52%,#9785d9_100%)] text-white shadow-[0_18px_35px_rgba(157,137,214,0.28)]"
      : tone === "light"
        ? "border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(247,240,252,0.92)_100%)] text-[#74688d]"
        : "bg-[linear-gradient(180deg,#c7b3f1_0%,#a48fdd_52%,#8776cb_100%)] text-white shadow-[0_18px_35px_rgba(145,132,206,0.3)]";
  return <button type="button" onClick={onClick} className={`rounded-[1.25rem] px-5 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 ${toneClass} ${className}`}>{label}</button>;
}

function ScratchCard({ label, revealed, onReveal, language }: { label: string; revealed: boolean; onReveal: () => void; language: Language }) {
  const scratchLabel = language === "ta" ? "Scratch" : "Scratch";
  const revealedLabel = language === "ta" ? "Opened" : "Revealed";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scratchingRef = useRef(false);
  const revealedRef = useRef(revealed);

  useEffect(() => {
    revealedRef.current = revealed;
  }, [revealed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper || revealed) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = wrapper.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "rgba(255,250,255,0.98)");
    gradient.addColorStop(0.5, "rgba(244,231,251,0.98)");
    gradient.addColorStop(1, "rgba(228,218,244,0.98)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    const shine = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    shine.addColorStop(0, "rgba(255,255,255,0.28)");
    shine.addColorStop(0.5, "rgba(255,255,255,0)");
    shine.addColorStop(1, "rgba(255,255,255,0.22)");
    ctx.fillStyle = shine;
    ctx.fillRect(0, 0, rect.width, rect.height);

  }, [revealed, scratchLabel]);

  const eraseAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper || revealedRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = wrapper.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    const hole = ctx.createRadialGradient(x, y, 4, x, y, 18);
    hole.addColorStop(0, "rgba(0,0,0,1)");
    hole.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = hole;
    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    const sample = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparentPixels = 0;
    for (let i = 3; i < sample.length; i += 16) {
      if (sample[i] < 40) { transparentPixels += 1 }
    }

    const ratio = transparentPixels / (sample.length / 16);
    if (ratio > 0.26) onReveal();
  };

  return <div ref={wrapperRef} className="group relative min-h-[7.6rem] overflow-hidden rounded-[1.45rem] text-left"><div className={`dream-card-deep relative flex min-h-[7.6rem] flex-col items-center justify-center px-3 py-4 text-center text-white transition duration-500 ${revealed ? "opacity-100" : "opacity-92"}`}>{revealed ? <><span className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_16%,rgba(255,255,255,0.18)_34%,rgba(255,230,245,0.28)_48%,rgba(255,255,255,0.08)_62%,rgba(255,255,255,0)_82%)] opacity-90" /><span className="pointer-events-none absolute -left-[18%] top-0 h-full w-[42%] rotate-[14deg] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.24)_45%,rgba(255,255,255,0)_100%)] blur-md" /><span className="pointer-events-none absolute right-[12%] top-[18%] text-[0.82rem] text-white/85 animate-[liveHeartFloat_2.4s_ease-in-out_infinite]">✦</span><span className="pointer-events-none absolute left-[14%] bottom-[18%] text-[0.72rem] text-[#ffd7ef] animate-[liveHeartFloat_2.8s_ease-in-out_infinite]" style={{ animationDelay: "0.4s" }}>✦</span><span className="pointer-events-none absolute right-[20%] bottom-[24%] text-[0.62rem] text-[#ffeaa8] animate-[liveHeartFloat_2.6s_ease-in-out_infinite]" style={{ animationDelay: "0.9s" }}>✦</span></> : null}<p className="relative z-10 text-[0.65rem] uppercase tracking-[0.32em] text-white/65">{revealedLabel}</p><p className="relative z-10 mt-3 text-2xl">{LOVE_ICON}</p><p className="relative z-10 mt-2 text-sm font-semibold leading-5">{label}</p></div>{!revealed ? <><div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"><span className="rounded-full bg-white/35 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#8c79a9] backdrop-blur-sm">{scratchLabel}</span></div><canvas ref={canvasRef} className="absolute inset-0 z-10 cursor-pointer touch-none" onPointerDown={(event) => { scratchingRef.current = true; eraseAt(event.clientX, event.clientY); }} onPointerMove={(event) => { if (!scratchingRef.current) return; eraseAt(event.clientX, event.clientY); }} onPointerUp={() => { scratchingRef.current = false; }} onPointerLeave={() => { scratchingRef.current = false; }} /></> : null}</div>;
}function LanguageToggle({ language, onChange, tamilLabel, englishLabel }: { language: Language; onChange: (language: Language) => void; tamilLabel: string; englishLabel: string }) {
  return <div className="flex items-center gap-1 rounded-full bg-white/88 p-1 shadow-[0_10px_24px_rgba(149,129,198,0.16)]"><button type="button" onClick={() => onChange("ta")} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${language === "ta" ? "bg-[linear-gradient(180deg,#f5d8ef,#eec4e4)] text-[#6e5f96]" : "text-[#9a8eb2]"}`}>{tamilLabel}</button><button type="button" onClick={() => onChange("en")} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${language === "en" ? "bg-[linear-gradient(180deg,#7c71b4,#62578f)] text-white" : "text-[#9a8eb2]"}`}>{englishLabel}</button></div>;
  }

function MobileShell({ step, eyebrow, title, description, children, onBack, language, onLanguageChange, isPlaying, onToggleAudio, showLanguageToggle = true, showLiveHearts = false, mutedIntro = false }: { step: number; eyebrow: string; title: string; description: string; children: React.ReactNode; onBack?: () => void; language: Language; onLanguageChange: (language: Language) => void; isPlaying: boolean; onToggleAudio: () => void; showLanguageToggle?: boolean; showLiveHearts?: boolean; mutedIntro?: boolean }) {
  const t = getActiveCopy(language);
  const sectionClass = mutedIntro
    ? "bg-[linear-gradient(180deg,#ef9fa1_0%,#eaa0a4_18%,#eab0b1_32%,#e9bfc0_46%,#e2c4d4_62%,#b3b5df_82%,#717ab8_100%)]"
    : "bg-[linear-gradient(180deg,#f5d8ea_0%,#efd7ee_28%,#e6d7f1_58%,#ced5ef_100%)]";
  const overlayClass = mutedIntro
    ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,236,229,0.08)_20%,rgba(255,255,255,0.03)_44%,rgba(72,86,162,0.08)_100%)]"
    : "bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,243,250,0.08)_24%,rgba(245,232,252,0.05)_48%,rgba(148,158,224,0.08)_100%)]";
  const glowClass = mutedIntro
    ? "bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_18%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.03)_82%,rgba(255,255,255,0.08)_100%)]"
    : "bg-[linear-gradient(90deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.02)_18%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.03)_82%,rgba(255,255,255,0.08)_100%)]";
  const shellClass = mutedIntro
    ? "bg-[linear-gradient(180deg,rgba(255,248,243,0.74)_0%,rgba(255,238,233,0.72)_38%,rgba(243,232,239,0.72)_72%,rgba(220,225,249,0.76)_100%)] shadow-[0_24px_70px_rgba(93,85,140,0.16)]"
    : "bg-[linear-gradient(180deg,rgba(255,251,253,0.8)_0%,rgba(251,240,247,0.78)_38%,rgba(241,233,247,0.76)_74%,rgba(230,234,248,0.78)_100%)] shadow-[0_22px_80px_rgba(157,145,202,0.16)]";
  return (
    <section className={`relative min-h-[100svh] overflow-hidden px-3 py-4 text-[#4f3d62] sm:px-5 sm:py-6 ${sectionClass}`}>
      <BackgroundHearts />
      <div className={`pointer-events-none absolute inset-0 ${overlayClass}`} />
      <div className={`pointer-events-none absolute inset-0 ${glowClass}`} />
      {showLiveHearts ? <IntroLiveHearts /> : null}
      <div className={`relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-[30rem] flex-col rounded-[1.9rem] border border-white/72 p-4 backdrop-blur-xl sm:min-h-[calc(100svh-3rem)] sm:rounded-[2.15rem] sm:p-5 ${shellClass}`}>
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[2.15rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.26),transparent_20%),radial-gradient(circle_at_82%_14%,rgba(255,233,245,0.2),transparent_18%),radial-gradient(circle_at_76%_82%,rgba(198,222,255,0.16),transparent_20%)]" />
        </div>
        <div className="relative mb-4 grid grid-cols-[auto_1fr_auto] items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            disabled={!onBack}
            className={`rounded-full px-2.5 py-1.5 text-[0.7rem] font-medium transition sm:px-3 sm:text-xs ${onBack ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(248,241,252,0.92)_100%)] text-[#756990] shadow-sm hover:bg-white" : "pointer-events-none opacity-0"}`}
            aria-label={t.back}
          >
            {t.back}
          </button>
          <div className="flex justify-center">
            {showLanguageToggle ? (
              <LanguageToggle
                language={language}
                onChange={onLanguageChange}
                tamilLabel={t.languageTamil}
                englishLabel={t.languageEnglish}
              />
            ) : (
              <div className="w-[122px]" />
            )}
          </div>
          <div className="justify-self-end rounded-full bg-[linear-gradient(180deg,#7f74b8,#655993)] px-2.5 py-1.5 text-[0.62rem] font-semibold text-white shadow-[0_10px_20px_rgba(110,102,170,0.22)] sm:px-3 sm:text-[0.65rem]">
            {step}/{TOTAL_STEPS}
          </div>
        </div>
        <div className="flex items-start justify-between gap-3">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#d48cab]">{eyebrow}</p>
          <button
            type="button"
            onClick={onToggleAudio}
            className="flex h-11 w-11 items-center justify-center rounded-full border-0 bg-white/88 p-2 pb-3 shadow-[0_8px_18px_rgba(110,102,170,0.14)]"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="6" y="5" width="4" height="14" rx="2" fill="#a86ad6"/><rect x="14" y="5" width="4" height="14" rx="2" fill="#a86ad6"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 5v14l11-7L7 5z" fill="#a86ad6"/></svg>
            )}
          </button>
        </div>
        <div className="mt-1">
          <p className="text-[0.7rem] leading-none text-[#8b7f9d]">{t.appLabel}</p>
        </div>
        <div className="mt-2">
          <ProgressDots step={step} totalSteps={TOTAL_STEPS} />
        </div>
        <div className="mb-5 sm:mb-6">
          <h1 className="max-w-[16ch] text-[clamp(1.7rem,4vw,2rem)] font-semibold leading-tight text-[#5b5078]">{title}</h1>
          <span className="sr-only">{description}</span>
        </div>
        <div className="relative z-20 flex-1">{children}</div>
      </div>
    </section>
  );
}

function IntroScreen({ onNext, language, onLanguageChange, isPlaying, onToggleAudio }: { onNext: () => void; language: Language; onLanguageChange: (language: Language) => void; isPlaying: boolean; onToggleAudio: () => void }) {
  const t = getActiveCopy(language);
  return <ReferenceBirthdayIntro copy={t} language={language} onLanguageChange={onLanguageChange} onOpen={onNext} isPlaying={isPlaying} onToggleAudio={onToggleAudio} />;
}

function LetterFormScreen({ onNext, onBack, fromValue, setFromValue, loveValue, setLoveValue, language, onLanguageChange, isPlaying, onToggleAudio }: { onNext: () => void; onBack: () => void; fromValue: string; setFromValue: (value: string) => void; loveValue: string; setLoveValue: (value: string) => void; language: Language; onLanguageChange: (language: Language) => void; isPlaying: boolean; onToggleAudio: () => void }) {
  const t = getActiveCopy(language);
  return <MobileShell step={2} eyebrow={t.letterEyebrow} title={t.letterTitle} description={t.letterDescription} onBack={onBack} language={language} onLanguageChange={onLanguageChange} isPlaying={isPlaying} onToggleAudio={onToggleAudio} showLiveHearts><div className="flex h-full flex-col gap-4"><div className="dream-card-soft letter-paper rounded-[1.95rem] p-5"><div className="mb-4 flex items-center justify-between"><p className="text-xs uppercase tracking-[0.3em] text-[#8f79ab]">{t.letterTo}</p><span className="rounded-full bg-white/75 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#c57da0]">{t.letterPrivate}</span></div><p className="text-base leading-7 text-[#645875]">{t.letterText}</p><div className="mt-5 space-y-4"><input type="text" placeholder={t.fromPlaceholder} value={fromValue} onChange={(event) => setFromValue(event.target.value)} className="w-full border-b border-[#d8cfe7] bg-transparent px-1 py-2 text-sm outline-none" /><input type="text" placeholder={t.linePlaceholder} value={loveValue} onChange={(event) => setLoveValue(event.target.value)} className="w-full border-b border-[#d8cfe7] bg-transparent px-1 py-2 text-sm outline-none" /></div><div className="dream-card-soft mt-5 rounded-[1.35rem] p-3 text-sm leading-6 text-[#6d627f]">{t.previewPrefix} {fromValue || t.previewFallbackName} {t.previewMiddle} &ldquo;{loveValue || t.previewFallbackLine}&rdquo;</div></div><PrimaryButton label={t.continueLove} onClick={onNext} tone="rose" /></div></MobileShell>;
}

function EnvelopeRevealScreen({ onNext, onBack, fromValue, loveValue, language, onLanguageChange, isPlaying, onToggleAudio }: { onNext: () => void; onBack: () => void; fromValue: string; loveValue: string; language: Language; onLanguageChange: (language: Language) => void; isPlaying: boolean; onToggleAudio: () => void }) {
  const [opened, setOpened] = useState(false);
  const t = getActiveCopy(language);
  const longLetter = language === "ta"
    ? [
        "உன் பிறந்தநாளுக்காக ஒரு சாதாரண வாழ்த்து மட்டும் அனுப்ப வேண்டும் என்று எனக்குத் தோன்றவில்லை. அதற்குப் பதிலாக உனக்காக மட்டும் ஒரு சிறிய காதல் உலகத்தை உருவாக்க வேண்டும் என்று நினைத்தேன்.",
        "நீ என் வாழ்க்கைக்குள் வந்த பிறகு நாட்கள் மென்மையாகின. மனம் அமைதியாகின. சாதாரண தருணங்களுக்குக் கூட அழகு சேர்ந்துவிட்டது.",
        "நீ சிரிக்கும் போது என் உலகமே ஒளிவிடுகிறது. நீ பேசும் போது என் மனம் அமைதியாகிறது. நீ அருகில் இருந்தால் ஒரு சாதாரண நாள்கூட நினைவாக மாறிவிடுகிறது.",
        loveValue || "நீ என் வாழ்க்கையை இன்னும் இனிமையாகவும் அழகாகவும் அர்த்தமுள்ளதாகவும் மாற்றுகிறாய்.",
        `எப்போதும் அன்புடன், ${fromValue || "உன்னை ஆழமாக நேசிக்கும் ஒருவர்"}.`,
      ]
    : getPoemLetter(language, fromValue, loveValue);
  const displayLetter = getPoemLetter(language, fromValue, loveValue);
  void longLetter;
  const ornamentHearts = [
    { left: "11%", top: "28%", delay: "0s", size: "text-sm" },
    { left: "16%", bottom: "23%", delay: "1s", size: "text-[0.8rem]" },
    { right: "13%", top: "34%", delay: "0.5s", size: "text-sm" },
    { right: "17%", bottom: "26%", delay: "1.35s", size: "text-[0.8rem]" },
  ];

    const ornamentSparkles = [
      { left: "13%", top: "16%", delay: "0.35s" },
      { right: "15%", top: "20%", delay: "1.05s" },
      { left: "24%", bottom: "22%", delay: "1.65s" },
      { right: "24%", bottom: "18%", delay: "0.8s" },
    ];
    const ornamentClouds = [
      { left: "5%", top: "20%", width: "4.4rem", height: "1.65rem", opacity: 0.78, delay: "0.2s" },
      { right: "10%", bottom: "18%", width: "4.8rem", height: "1.8rem", opacity: 0.82, delay: "1.1s" },
    ];

  return (
    <MobileShell
      step={3}
      eyebrow={t.envelopeEyebrow}
      title={t.envelopeTitle}
      description={t.envelopeDescription}
      onBack={onBack}
      language={language}
      onLanguageChange={onLanguageChange}
      isPlaying={isPlaying}
      onToggleAudio={onToggleAudio}
      showLiveHearts={!opened}
    >
      <div className="flex h-full flex-col">
        {opened ? (
          <div className="dream-card-soft relative flex h-full flex-col overflow-hidden rounded-[2.1rem] p-5">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-white/92" />
            <div className="drip-left pointer-events-none absolute left-0 top-0 h-20 w-1/2 bg-white/94" />
            <div className="drip-right pointer-events-none absolute right-0 top-0 h-20 w-1/2 bg-white/94" />
            <div className="relative z-10 mt-12 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8aa5de]">{t.hiddenNote}</p>
              <span className="rounded-full bg-white/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#b07db8]">
                {t.openedWithLove}
              </span>
            </div>
              <div className="letter-paper relative z-10 mt-4 flex-1 rounded-[1.8rem] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8f79ab]">{t.letterTo}</p>
              <div className="mt-4 space-y-4 overflow-y-auto pr-1 text-[0.95rem] leading-7 text-[#645875]">
                {displayLetter.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-4">
              <PrimaryButton label={t.nextMemory} onClick={onNext} className="w-full" />
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col gap-4">
            <div className="dream-card-soft rounded-[1.7rem] px-4 py-4 text-center shadow-[0_14px_34px_rgba(144,123,164,0.12)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#a18fb6]">{t.hiddenNote}</p>
              <p className="mt-3 text-sm leading-6 text-[#645875]">{t.hiddenText}</p>
            </div>

              <button
                type="button"
                onClick={() => setOpened(true)}
                aria-label={t.openEnvelopeNoteAria}
                className="relative mx-auto block h-[15.4rem] w-full overflow-hidden rounded-[2rem]"
              >
                <Image
                  src="/envelope-first-page.png"
                  alt=""
                  aria-hidden="true"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full scale-[1.07] object-cover"
                />
                {ornamentClouds.map((cloud, index) => (
                  <span
                    key={`cloud-${index}`}
                    className="intro-cloud pointer-events-none absolute z-10"
                    style={{ left: cloud.left, right: cloud.right, top: cloud.top, bottom: cloud.bottom, width: cloud.width, height: cloud.height, opacity: cloud.opacity, animationDelay: cloud.delay }}
                  >
                    <span className="intro-cloud-puff intro-cloud-left" />
                    <span className="intro-cloud-puff intro-cloud-main" />
                    <span className="intro-cloud-puff intro-cloud-right" />
                    <span className="intro-cloud-puff intro-cloud-tail" />
                  </span>
                ))}

                {ornamentSparkles.map((sparkle, index) => (
                  <span
                    key={index}
                    className="gem-sparkles absolute z-10 text-[0.8rem] text-[#f4d88c] animate-[liveHeartFloat_2.8s_ease-in-out_infinite]"
                    style={{ left: sparkle.left, right: sparkle.right, top: sparkle.top, bottom: sparkle.bottom, animationDelay: sparkle.delay }}
                  >
                    {"\u2726"}
                  </span>
                ))}

                {ornamentHearts.map((heart, index) => (
                  <span
                    key={index}
                    className={`live-heart absolute z-10 text-[#ff577d] ${heart.size}`}
                    style={{ left: heart.left, right: heart.right, top: heart.top, bottom: heart.bottom, animationDelay: heart.delay, animationDuration: "3.6s" }}
                  >
                    {"\u2665"}
                  </span>
                ))}
              </button>

            <div className="dream-card-soft rounded-[1.5rem] p-4 text-sm leading-6 text-[#74688a]">{t.envelopeHelper}</div>

            <div className="mt-auto w-full">
              <PrimaryButton label={t.envelopeFirst} onClick={() => setOpened(true)} className="w-full" />
            </div>
          </div>
        )}
      </div>
    </MobileShell>
  );
}

function ExploreScreen({ onNext, onBack, language, onLanguageChange, isPlaying, onToggleAudio }: { onNext: () => void; onBack: () => void; language: Language; onLanguageChange: (language: Language) => void; isPlaying: boolean; onToggleAudio: () => void }) {

  const t = getActiveCopy(language);
  const [activePhoto, setActivePhoto] = useState(1);
  const slideCount = 10;
  // New photo list from asset folder, 01 to 10
  const memorySlides = Array.from({ length: 10 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, "0");
    return {
      src: `/memory-${num}.jpeg`,
      alt: `Memory photo ${num}`,
      message:
        language === "ta"
          ? `நினைவுகள் படம் ${num}`
          : `Memory photo ${num}`,
    };
  });

  useEffect(() => {
    let currentIndex = 0;
    const interval = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      setActivePhoto(currentIndex + 1);
    }, 1800);
    return () => window.clearInterval(interval);
  }, [language]);

  const photoClasses = "absolute inset-0 overflow-hidden rounded-[1.6rem] border-[6px] border-white bg-white shadow-[0_18px_38px_rgba(179,143,190,0.28)] transition-all duration-700";

  return (
    <MobileShell
      step={4}
      eyebrow={t.exploreEyebrow}
      title={t.exploreTitle}
      description={t.exploreDescription}
      onBack={onBack}
      language={language}
      onLanguageChange={onLanguageChange}
      isPlaying={isPlaying}
      onToggleAudio={onToggleAudio}
    >
      <div className="flex h-full flex-col gap-4">
          <div className="dream-card-soft relative overflow-hidden rounded-[2rem] p-4">
          <div className="relative mx-auto aspect-[10/13] w-full max-w-[16rem] sm:max-w-[18rem]">
            {memorySlides.map((slide, index) => (
              <div
                key={slide.src}
                className={`${photoClasses} ${activePhoto === index + 1 ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0"}`}
              >
                <Image src={slide.src} alt={slide.alt} width={460} height={560} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-4 px-2 pb-1 text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#bf82ae]">{t.loveBadge}</p>
            {memorySlides.map((slide, index) => (
              <p
                key={slide.message}
                className={`mt-3 text-sm leading-6 text-[#756a89] transition-all duration-500 ${activePhoto === index + 1 ? "block opacity-100" : "hidden opacity-0"}`}
              >
                {slide.message}
              </p>
            ))}
          </div>
        </div>
        <PrimaryButton label={t.revealSurprise} onClick={onNext} tone="rose" />
      </div>
    </MobileShell>
  );
}

function GiftRevealScreen({ onNext, onBack, language, onLanguageChange, isPlaying, onToggleAudio }: { onNext: () => void; onBack: () => void; language: Language; onLanguageChange: (language: Language) => void; isPlaying: boolean; onToggleAudio: () => void }) {
  const t = getActiveCopy(language);
  const [revealedCards, setRevealedCards] = useState<boolean[]>(() => Array.from({ length: 10 }, () => false));
  const rewards = language === "ta"
    ? ["காலை காபி சந்திப்பு", "நீண்ட பயணம்", "திரைப்பட இரவு", "ரகசிய பரிசு", "காதல் குறிப்பு", "பிடித்த இரவு உணவு", "இரவு நடை", "அணைப்பு சீட்டு", "ஆச்சரிய திட்டம்", "முத்தம் சீட்டு"]
    : getScratchRewards(language);
  return <MobileShell step={5} eyebrow={t.giftEyebrow} title={t.giftTitle} description={t.giftDescription} onBack={onBack} language={language} onLanguageChange={onLanguageChange} isPlaying={isPlaying} onToggleAudio={onToggleAudio}><div className="flex h-full flex-col gap-4"><div className="shine-card dream-card-deep rounded-[2rem] p-5 text-white"><p className="text-xs uppercase tracking-[0.35em] text-white/75">{t.mysteryBox}</p><p className="mt-4 text-3xl font-semibold tracking-tight">10</p><p className="mt-2 text-sm leading-6 text-white/85">{t.mysteryText}</p></div><div className="grid grid-cols-2 gap-3">{rewards.map((reward, index) => <ScratchCard key={reward} label={reward} revealed={revealedCards[index]} language={language} onReveal={() => setRevealedCards((current) => current.map((item, currentIndex) => currentIndex === index ? true : item))} />)}</div><PrimaryButton label={t.openFinal} onClick={onNext} /></div></MobileShell>;
}

function FinalScreen({ onBack, fromValue, language, onLanguageChange, isPlaying, onToggleAudio }: { onBack: () => void; fromValue: string; language: Language; onLanguageChange: (language: Language) => void; isPlaying: boolean; onToggleAudio: () => void }) {
  const t = getActiveCopy(language);
  return <MobileShell step={6} eyebrow={t.finalEyebrow} title={t.finalTitle} description={t.finalDescription} onBack={onBack} language={language} onLanguageChange={onLanguageChange} isPlaying={isPlaying} onToggleAudio={onToggleAudio}><div className="flex h-full flex-col gap-4"><div className="dream-card-soft rounded-[2rem] p-5"><p className="text-xs uppercase tracking-[0.35em] text-[#d48cab]">{t.closingNote}</p><p className="mt-4 text-xl font-semibold leading-tight text-[#5f5472]">{t.closingText1}</p><p className="mt-4 text-sm leading-7 text-[#786d8b]">{t.closingText2}</p></div><div className="dream-card-deep rounded-[1.6rem] px-4 py-5 text-center text-white"><p className="text-xs uppercase tracking-[0.35em] text-white/65">{t.fromLabel}</p><p className="mt-2 text-lg font-semibold">{fromValue || t.fromFallback}</p></div><PrimaryButton label={t.replay} onClick={() => window.location.reload()} tone="light" /></div></MobileShell>;
}

export default function Page() {
  const [screen, setScreen] = useState(0);
  const [fromValue, setFromValue] = useState("");
  const [loveValue, setLoveValue] = useState("");
  const [language, setLanguage] = useState<Language>("en");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Play/pause handler
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // Keep isPlaying state in sync if user interacts with native controls
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div className="app-frame flex flex-col items-center bg-[#f8f3fa]">
      {/* Background audio element */}
      <audio ref={audioRef} src="/audio/birthday-song.mpeg" loop preload="auto" />
      <AppClouds />
      <div className="app-stage bg-white shadow-[0_2px_16px_rgba(168,106,214,0.07)]">
        {screen === 0 && <IntroScreen onNext={() => setScreen(1)} language={language} onLanguageChange={setLanguage} isPlaying={isPlaying} onToggleAudio={toggleAudio} />}
        {screen === 1 && <LetterFormScreen onNext={() => setScreen(2)} onBack={() => setScreen(0)} fromValue={fromValue} setFromValue={setFromValue} loveValue={loveValue} setLoveValue={setLoveValue} language={language} onLanguageChange={setLanguage} isPlaying={isPlaying} onToggleAudio={toggleAudio} />}
        {screen === 2 && <EnvelopeRevealScreen onNext={() => setScreen(3)} onBack={() => setScreen(1)} fromValue={fromValue} loveValue={loveValue} language={language} onLanguageChange={setLanguage} isPlaying={isPlaying} onToggleAudio={toggleAudio} />}
        {screen === 3 && <ExploreScreen onNext={() => setScreen(4)} onBack={() => setScreen(2)} language={language} onLanguageChange={setLanguage} isPlaying={isPlaying} onToggleAudio={toggleAudio} />}
        {screen === 4 && <GiftRevealScreen onNext={() => setScreen(5)} onBack={() => setScreen(3)} language={language} onLanguageChange={setLanguage} isPlaying={isPlaying} onToggleAudio={toggleAudio} />}
        {screen === 5 && <FinalScreen onBack={() => setScreen(4)} fromValue={fromValue} language={language} onLanguageChange={setLanguage} isPlaying={isPlaying} onToggleAudio={toggleAudio} />}
      </div>
    </div>
  );
}

