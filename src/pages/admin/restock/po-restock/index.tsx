import { useNavigate } from "react-router-dom";
import { LeftArrowIcon } from "@/icons";

export default function PORestockPage() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate("/admin/restock")} className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <LeftArrowIcon className="w-5 h-5" />
        </button>
        <h2>PO Restock</h2>
      </div>

      <div className="bg-white rounded-xl border border-bellflower-gray p-6">
        <div className="flex flex-col items-center justify-center h-64 text-vesper-gray">
          <p className="text-sm font-medium">Purchase Order Restock</p>
          <p className="text-xs">This page handles restocking from purchase orders.</p>
          <p className="text-xs mt-2 text-blouse-gray">Select a pending restock with a PO number to begin.</p>
        </div>
      </div>
    </section>
  );
}
