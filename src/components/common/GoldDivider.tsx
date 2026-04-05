export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
    </div>
  );
}
