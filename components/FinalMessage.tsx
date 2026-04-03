"use client";

export function FinalMessage() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 h-1 w-1 rounded-full bg-white animate-pulse" />
        <div className="absolute top-32 right-24 h-1.5 w-1.5 rounded-full bg-white/80 animate-ping" />
        <div className="absolute top-52 left-1/3 h-1 w-1 rounded-full bg-white/60 animate-pulse" />
        <div className="absolute right-1/4 bottom-32 h-1 w-1 rounded-full bg-white/70 animate-pulse" />
        <div className="absolute bottom-20 left-1/4 h-1.5 w-1.5 rounded-full bg-white/50 animate-ping" />
      </div>

      <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent" />

      <div className="relative px-6 text-center">
        <p className="mb-3 text-2xl font-light tracking-wide md:text-4xl">
          Silent Universe
        </p>

        <p className="mb-6 text-sm text-white/60">
          Some stories are felt more than spoken.
        </p>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-lg bg-white px-5 py-2 text-black transition hover:scale-105"
        >
          Replay Journey
        </button>
      </div>
    </section>
  );
}
