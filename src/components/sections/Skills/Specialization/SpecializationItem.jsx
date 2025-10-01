export default function SpecializationItem({ specialization }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-700 rounded-lg hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300">
      <span className="text-4xl">{specialization.icon}</span>
      <p className="font-medium text-center">{specialization.name}</p>
    </div>
  );
}
