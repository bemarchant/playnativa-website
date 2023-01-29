import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./LightModeToggleButton.css";
import { useColorMode } from "theme-ui";

export function LightModeToggleButton() {
  <FontAwesomeIcon icon={"fa-moon"} />;

  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      />
      <label for="checkbox" className="label">
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faMoon} />
        <div className="ball"></div>
      </label>
    </div>
  );
}
