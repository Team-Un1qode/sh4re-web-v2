export interface SectionProps {
  icon?: React.ReactNode;
  title: string;
  link: string;
  variant?: "home" | "detail";
  maxItems?: number;
}
