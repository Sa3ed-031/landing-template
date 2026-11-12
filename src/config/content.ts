import type { SiteContent } from "@/types/content";

const contactLink = "https://wa.me/000000000000";

export const content: SiteContent = {
  meta: {
    name: "اسم البراند",
    title: "اسم البراند | جملة قصيرة بتوصف الخدمة",
    description:
      "وصف من سطر أو سطرين بيطلع بنتائج جوجل وبمعاينة الرابط على واتساب وفيسبوك.",
    lang: "ar",
    dir: "rtl",
  },

  header: {
    logo: "اسم البراند",
    links: [
      { label: "كيف بيشتغل", href: "#how" },
      { label: "الميزات", href: "#features" },
      { label: "أسئلة", href: "#faq" },
    ],
    cta: { label: "تواصل معنا", href: contactLink },
  },

  order: ["hero", "problem", "steps", "features", "faq", "cta"],

  hero: {
    enabled: true,
    badge: "شارة قصيرة · ميزة أساسية",
    title: "عنوان رئيسي قوي بيوصف خدمتك بجملة",
    subtitle:
      "جملة أو جملتين بتشرح شو بتقدّم، ولمين، وشو الفايدة اللي بيحصل عليها العميل.",
    primaryCta: { label: "الزر الأساسي", href: contactLink },
    secondaryCta: { label: "الزر الثانوي", href: "#features" },
  },

  problem: {
    enabled: true,
    title: "المشكلة اللي عم يعاني منها عميلك",
    items: [
      {
        icon: "😓",
        title: "المشكلة الأولى",
        text: "وصف قصير لوجع حقيقي عند العميل.",
      },
      {
        icon: "⏳",
        title: "المشكلة التانية",
        text: "شي عم يضيّع وقته أو مصاريه.",
      },
      { icon: "🤯", title: "المشكلة التالتة", text: "شي بيخليه يدوّر على حل." },
    ],
  },

  steps: {
    enabled: true,
    title: "كيف بيشتغل؟",
    steps: [
      { title: "الخطوة الأولى", text: "شو بيصير بالبداية." },
      { title: "الخطوة التانية", text: "شو بيصير بعدها." },
      { title: "الخطوة التالتة", text: "النتيجة اللي بيوصلها العميل." },
    ],
  },

  features: {
    enabled: true,
    title: "الميزات",
    subtitle: "جملة فرعية بتلخّص ليش خدمتك مختلفة.",
    items: [
      { icon: "⚡", title: "ميزة رقم ١", text: "وصف قصير للميزة وفايدتها." },
      { icon: "🎯", title: "ميزة رقم ٢", text: "وصف قصير للميزة وفايدتها." },
      { icon: "🛡️", title: "ميزة رقم ٣", text: "وصف قصير للميزة وفايدتها." },
      { icon: "📱", title: "ميزة رقم ٤", text: "وصف قصير للميزة وفايدتها." },
      { icon: "🎨", title: "ميزة رقم ٥", text: "وصف قصير للميزة وفايدتها." },
      { icon: "💬", title: "ميزة رقم ٦", text: "وصف قصير للميزة وفايدتها." },
    ],
  },

  faq: {
    enabled: true,
    title: "أسئلة متكررة",
    items: [
      { question: "سؤال بيسأله العميل كتير؟", answer: "جواب واضح وقصير." },
      { question: "سؤال تاني عن السعر أو المدة؟", answer: "جواب واضح وقصير." },
      { question: "سؤال تالت عن طريقة الشغل؟", answer: "جواب واضح وقصير." },
    ],
  },

  cta: {
    enabled: true,
    title: "دعوة أخيرة للعمل",
    text: "جملة بتشجّع العميل ياخد الخطوة الجاية.",
    cta: { label: "تواصل معنا", href: contactLink },
  },

  footer: {
    text: "سطر قصير عن البراند",
    credit: "Built by Sa3ed",
  },
};
