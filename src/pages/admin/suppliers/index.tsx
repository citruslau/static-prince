import { useState } from "react";
import { SearchIcon, PlusIcon, FilterIcon } from "@/icons";
import InfoCard from "@/components/info-card";
import NoSelectedState from "@/components/no-selected-state";
import SelectedUser from "@/components/selected-user";
import { mockSuppliers } from "@/data/mock-data";
import AddSupplierModal from "./_components/add-supplier.modal";
import EditSupplierModal from "./_components/edit-supplier.modal";

export default function SuppliersPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const filtered = mockSuppliers.filter(
    (s) =>
      s.names.toLowerCase().includes(search.toLowerCase()) ||
      s.company.toLowerCase().includes(search.toLowerCase())
  );

  const selected = mockSuppliers.find((s) => s.supplier_Id === selectedId);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2>Suppliers</h2>
        <div className="flex gap-2">
          <button onClick={() => setAddOpen(true)} className="flex items-center gap-2 bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40">
            <PlusIcon className="w-4 h-4" /> Add
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
                placeholder="Search suppliers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-style-2"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filtered.map((s) => (
              <InfoCard
                key={s.supplier_Id}
                id={s.supplier_Id}
                name={s.names}
                subtitle={s.company}
                isSelected={selectedId === s.supplier_Id}
                onClick={() => setSelectedId(s.supplier_Id)}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl border border-bellflower-gray">
          {selected ? (
            <SelectedUser
              name={selected.names}
              id={selected.supplier_Id}
              email={selected.email}
              contact={selected.contact}
              address={selected.address}
              notes={selected.notes}
            />
          ) : (
            <NoSelectedState />
          )}
        </div>
      </div>

      <AddSupplierModal open={addOpen} onOpenChange={setAddOpen} />
      <EditSupplierModal open={editOpen} onOpenChange={setEditOpen} supplier={selected ?? null} />
    </section>
  );
}
