export default function CarouselItem({ skill }) {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-2">
      <span className="text-7xl text-white/25">{skill.icon}</span>
    </div>
  );
}
