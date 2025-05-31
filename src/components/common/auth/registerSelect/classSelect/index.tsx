import React from "react";

interface ClassSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const options = Array.from({ length: 14 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1}반`,
}));

function ClassSelect({ value, onChange }: ClassSelectProps) {
  return (
    <select value={value} onChange={onChange}>
      <option value=''>반</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default ClassSelect;
