import React from "react";
import * as S from "../../../../../pages/register/style";

interface GradeSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const options = [
  { value: "1", label: "1학년" },
  { value: "2", label: "2학년" },
  { value: "3", label: "3학년" },
];

const GradeSelect = ({ value, onChange }: GradeSelectProps) => {
  return (
    <S.Select value={value} onChange={onChange}>
      <option value=''>학년</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </S.Select>
  );
};

export default GradeSelect;
