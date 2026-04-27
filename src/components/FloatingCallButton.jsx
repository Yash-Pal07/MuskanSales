export default function FloatingCallButton({ phoneRaw }) {
  return (
    <a className="floating-call" href={`tel:${phoneRaw}`} aria-label="Call Muskan Sales">
      📞
    </a>
  );
}
