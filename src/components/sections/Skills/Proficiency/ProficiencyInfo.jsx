export default function ProficiencyInfo({ skill, level }) {
  return (
    <div className="flex items-center w-full justify-between">
      <p className="font-medium">{skill}</p>
      <p className="text-emerald-500">{level}</p>
    </div>
  );
}
