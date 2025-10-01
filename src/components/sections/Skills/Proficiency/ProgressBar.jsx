export default function ProgressBar({ level }) {
  return (
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div
        className="bg-gradient-to-r from-emerald-500 to-sky-500 h-3 rounded-full"
        style={{ width: level }}
      ></div>
    </div>
  );
}
