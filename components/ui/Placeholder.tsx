import { Camera } from "@phosphor-icons/react/dist/ssr";
import s from "./Placeholder.module.css";

interface Props {
  aspect?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Placeholder({
  aspect = "16/9",
  label = "Photo coming soon",
  className,
  style,
}: Props) {
  return (
    <div
      className={`${s.wrap} ${className ?? ""}`}
      style={{ aspectRatio: aspect, ...style }}
    >
      <Camera weight="thin" size={40} className={s.icon} />
      <span className={s.label}>{label}</span>
    </div>
  );
}
