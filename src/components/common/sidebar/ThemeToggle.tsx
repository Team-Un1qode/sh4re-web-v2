import styled from "styled-components";
import { useTheme } from "../../../theme/themeContext";

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;

const Switch = styled.span<{ checked: boolean }>`
  width: 44px;
  height: 24px;
  background: ${({ checked }) => (checked ? "#0095FF" : "#e0e0e0")};
  border-radius: 12px;
  position: relative;
  transition: background 0.2s;
  margin: 0 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
`;

const Thumb = styled.span<{ checked: boolean }>`
  position: absolute;
  left: ${({ checked }) => (checked ? "22px" : "2px")};
  top: 2px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  border: 1.5px solid ${({ checked }) => (checked ? "#0095FF" : "#bdbdbd")};
`;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ToggleWrapper>
      <Label>
        <Switch
          checked={isDark}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          <Thumb checked={isDark} />
        </Switch>
      </Label>
    </ToggleWrapper>
  );
}
