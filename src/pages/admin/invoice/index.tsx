import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon, FileTextIcon } from "@/icons";
import { mockInvoices } from "@/data/mock-data";
import InvoiceDetailModal from "./_components/invoice-detail.modal";

export default function InvoicePage() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const selected = mockInvoices.find((i) => i.invoice_ID === selectedId);

  const statusColors: Record<string, string> = {
    PAID: "bg-green-fill/10 text-green-fill",
    PENDING: "bg-tinker-yellow text-laughing-orange",
    VOIDED: "bg-cake-pink text-munch-pink",
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2>Invoices</h2>
        <button
          onClick={() => navigate("/admin/invoice/new")}
          className="flex items-center gap-2 bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40"
        >
          <PlusIcon className="w-4 h-4" /> New Invoice
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {mockInvoices.map((inv) => (
          <div
            key={inv.invoice_ID}
            onClick={() => { setSelectedId(inv.invoice_ID); setDetailOpen(true); }}
            className="bg-white rounded-xl border border-bellflower-gray p-5 cursor-pointer hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileTextIcon className="w-5 h-5 text-vesper-gray" />
                <span className="text-sm font-bold text-custom-black">{inv.number}</span>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[inv.status]}`}>
                {inv.status}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-vesper-gray">Customer</span>
                <span className="text-xs font-medium text-custom-black">{inv.customer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-vesper-gray">Total</span>
                <span className="text-xs font-bold text-custom-black">PHP {inv.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-vesper-gray">Date</span>
                <span className="text-xs text-blouse-gray">{inv.created_At}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <InvoiceDetailModal open={detailOpen} onOpenChange={setDetailOpen} invoice={selected} />
    </section>
  );
}
