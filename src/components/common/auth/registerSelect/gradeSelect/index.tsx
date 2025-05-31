import React from "react";

interface GradeSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const options = [
  { value: "1", label: "1학년" },
  { value: "2", label: "2학년" },
  { value: "3", label: "3학년" },
];

function GradeSelect({ value, onChange }: GradeSelectProps) {
  return (
    <select value={value} onChange={onChange}>
      <option value=''>학년</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default GradeSelect;
