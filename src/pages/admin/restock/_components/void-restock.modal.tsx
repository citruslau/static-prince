import { XIcon } from "@/icons";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function VoidRestockModal({ open, onOpenChange }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3>Void Restock</h3>
          <button onClick={() => onOpenChange(false)} className="p-1 hover:bg-gray-100 rounded-lg cursor-pointer">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-saltbox-gray mb-6">Are you sure you want to void this restock? This action cannot be undone.</p>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-custom-black">Reason for Voiding</label>
          <textarea placeholder="Enter reason..." className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" rows={3} />
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => onOpenChange(false)} className="bg-gray-100 text-custom-black px-4 py-2 rounded-lg text-sm font-semibold max-w-40 hover:bg-gray-200">Cancel</button>
          <button className="bg-munch-pink text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40">Void Restock</button>
        </div>
      </div>
    </div>
  );
}
