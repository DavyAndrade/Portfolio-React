export default function AboutItem({ title, subtitle, color }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg">
      <p className={`text-3xl ${color} font-bold`}>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
}
