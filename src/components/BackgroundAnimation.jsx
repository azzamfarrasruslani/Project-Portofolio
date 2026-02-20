"use client";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lime-200/30 dark:bg-lime-900/10 rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-200/30 dark:bg-teal-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-lime-100/30 dark:bg-lime-800/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
    </div>
  );
}
