import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon, BoxIcon } from "@/icons";
import { mockRestocks } from "@/data/mock-data";
import VoidRestockModal from "./_components/void-restock.modal";

export default function RestockPage() {
  const navigate = useNavigate();
  const [voidOpen, setVoidOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const statusColors: Record<string, string> = {
    COMPLETED: "bg-green-fill/10 text-green-fill",
    PENDING: "bg-tinker-yellow text-laughing-orange",
    VOIDED: "bg-cake-pink text-munch-pink",
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2>Restock</h2>
        <button
          onClick={() => navigate("/admin/restock/new")}
          className="flex items-center gap-2 bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40"
        >
          <PlusIcon className="w-4 h-4" /> New Restock
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {mockRestocks.map((rs) => (
          <div
            key={rs.restock_Id}
            className="bg-white rounded-xl border border-bellflower-gray p-5 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BoxIcon className="w-5 h-5 text-vesper-gray" />
                <span className="text-sm font-bold text-custom-black">{rs.number}</span>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[rs.status]}`}>
                {rs.status}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-vesper-gray">Supplier</span>
                <span className="text-xs font-medium text-custom-black">{rs.supplier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-vesper-gray">Items</span>
                <span className="text-xs font-medium text-custom-black">{rs.line_Items.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-vesper-gray">Date</span>
                <span className="text-xs text-blouse-gray">{rs.created_At}</span>
              </div>
              {rs.purchase_order_number && (
                <div className="flex justify-between">
                  <span className="text-xs text-vesper-gray">PO Number</span>
                  <span className="text-xs font-medium text-custom-black">{rs.purchase_order_number}</span>
                </div>
              )}
            </div>
            {rs.status === "PENDING" && (
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => { setSelectedId(rs.restock_Id); setVoidOpen(true); }}
                  className="text-xs text-munch-pink hover:underline cursor-pointer bg-transparent p-0 max-w-none"
                >
                  Void
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <VoidRestockModal open={voidOpen} onOpenChange={setVoidOpen} />
    </section>
  );
}
