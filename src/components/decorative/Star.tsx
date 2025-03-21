import { ComponentWithClassName } from "@/types/common";

export const Star = ({ className }: ComponentWithClassName) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.85 8.3L22 9.3L17 14.1L18.18 21L12 17.77L5.82 21L7 14.1L2 9.3L9.15 8.3L12 2Z" />
    </svg>
  </div>
);

export const GlowCircle = ({ className }: ComponentWithClassName) => (
  <div className={`absolute rounded-full blur-sm ${className}`}></div>
); 