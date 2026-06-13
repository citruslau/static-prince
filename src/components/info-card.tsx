import { cn } from "@/lib/utils";

interface InfoCardProps {
  id: string;
  name: string;
  subtitle: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function InfoCard({ id, name, subtitle, isSelected, onClick }: InfoCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-200 border-b border-bellflower-gray hover:bg-white",
        isSelected && "bg-white border-l-2 border-l-river-green"
      )}
    >
      <div className="w-10 h-10 rounded-full bg-blue-bg flex items-center justify-center text-sm font-bold text-blue-fill shrink-0">
        {name.slice(0, 2).toUpperCase()}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="info-name text-sm font-semibold truncate">{name}</span>
        <span className="info-id text-xs">{id}</span>
        <span className="text-xs text-blouse-gray truncate">{subtitle}</span>
      </div>
    </div>
  );
}
