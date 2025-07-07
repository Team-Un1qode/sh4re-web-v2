import React from "react";
import * as S from "../../../../../pages/register/style";

interface ClassSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const options = Array.from({ length: 14 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1}반`,
}));

const ClassSelect = ({ value, onChange }: ClassSelectProps) => {
  return (
    <S.Select
      value={value}
      onChange={onChange}
      $isSelected={!value || value === ""}
    >
      <option value=''>반</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </S.Select>
  );
};

export default ClassSelect;
