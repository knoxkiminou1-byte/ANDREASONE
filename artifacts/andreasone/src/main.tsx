import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

const TILT_SELECTOR = ".group, [data-tilt]";
const MAX_TILT = 10;

function asElement(node: EventTarget | null): Element | null {
  if (!node || !(node instanceof Element)) return null;
  return node;
}

function findTiltTarget(node: EventTarget | null): HTMLElement | null {
  const el = asElement(node);
  if (!el) return null;
  const match = el.closest(TILT_SELECTOR);
  return match instanceof HTMLElement ? match : null;
}

function clearTilt(target: HTMLElement) {
  target.style.setProperty("--tilt-x", `0deg`);
  target.style.setProperty("--tilt-y", `0deg`);
  target.classList.remove("is-tilting");
}

document.addEventListener(
  "pointermove",
  (event) => {
    const target = findTiltTarget(event.target);
    if (!target) return;
    const rect = target.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    const rotY = px * MAX_TILT * 2;
    const rotX = -py * MAX_TILT * 2;
    target.style.setProperty("--tilt-x", `${rotX.toFixed(2)}deg`);
    target.style.setProperty("--tilt-y", `${rotY.toFixed(2)}deg`);
    target.style.setProperty("--tilt-mx", `${(px * 100 + 50).toFixed(2)}%`);
    target.style.setProperty("--tilt-my", `${(py * 100 + 50).toFixed(2)}%`);
    target.classList.add("is-tilting");
  },
  { passive: true },
);

document.addEventListener(
  "pointerout",
  (event) => {
    const target = findTiltTarget(event.target);
    if (!target) return;
    const related = asElement(event.relatedTarget);
    if (related && target.contains(related)) return;
    clearTilt(target);
  },
  { passive: true },
);
