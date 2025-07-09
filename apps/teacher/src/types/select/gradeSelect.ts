import type { SingleValue } from "react-select";

export interface GradeOption {
  value: string;
  label: string;
}

export interface GradeSelectProps {
  value: GradeOption | null;
  onChange: (option: SingleValue<GradeOption>) => void;
}
