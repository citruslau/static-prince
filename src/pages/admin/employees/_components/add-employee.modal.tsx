import { XIcon } from "@/icons";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddEmployeeModal({ open, onOpenChange }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h3>Add Employee</h3>
          <button onClick={() => onOpenChange(false)} className="p-1 hover:bg-gray-100 rounded-lg cursor-pointer">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-custom-black">Full Name</label>
            <input type="text" placeholder="Enter full name" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-custom-black">Username</label>
            <input type="text" placeholder="Enter username" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-custom-black">Email</label>
            <input type="email" placeholder="Enter email" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-custom-black">Role</label>
              <select className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm">
                <option>Select role</option>
                <option>Administrator</option>
                <option>Inventory Clerk</option>
                <option>Cashier</option>
                <option>Staff</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-custom-black">Contact</label>
              <input type="text" placeholder="Phone number" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-custom-black">Password</label>
            <input type="password" placeholder="Enter password" className="w-full rounded-lg border border-bellflower-gray px-4 py-3 text-sm" />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => onOpenChange(false)} className="bg-gray-100 text-custom-black px-4 py-2 rounded-lg text-sm font-semibold max-w-40 hover:bg-gray-200">Cancel</button>
          <button className="bg-river-green text-white px-4 py-2 rounded-lg text-sm font-semibold max-w-40">Save Employee</button>
        </div>
      </div>
    </div>
  );
}
