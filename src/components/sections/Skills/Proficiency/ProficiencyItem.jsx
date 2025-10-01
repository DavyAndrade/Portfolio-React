import ProficiencyInfo from "./ProficiencyInfo.jsx";
import ProgressBar from "./ProgressBar.jsx";

export default function ProficiencyItem({ proficiency }) {
  return (
    <div className="flex flex-col gap-2">
      <ProficiencyInfo skill={proficiency.name} level={proficiency.level} />
      <ProgressBar level={proficiency.level} />
    </div>
  );
}
