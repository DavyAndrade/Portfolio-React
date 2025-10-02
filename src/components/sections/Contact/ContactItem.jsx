export default function ContactItem({ icon, title, info, color }) {
  return (
    <div className="flex gap-4 items-center">
      <div className={`flex justify-center items-center w-12 h-12 rounded-full ${color}`}>
        <span className="text-xl">{icon}</span>
      </div>

      <div className="flex flex-col">
        <span className="font-medium">{title}</span>
        <span className="text-gray-300">{info}</span>
      </div>
    </div>
  );
}
