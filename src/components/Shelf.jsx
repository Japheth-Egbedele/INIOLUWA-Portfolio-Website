export default function Shelf({ children }) {
  return (
    <section className="w-full" aria-label="Video categories">
      <div className="rounded-2xl md:rounded-3xl border border-white/5 bg-zinc-900/55 backdrop-blur-md p-4 md:p-8 shadow-xl shadow-black/30">
        <div className="categories-scroll flex items-end justify-start md:justify-center gap-4 md:gap-6 flex-nowrap overflow-x-auto pb-1 snap-x snap-mandatory md:snap-none [-ms-overflow-style:none] [scrollbar-width:thin]">
          {children}
        </div>
      </div>
    </section>
  );
}
