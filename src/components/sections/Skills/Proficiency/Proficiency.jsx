import ProficiencyItem from "./ProficiencyItem.jsx";

export default function Proficiency() {
  const proficiencies = [
    { name: "HTML5", level: "85%" },
    { name: "CSS3", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {proficiencies.map((item) => (
        <ProficiencyItem key={item.name} proficiency={item} />
      ))}
    </div>
  );
}
