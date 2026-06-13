import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeftArrowIcon, PlusIcon, TrashIcon } from "@/icons";
import { mockProducts } from "@/data/mock-data";

interface LineItem {
  product: string;
  quantity: number;
  unit: string;
  price: number;
  total: number;
}

export default function NewInvoicePage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<LineItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  const addItem = () => {
    if (!selectedProduct) return;
    const p = mockProducts.find((p) => p.product.name === selectedProduct);
    if (!p) return;
    setItems([
      ...items,
      { product: p.product.name, quantity: 1, unit: "Piece", price: p.unitPresets[0]?.units[0]?.price || 0, total: p.unitPresets[0]?.units[0]?.price || 0 },
    ]);
    setSelectedProduct("");
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const total = items.reduce((sum, item) => sum + item.total, 0);

  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate("/admin/invoice")} className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <LeftArrowIcon className="w-5 h-5" />
        </button>
        <h2>New Invoice</h2>
      </div>

      <div className="flex gap-4 h-[calc(100vh-180px)]">
        <div className="w-80 bg-white rounded-xl border border-bellflower-gray flex flex-col">
          <div className="p-3 border-b border-bellflower-gray">
            <h6 className="text-sm">Products</h6>
          </div>
          <div className="flex-1 overflow-y-auto">
            {mockProducts.map((p) => (
              <div
                key={p.product.ID}
                onClick={() => setSelectedProduct(p.product.name)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-200 border-b border-bellflower-gray hover:bg-white ${
                  selectedProduct === p.product.name ? "bg-river-green/10 border-l-2 border-l-river-green" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-bg flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-blue-fill">{p.product.code.split("-")[0]}</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="info-name text-sm font-semibold truncate">{p.product.name}</span>
                  <span className="text-xs text-blouse-gray">PHP {p.unitPresets[0]?.units[0]?.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-bellflower-gray">
            <button onClick={addItem} className="bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold w-full cursor-pointer">
              Add to Invoice
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl border border-bellflower-gray flex flex-col">
          <div className="p-4 border-b border-bellflower-gray">
            <h5>Invoice Card</h5>
            <span className="text-xs text-vesper-gray">#INV-2026-NEW</span>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-vesper-gray">
                <p className="text-sm">No items added yet</p>
                <p className="text-xs">Select products from the left panel</p>
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-xs">Product</th>
                    <th className="text-right text-xs">Qty</th>
                    <th className="text-right text-xs">Price</th>
                    <th className="text-right text-xs">Total</th>
                    <th className="text-right text-xs"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={i} className="border-t border-bellflower-gray">
                      <td className="text-sm">{item.product}</td>
                      <td className="text-sm text-right">{item.quantity}</td>
                      <td className="text-sm text-right">PHP {item.price.toFixed(2)}</td>
                      <td className="text-sm text-right font-semibold">PHP {item.total.toLocaleString()}</td>
                      <td className="text-right">
                        <button onClick={() => removeItem(i)} className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                          <TrashIcon className="w-4 h-4 text-munch-pink" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="p-4 border-t border-bellflower-gray flex justify-between items-center">
            <span className="text-sm font-medium text-vesper-gray">{items.length} items</span>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-custom-black">Total: PHP {total.toLocaleString()}</span>
              <button className="bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40 cursor-pointer">Save Invoice</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
