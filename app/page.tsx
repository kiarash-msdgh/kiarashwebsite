import type { Metadata } from "next";

// این بخش عنوان و توضیحاتیه که گوگل توی نتایج جستجو نشون می‌ده
export const metadata: Metadata = {
  title: "کیارش مصدق | متخصص سئو و تولید محتوا",
  description:
    "کمک می‌کنم سایتت رو گوگل بهتر ببینه؛ از تحقیق کلمات کلیدی تا نوشتن محتوایی که هم خواننده رو جذب کنه هم رتبه بگیره.",
};

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-[#14181C]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
          {/* ستون متن */}
          <div>
            <p className="mb-4 text-sm font-medium text-[#0F6B5C]">
              فریلنسر سئو و تولید محتوا
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              سایتت رو جوری می‌سازم که هم خواننده دوستش داشته باشه، هم گوگل.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-[#4A4F55]">
              از تحقیق کلمات کلیدی و ساختار صفحه گرفته تا نوشتن متنی که واقعاً
              خونده می‌شه، روی سئو و تولید محتوا تمرکز دارم. این سایت رو هم
              خودم با Next.js ساختم تا یاد گرفته‌هام رو عملی تمرین کنم.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="rounded-md bg-[#0F6B5C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0C5A4D]"
              >
                مشاهده نمونه‌کارها
              </a>
              <a
                href="/contact"
                className="rounded-md border border-[#14181C]/15 px-6 py-3 text-sm font-medium text-[#14181C] transition hover:border-[#14181C]/40"
              >
                ارتباط با من
              </a>
            </div>
          </div>

          {/* عنصر بصری: نمودار ساده‌ی رشد رتبه در نتایج جستجو */}
          <div className="relative hidden md:block">
            <svg
              viewBox="0 0 320 220"
              className="w-full"
              role="img"
              aria-label="نمودار رشد رتبه در نتایج جستجو"
            >
              <line
                x1="20" y1="200" x2="300" y2="200"
                stroke="#14181C" strokeOpacity="0.15" strokeWidth="1"
              />
              <line
                x1="20" y1="20" x2="20" y2="200"
                stroke="#14181C" strokeOpacity="0.15" strokeWidth="1"
              />
              <polyline
                points="20,180 70,165 120,150 170,100 220,70 270,30"
                fill="none"
                stroke="#0F6B5C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="270" cy="30" r="5" fill="#C9A227" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
