import SpecializationItem from "./SpecializationItem.jsx";

export default function Specialization() {
  const specializations = [
    { icon: "🖥️", name: "Front-end" },
    { icon: "🎨", name: "Design UI/UX" },
    { icon: "📱", name: "Responsividade" },
    { icon: "⚙️", name: "Versionamento" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {specializations.map((item) => (
        <SpecializationItem key={item.name} specialization={item} />
      ))}
    </div>
  );
}
