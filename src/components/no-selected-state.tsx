import { MousePointerClickIcon } from "@/icons";

export default function NoSelectedState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 text-vesper-gray">
      <MousePointerClickIcon className="w-16 h-16 opacity-30" />
      <p className="text-sm font-medium">Select an item to view details</p>
    </div>
  );
}
