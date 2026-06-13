import { useState } from "react";
import { SearchIcon, PlusIcon } from "@/icons";
import InfoCard from "@/components/info-card";
import NoSelectedState from "@/components/no-selected-state";
import SelectedUser from "@/components/selected-user";
import { mockCustomers } from "@/data/mock-data";
import AddCustomerModal from "./_components/add-customer.modal";
import EditCustomerModal from "./_components/edit-customer.modal";

export default function CustomersPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const filtered = mockCustomers.filter(
    (c) =>
      c.names.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
  );

  const selected = mockCustomers.find((c) => c.customer_Id === selectedId);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2>Customers</h2>
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
                placeholder="Search customers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-style-2"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filtered.map((c) => (
              <InfoCard
                key={c.customer_Id}
                id={c.customer_Id}
                name={c.names}
                subtitle={c.company}
                isSelected={selectedId === c.customer_Id}
                onClick={() => setSelectedId(c.customer_Id)}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl border border-bellflower-gray">
          {selected ? (
            <SelectedUser
              name={selected.names}
              id={selected.customer_Id}
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

      <AddCustomerModal open={addOpen} onOpenChange={setAddOpen} />
      <EditCustomerModal open={editOpen} onOpenChange={setEditOpen} customer={selected ?? null} />
    </section>
  );
}
