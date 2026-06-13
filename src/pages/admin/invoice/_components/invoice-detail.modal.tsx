import { XIcon } from "@/icons";
import type { Invoice } from "@/data/mock-data";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  invoice: Invoice | undefined;
}

export default function InvoiceDetailModal({ open, onOpenChange, invoice }: Props) {
  if (!open || !invoice) return null;

  const statusColors: Record<string, string> = {
    PAID: "bg-green-fill/10 text-green-fill",
    PENDING: "bg-tinker-yellow text-laughing-orange",
    VOIDED: "bg-cake-pink text-munch-pink",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h3>{invoice.number}</h3>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[invoice.status]}`}>
              {invoice.status}
            </span>
          </div>
          <button onClick={() => onOpenChange(false)} className="p-1 hover:bg-gray-100 rounded-lg cursor-pointer">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="text-xs text-vesper-gray">Customer</span>
            <p className="text-sm font-medium text-custom-black">{invoice.customer}</p>
          </div>
          <div>
            <span className="text-xs text-vesper-gray">Clerk</span>
            <p className="text-sm font-medium text-custom-black">{invoice.clerk}</p>
          </div>
          <div>
            <span className="text-xs text-vesper-gray">Term</span>
            <p className="text-sm font-medium text-custom-black">{invoice.term}</p>
          </div>
          <div>
            <span className="text-xs text-vesper-gray">Date</span>
            <p className="text-sm font-medium text-custom-black">{invoice.created_At}</p>
          </div>
        </div>

        {invoice.notes && (
          <div className="mb-6">
            <span className="text-xs text-vesper-gray">Notes</span>
            <p className="text-sm text-custom-black">{invoice.notes}</p>
          </div>
        )}

        <div className="mb-6">
          <h5 className="mb-3">Line Items</h5>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-xs">Product</th>
                <th className="text-right text-xs">Qty</th>
                <th className="text-right text-xs">Unit</th>
                <th className="text-right text-xs">Price</th>
                <th className="text-right text-xs">Total</th>
              </tr>
            </thead>
            <tbody>
              {invoice.lineItems.map((item, i) => (
                <tr key={i} className="border-t border-bellflower-gray">
                  <td className="text-sm">{item.product}</td>
                  <td className="text-sm text-right">{item.quantity}</td>
                  <td className="text-sm text-right">{item.unit}</td>
                  <td className="text-sm text-right">PHP {item.price.toFixed(2)}</td>
                  <td className="text-sm text-right font-semibold">PHP {item.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end gap-4 border-t border-bellflower-gray pt-4">
          <div className="text-right">
            <span className="text-xs text-vesper-gray">Total</span>
            <p className="text-lg font-bold text-custom-black">PHP {invoice.total.toLocaleString()}</p>
          </div>
          {invoice.discount > 0 && (
            <div className="text-right">
              <span className="text-xs text-vesper-gray">Discount</span>
              <p className="text-sm font-medium text-munch-pink">-PHP {invoice.discount.toLocaleString()}</p>
            </div>
          )}
          <div className="text-right">
            <span className="text-xs text-vesper-gray">Balance</span>
            <p className="text-lg font-bold text-custom-black">PHP {invoice.balance.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
