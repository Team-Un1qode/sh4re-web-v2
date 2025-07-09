import type { SingleValue } from "react-select";

export interface ClassOption {
  value: string;
  label: string;
}

export interface ClassSelectProps {
  value: ClassOption | null;
  onChange: (option: SingleValue<ClassOption>) => void;
}
