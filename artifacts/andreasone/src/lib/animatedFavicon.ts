const SIZE = 64;
const FRAME_MS = 90;

function ensureLink(): HTMLLinkElement {
  document.querySelectorAll<HTMLLinkElement>('link[rel~="icon"]').forEach((node) => {
    if (node.dataset.animated !== "true") node.parentElement?.removeChild(node);
  });
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"][data-animated="true"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.dataset.animated = "true";
    document.head.appendChild(link);
  }
  return link;
}

export function startAnimatedFavicon(): () => void {
  if (typeof document === "undefined") return () => {};

  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const link = ensureLink();
  let raf = 0;
  let lastDraw = 0;
  const start = performance.now();

  const draw = (now: number) => {
    raf = requestAnimationFrame(draw);
    if (now - lastDraw < FRAME_MS) return;
    lastDraw = now;
    if (document.hidden) return;

    const elapsed = (now - start) / 1000;
    const hue1 = (elapsed * 60) % 360;
    const hue2 = (hue1 + 140) % 360;
    const accent = `hsl(${hue1}, 78%, 58%)`;
    const accent2 = `hsl(${hue2}, 70%, 60%)`;
    const angle = Math.sin(elapsed * 1.4) * 0.18;
    const pulse = 1 + Math.sin(elapsed * 3) * 0.06;

    ctx.clearRect(0, 0, SIZE, SIZE);

    ctx.save();
    ctx.translate(SIZE / 2, SIZE / 2);
    ctx.rotate(angle);
    ctx.scale(pulse, pulse);

    ctx.lineWidth = 6;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = accent;
    ctx.beginPath();
    ctx.arc(0, -12, 17, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = accent2;
    ctx.strokeStyle = accent2;
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.lineTo(-20, 22);
    ctx.lineTo(20, 22);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();

    try {
      link.href = canvas.toDataURL("image/png");
    } catch {
      // ignore tainted-canvas errors; nothing to taint here but be safe
    }
  };

  raf = requestAnimationFrame(draw);

  return () => {
    cancelAnimationFrame(raf);
  };
}
