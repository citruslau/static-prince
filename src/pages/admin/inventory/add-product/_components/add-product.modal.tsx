import { useState } from "react";
import { XIcon } from "@/icons";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddProductModal({ open, onOpenChange }: Props) {
  const [step, setStep] = useState(1);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3>Add New Product</h3>
          <button onClick={() => { onOpenChange(false); setStep(1); }} className="p-1 hover:bg-gray-100 rounded-lg cursor-pointer">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-6">
          {["Brand", "Category", "Item", "Variant"].map((s, i) => (
            <div key={s} className={`flex items-center gap-2 ${i + 1 <= step ? "text-river-green" : "text-vesper-gray"}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i + 1 <= step ? "bg-river-green text-white" : "bg-gray-100 text-vesper-gray"}`}>
                {i + 1}
              </span>
              <span className="text-xs font-medium">{s}</span>
              {i < 3 && <div className="w-8 h-px bg-bellflower-gray mx-1" />}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {step === 1 && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-custom-black">Brand Name</label>
                <input type="text" placeholder="e.g., Pilot, Victoria" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
              </div>
              <button onClick={() => setStep(2)} className="bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40">Next</button>
            </>
          )}
          {step === 2 && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-custom-black">Category Name</label>
                <input type="text" placeholder="e.g., Office Supplies" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
              </div>
              <div className="flex gap-2">
                <button onClick={() => setStep(1)} className="bg-gray-100 text-custom-black px-4 py-2 rounded-lg text-sm font-semibold max-w-40 hover:bg-gray-200">Back</button>
                <button onClick={() => setStep(3)} className="bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40">Next</button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-custom-black">Item Name</label>
                <input type="text" placeholder="e.g., Ballpen Blue" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-custom-black">Item Code</label>
                <input type="text" placeholder="e.g., BPP-BLU-001" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
              </div>
              <div className="flex gap-2">
                <button onClick={() => setStep(2)} className="bg-gray-100 text-custom-black px-4 py-2 rounded-lg text-sm font-semibold max-w-40 hover:bg-gray-200">Back</button>
                <button onClick={() => setStep(4)} className="bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40">Next</button>
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-custom-black">Variant</label>
                <input type="text" placeholder="e.g., Fine Point, 22g" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-custom-black">Initial Quantity</label>
                <input type="number" placeholder="0" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
              </div>
              <div className="flex gap-2">
                <button onClick={() => setStep(3)} className="bg-gray-100 text-custom-black px-4 py-2 rounded-lg text-sm font-semibold max-w-40 hover:bg-gray-200">Back</button>
                <button className="bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40">Add Product</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
