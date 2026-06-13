import { useState } from "react";
import { SearchIcon, PlusIcon } from "@/icons";
import InfoCard from "@/components/info-card";
import NoSelectedState from "@/components/no-selected-state";
import SelectedUser from "@/components/selected-user";
import { mockEmployees } from "@/data/mock-data";
import AddEmployeeModal from "./_components/add-employee.modal";
import EditEmployeeModal from "./_components/edit-employee.modal";

export default function EmployeesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const filtered = mockEmployees.filter(
    (e) =>
      e.names.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase())
  );

  const selected = mockEmployees.find((e) => e.employee_Id === selectedId);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2>Employees</h2>
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
                placeholder="Search employees..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-style-2"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filtered.map((e) => (
              <InfoCard
                key={e.employee_Id}
                id={e.employee_Id}
                name={e.names}
                subtitle={e.role}
                isSelected={selectedId === e.employee_Id}
                onClick={() => setSelectedId(e.employee_Id)}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl border border-bellflower-gray">
          {selected ? (
            <SelectedUser
              name={selected.names}
              id={selected.employee_Id}
              email={selected.email}
              contact={selected.contact}
              address="Manila, Philippines"
              notes={`Role: ${selected.role} | Status: ${selected.status}`}
              role={selected.role}
            />
          ) : (
            <NoSelectedState />
          )}
        </div>
      </div>

      <AddEmployeeModal open={addOpen} onOpenChange={setAddOpen} />
      <EditEmployeeModal open={editOpen} onOpenChange={setEditOpen} employee={selected} />
    </section>
  );
}
