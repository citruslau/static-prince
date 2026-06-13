import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon, EditIcon } from "@/icons";
import type { InventoryProduct } from "@/data/mock-data";

interface Props {
  product: InventoryProduct;
}

export default function SelectedProduct({ product }: Props) {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-6 py-4 border-b border-bellflower-gray">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-blue-bg flex items-center justify-center text-lg font-bold text-blue-fill">
            {product.product.code.split("-")[0]}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-semibold text-custom-black">{product.product.name}</h4>
              {product.isFavorited && <StarIcon className="w-4 h-4 text-laughing-orange fill-laughing-orange" />}
            </div>
            <span className="text-sm text-vesper-gray">{product.product.code}</span>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-white border border-bellflower-gray text-custom-black px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 max-w-40 cursor-pointer">
          <EditIcon className="w-4 h-4" /> Edit
        </button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="mx-6 mt-4">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="units">Unit Presets</TabsTrigger>
          <TabsTrigger value="restock">Restock Info</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="flex-1 px-6 py-4 space-y-4 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-vesper-gray">Brand</span>
              <p className="text-sm font-medium text-custom-black">{product.brand}</p>
            </div>
            <div>
              <span className="text-xs text-vesper-gray">Variant</span>
              <p className="text-sm font-medium text-custom-black">{product.variant}</p>
            </div>
            <div>
              <span className="text-xs text-vesper-gray">Category</span>
              <p className="text-sm font-medium text-custom-black">{product.category}</p>
            </div>
            <div>
              <span className="text-xs text-vesper-gray">Quantity</span>
              <p className="text-sm font-medium text-custom-black">{product.product.qty}</p>
            </div>
            <div>
              <span className="text-xs text-vesper-gray">Status</span>
              <p className="text-sm font-medium text-custom-black">{product.product.active ? "Active" : "Inactive"}</p>
            </div>
            <div>
              <span className="text-xs text-vesper-gray">Complete</span>
              <p className="text-sm font-medium text-custom-black">{product.isComplete ? "Yes" : "No"}</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="units" className="flex-1 px-6 py-4 overflow-y-auto">
          {product.unitPresets.map((preset) => (
            <div key={preset.preset_Code} className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-custom-black">{preset.preset_Name}</span>
                <span className="text-xs text-vesper-gray">({preset.preset_Code})</span>
              </div>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-xs">Unit</th>
                    <th className="text-left text-xs">Conversion</th>
                    <th className="text-right text-xs">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {preset.units.map((u) => (
                    <tr key={u.uom_ID} className="border-t border-bellflower-gray">
                      <td className="text-sm">{u.uom_Name}</td>
                      <td className="text-sm">{u.conversion_Factor}</td>
                      <td className="text-sm text-right">PHP {u.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="restock" className="flex-1 px-6 py-4 overflow-y-auto">
          {product.restockInfo.map((info, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-bellflower-gray last:border-0">
              <div>
                <span className="text-sm font-medium text-custom-black">{info.supplier}</span>
                <p className="text-xs text-vesper-gray">Batch: {info.batchNo}</p>
              </div>
              <span className="text-xs text-blouse-gray">{info.lastRestock}</span>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
