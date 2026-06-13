import { useState } from "react";
import { SearchIcon, PlusIcon, StarIcon, FilterIcon } from "@/icons";
import { mockProducts } from "@/data/mock-data";
import type { InventoryProduct } from "@/data/mock-data";
import NoSelectedState from "@/components/no-selected-state";
import SelectedProduct from "./_components/selected-product";
import AddProductModal from "./add-product/_components/add-product.modal";

export default function InventoryPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [addOpen, setAddOpen] = useState(false);

  const filtered = mockProducts.filter(
    (p) =>
      p.product.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const selected = mockProducts.find((p) => p.product.ID === selectedId) || null;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2>Inventory</h2>
        <div className="flex gap-2">
          <button onClick={() => setAddOpen(true)} className="flex items-center gap-2 bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40">
            <PlusIcon className="w-4 h-4" /> Add Product
          </button>
        </div>
      </div>

      <div className="flex gap-4 h-[calc(100vh-180px)]">
        <div className="w-80 bg-white rounded-xl border border-bellflower-gray flex flex-col">
          <div className="p-3 border-b border-bellflower-gray">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-vesper-gray" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-style-2"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filtered.map((p) => (
              <div
                key={p.product.ID}
                onClick={() => setSelectedId(p.product.ID)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-200 border-b border-bellflower-gray hover:bg-white ${
                  selectedId === p.product.ID ? "bg-white border-l-2 border-l-river-green" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-bg flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-blue-fill">
                    {p.product.code.split("-")[0]}
                  </span>
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="info-name text-sm font-semibold truncate">{p.product.name}</span>
                    {p.isFavorited && <StarIcon className="w-3 h-3 text-laughing-orange fill-laughing-orange shrink-0" />}
                  </div>
                  <span className="info-id text-xs">{p.product.code}</span>
                  <span className="text-xs text-blouse-gray">{p.brand} - {p.category}</span>
                </div>
                <span className="text-xs font-semibold text-saltbox-gray">{p.product.qty}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl border border-bellflower-gray">
          {selected ? (
            <SelectedProduct product={selected} />
          ) : (
            <NoSelectedState />
          )}
        </div>
      </div>

      <AddProductModal open={addOpen} onOpenChange={setAddOpen} />
    </section>
  );
}
