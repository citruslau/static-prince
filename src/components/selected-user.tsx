import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserIcon, PhoneIcon, MailIcon, PinIcon } from "@/icons";

interface SelectedUserProps {
  name: string;
  id: string;
  email: string;
  contact: string;
  address: string;
  notes: string;
  role?: string;
}

export default function SelectedUser({ name, id, email, contact, address, notes, role }: SelectedUserProps) {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 px-6 py-4 border-b border-bellflower-gray">
        <div className="w-14 h-14 rounded-full bg-cake-pink flex items-center justify-center text-lg font-bold text-munch-pink">
          {name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-custom-black">{name}</h4>
          <span className="text-sm text-vesper-gray">{id}</span>
          {role && <span className="text-xs text-blouse-gray ml-2">({role})</span>}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="mx-6 mt-4">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="flex-1 px-6 py-4 space-y-4 overflow-y-auto">
          <div className="flex items-center gap-3">
            <UserIcon className="w-4 h-4 text-vesper-gray" />
            <div>
              <span className="text-xs text-vesper-gray">Name</span>
              <p className="text-sm font-medium text-custom-black">{name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MailIcon className="w-4 h-4 text-vesper-gray" />
            <div>
              <span className="text-xs text-vesper-gray">Email</span>
              <p className="text-sm font-medium text-custom-black">{email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-4 h-4 text-vesper-gray" />
            <div>
              <span className="text-xs text-vesper-gray">Contact</span>
              <p className="text-sm font-medium text-custom-black">{contact}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <PinIcon className="w-4 h-4 text-vesper-gray" />
            <div>
              <span className="text-xs text-vesper-gray">Address</span>
              <p className="text-sm font-medium text-custom-black">{address}</p>
            </div>
          </div>
          {notes && (
            <div className="mt-4">
              <span className="text-xs text-vesper-gray">Notes</span>
              <p className="text-sm text-custom-black">{notes}</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="activity" className="flex-1 px-6 py-4 overflow-y-auto">
          <p className="text-sm text-vesper-gray">No recent activity</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
