// ============ INTERFACES ============

export interface Supplier {
  supplier_Id: string;
  names: string;
  company: string;
  contact: string;
  email: string;
  address: string;
  notes: string;
  total_Restock_Value: number;
}

export interface Customer {
  customer_Id: string;
  names: string;
  company: string;
  contact: string;
  email: string;
  address: string;
  notes: string;
}

export interface Unit {
  uom_Name: string;
  uom_ID: string;
  conversion_Factor: number;
  price: number;
}

export interface UnitPreset {
  preset_Code: string;
  preset_Name: string;
  units: Unit[];
}

export interface Product {
  ID: string;
  code: string;
  name: string;
  qty: number;
  active: boolean;
}

export interface InventoryProduct {
  product: Product;
  brand: string;
  variant: string;
  category: string;
  unitPresets: UnitPreset[];
  restockInfo: { supplier: string; lastRestock: string; batchNo: string }[];
  isComplete: boolean;
  isFavorited: boolean;
}

export interface Employee {
  employee_Id: string;
  names: string;
  username: string;
  role: string;
  email: string;
  contact: string;
  status: string;
}

export interface InvoiceLineItem {
  product: string;
  quantity: number;
  unit: string;
  price: number;
  total: number;
}

export interface Invoice {
  invoice_ID: string;
  number: string;
  notes: string;
  total: number;
  discount: number;
  balance: number;
  status: "PAID" | "PENDING" | "VOIDED";
  term: string;
  customer: string;
  clerk: string;
  created_At: string;
  lineItems: InvoiceLineItem[];
}

export interface RestockLineItem {
  product: string;
  quantity: number;
  unit: string;
  price: number;
  total: number;
}

export interface Restock {
  restock_Id: string;
  number: string;
  notes: string;
  purchase_order_number?: string;
  status: "COMPLETED" | "PENDING" | "VOIDED";
  clerk: string;
  supplier: string;
  created_At: string;
  line_Items: RestockLineItem[];
}

// ============ MOCK DATA ============

export const mockSuppliers: Supplier[] = [
  {
    supplier_Id: "SUP-001",
    names: "Manuel Reyes",
    company: "ABC Supplies Co.",
    contact: "09171234567",
    email: "manuel@abcsupplies.com",
    address: "123 Rizal Ave, Manila, Philippines",
    notes: "Primary supplier for office supplies",
    total_Restock_Value: 150000,
  },
  {
    supplier_Id: "SUP-002",
    names: "Maria Garcia",
    company: "Global Educational Materials",
    contact: "09221234567",
    email: "maria@globaledu.com",
    address: "456 Osmeña Blvd, Cebu, Philippines",
    notes: "Specializes in educational books and materials",
    total_Restock_Value: 95000,
  },
  {
    supplier_Id: "SUP-003",
    names: "Jose Santos",
    company: "Philippine School Supplies Inc.",
    contact: "09331234567",
    email: "jose@philschoolsupplies.com",
    address: "789 Roxas St, Davao, Philippines",
    notes: "Bulk orders available for school supplies",
    total_Restock_Value: 200000,
  },
  {
    supplier_Id: "SUP-004",
    names: "Anna Lim",
    company: "National Bookstore Trading",
    contact: "09181234567",
    email: "anna@nationalbookstore.com",
    address: "321 EDSA, Quezon City, Philippines",
    notes: "Authorized distributor of national brands",
    total_Restock_Value: 175000,
  },
  {
    supplier_Id: "SUP-005",
    names: "Pedro Cruz",
    company: "Mindanao Educational Supply",
    contact: "09191234567",
    email: "pedro@mindanaoedu.com",
    address: "654 Zamboanga Rd, Zamboanga, Philippines",
    notes: "Regional supplier for Mindanao area",
    total_Restock_Value: 80000,
  },
];

export const mockCustomers: Customer[] = [
  {
    customer_Id: "CUS-001",
    names: "Mr. Roberto Silva",
    company: "San Juan Elementary School",
    contact: "09171111111",
    email: "roberto@sanjuan.edu.ph",
    address: "San Juan, Metro Manila",
    notes: "Regular school customer",
  },
  {
    customer_Id: "CUS-002",
    names: "Ms. Teresa Aquino",
    company: "Rainbow Kids Academy",
    contact: "09222222222",
    email: "teresa@rainbowkids.com",
    address: "Makati City, Metro Manila",
    notes: "Kindergarten and preschool supplies",
  },
  {
    customer_Id: "CUS-003",
    names: "Mr. David Chen",
    company: "Bright Future Learning Center",
    contact: "09333333333",
    email: "david@brightfuture.com",
    address: "Pasig City, Metro Manila",
    notes: "After-school program center",
  },
  {
    customer_Id: "CUS-004",
    names: "Sr. Maria Consolacion",
    company: "St. Mary's Academy",
    contact: "09184444444",
    email: "maria@stmarys.edu.ph",
    address: "Quezon City, Metro Manila",
    notes: "Catholic school, bulk orders quarterly",
  },
  {
    customer_Id: "CUS-005",
    names: "Dr. Angela Ramos",
    company: "Prince Learning Institute",
    contact: "09195555555",
    email: "angela@princelearning.com",
    address: "Taguig City, Metro Manila",
    notes: "Tutorial and review center",
  },
];

export const mockProducts: InventoryProduct[] = [
  {
    product: { ID: "PRD-001", code: "BPP-BLU-001", name: "Ballpen Blue", qty: 500, active: true },
    brand: "Pilot",
    variant: "Fine Point",
    category: "Office Supplies",
    unitPresets: [
      {
        preset_Code: "PCS",
        preset_Name: "Pieces",
        units: [
          { uom_Name: "Piece", uom_ID: "UOM-001", conversion_Factor: 1, price: 5 },
          { uom_Name: "Box", uom_ID: "UOM-002", conversion_Factor: 50, price: 200 },
        ],
      },
    ],
    restockInfo: [
      { supplier: "ABC Supplies Co.", lastRestock: "2026-05-15", batchNo: "BAT-2026-001" },
    ],
    isComplete: true,
    isFavorited: true,
  },
  {
    product: { ID: "PRD-002", code: "NBT-200-001", name: "Notebook 200 Pages", qty: 300, active: true },
    brand: "Victoria",
    variant: "Wide Ruled",
    category: "Paper Products",
    unitPresets: [
      {
        preset_Code: "PCS",
        preset_Name: "Pieces",
        units: [
          { uom_Name: "Piece", uom_ID: "UOM-003", conversion_Factor: 1, price: 25 },
          { uom_Name: "Pack", uom_ID: "UOM-004", conversion_Factor: 10, price: 200 },
        ],
      },
    ],
    restockInfo: [
      { supplier: "Philippine School Supplies Inc.", lastRestock: "2026-05-10", batchNo: "BAT-2026-002" },
    ],
    isComplete: true,
    isFavorited: false,
  },
  {
    product: { ID: "PRD-003", code: "MNP-SHT-001", name: "Manila Paper (Short)", qty: 200, active: true },
    brand: "Phoenix",
    variant: "Colored Assorted",
    category: "Art Supplies",
    unitPresets: [
      {
        preset_Code: "PCS",
        preset_Name: "Pieces",
        units: [
          { uom_Name: "Piece", uom_ID: "UOM-005", conversion_Factor: 1, price: 3 },
          { uom_Name: "Ream", uom_ID: "UOM-006", conversion_Factor: 500, price: 1200 },
        ],
      },
    ],
    restockInfo: [
      { supplier: "Global Educational Materials", lastRestock: "2026-04-20", batchNo: "BAT-2026-003" },
    ],
    isComplete: true,
    isFavorited: true,
  },
  {
    product: { ID: "PRD-004", code: "CHK-WHT-001", name: "Chalk White", qty: 800, active: true },
    brand: "Pentel",
    variant: "Dustless",
    category: "Classroom Supplies",
    unitPresets: [
      {
        preset_Code: "BOX",
        preset_Name: "Boxes",
        units: [
          { uom_Name: "Piece", uom_ID: "UOM-007", conversion_Factor: 1, price: 2 },
          { uom_Name: "Box", uom_ID: "UOM-008", conversion_Factor: 100, price: 150 },
        ],
      },
    ],
    restockInfo: [
      { supplier: "ABC Supplies Co.", lastRestock: "2026-05-01", batchNo: "BAT-2026-004" },
    ],
    isComplete: true,
    isFavorited: false,
  },
  {
    product: { ID: "PRD-005", code: "RLR-12I-001", name: "Ruler 12-inch", qty: 150, active: true },
    brand: "Omni",
    variant: "Plastic Clear",
    category: "Measuring Tools",
    unitPresets: [
      {
        preset_Code: "PCS",
        preset_Name: "Pieces",
        units: [
          { uom_Name: "Piece", uom_ID: "UOM-009", conversion_Factor: 1, price: 15 },
        ],
      },
    ],
    restockInfo: [
      { supplier: "National Bookstore Trading", lastRestock: "2026-04-25", batchNo: "BAT-2026-005" },
    ],
    isComplete: true,
    isFavorited: false,
  },
  {
    product: { ID: "PRD-006", code: "SCR-MED-001", name: "Scissors Medium", qty: 100, active: true },
    brand: "Maped",
    variant: "170mm",
    category: "Office Supplies",
    unitPresets: [
      {
        preset_Code: "PCS",
        preset_Name: "Pieces",
        units: [
          { uom_Name: "Piece", uom_ID: "UOM-010", conversion_Factor: 1, price: 45 },
        ],
      },
    ],
    restockInfo: [
      { supplier: "ABC Supplies Co.", lastRestock: "2026-05-12", batchNo: "BAT-2026-006" },
    ],
    isComplete: true,
    isFavorited: true,
  },
  {
    product: { ID: "PRD-007", code: "GLU-STK-001", name: "Glue Stick", qty: 250, active: true },
    brand: "Elmer's",
    variant: "22g",
    category: "Adhesives",
    unitPresets: [
      {
        preset_Code: "PCS",
        preset_Name: "Pieces",
        units: [
          { uom_Name: "Piece", uom_ID: "UOM-011", conversion_Factor: 1, price: 35 },
          { uom_Name: "Pack", uom_ID: "UOM-012", conversion_Factor: 12, price: 350 },
        ],
      },
    ],
    restockInfo: [
      { supplier: "Global Educational Materials", lastRestock: "2026-05-08", batchNo: "BAT-2026-007" },
    ],
    isComplete: true,
    isFavorited: false,
  },
  {
    product: { ID: "PRD-008", code: "PCL-N02-001", name: "Pencil #2", qty: 600, active: true },
    brand: "Mongol",
    variant: "Standard",
    category: "Writing Instruments",
    unitPresets: [
      {
        preset_Code: "PCS",
        preset_Name: "Pieces",
        units: [
          { uom_Name: "Piece", uom_ID: "UOM-013", conversion_Factor: 1, price: 8 },
          { uom_Name: "Dozen", uom_ID: "UOM-014", conversion_Factor: 12, price: 80 },
          { uom_Name: "Box", uom_ID: "UOM-015", conversion_Factor: 50, price: 300 },
        ],
      },
    ],
    restockInfo: [
      { supplier: "Philippine School Supplies Inc.", lastRestock: "2026-05-18", batchNo: "BAT-2026-008" },
    ],
    isComplete: true,
    isFavorited: true,
  },
];

export const mockEmployees: Employee[] = [
  {
    employee_Id: "EMP-001",
    names: "Admin User",
    username: "admin1",
    role: "Administrator",
    email: "admin@prince.com",
    contact: "09170000001",
    status: "Active",
  },
  {
    employee_Id: "EMP-002",
    names: "Juan Dela Cruz",
    username: "juancruz",
    role: "Inventory Clerk",
    email: "juan@prince.com",
    contact: "09170000002",
    status: "Active",
  },
  {
    employee_Id: "EMP-003",
    names: "Maria Santos",
    username: "mariasantos",
    role: "Cashier",
    email: "maria@prince.com",
    contact: "09170000003",
    status: "Active",
  },
  {
    employee_Id: "EMP-004",
    names: "Pedro Reyes",
    username: "pedroreyes",
    role: "Staff",
    email: "pedro@prince.com",
    contact: "09170000004",
    status: "Active",
  },
];

export const mockInvoices: Invoice[] = [
  {
    invoice_ID: "INV-001",
    number: "INV-2026-001",
    notes: "School supplies order for Q2",
    total: 2500,
    discount: 0,
    balance: 0,
    status: "PAID",
    term: "Cash",
    customer: "San Juan Elementary School",
    clerk: "Juan Dela Cruz",
    created_At: "2026-05-20",
    lineItems: [
      { product: "Ballpen Blue", quantity: 100, unit: "Piece", price: 5, total: 500 },
      { product: "Notebook 200 Pages", quantity: 50, unit: "Piece", price: 25, total: 1250 },
      { product: "Pencil #2", quantity: 100, unit: "Piece", price: 8, total: 800 },
    ],
  },
  {
    invoice_ID: "INV-002",
    number: "INV-2026-002",
    notes: "Preschool materials",
    total: 1800,
    discount: 50,
    balance: 1750,
    status: "PENDING",
    term: "30 Days",
    customer: "Rainbow Kids Academy",
    clerk: "Maria Santos",
    created_At: "2026-05-25",
    lineItems: [
      { product: "Chalk White", quantity: 200, unit: "Piece", price: 2, total: 400 },
      { product: "Manila Paper (Short)", quantity: 100, unit: "Piece", price: 3, total: 300 },
      { product: "Glue Stick", quantity: 20, unit: "Piece", price: 35, total: 700 },
      { product: "Scissors Medium", quantity: 10, unit: "Piece", price: 45, total: 450 },
    ],
  },
  {
    invoice_ID: "INV-003",
    number: "INV-2026-003",
    notes: "Learning center supplies",
    total: 3200,
    discount: 100,
    balance: 0,
    status: "PAID",
    term: "Cash",
    customer: "Bright Future Learning Center",
    clerk: "Juan Dela Cruz",
    created_At: "2026-06-01",
    lineItems: [
      { product: "Notebook 200 Pages", quantity: 80, unit: "Piece", price: 25, total: 2000 },
      { product: "Ruler 12-inch", quantity: 50, unit: "Piece", price: 15, total: 750 },
      { product: "Pencil #2", quantity: 50, unit: "Dozen", price: 80, total: 450 },
    ],
  },
  {
    invoice_ID: "INV-004",
    number: "INV-2026-004",
    notes: "Cancelled order",
    total: 950,
    discount: 0,
    balance: 950,
    status: "VOIDED",
    term: "Cash",
    customer: "St. Mary's Academy",
    clerk: "Maria Santos",
    created_At: "2026-06-05",
    lineItems: [
      { product: "Ballpen Blue", quantity: 50, unit: "Piece", price: 5, total: 250 },
      { product: "Chalk White", quantity: 100, unit: "Box", price: 150, total: 150 },
      { product: "Glue Stick", quantity: 5, unit: "Pack", price: 350, total: 1750 },
    ],
  },
];

export const mockRestocks: Restock[] = [
  {
    restock_Id: "RS-001",
    number: "RS-2026-001",
    notes: "Quarterly restock for office supplies",
    purchase_order_number: "PO-2026-001",
    status: "COMPLETED",
    clerk: "Juan Dela Cruz",
    supplier: "ABC Supplies Co.",
    created_At: "2026-05-15",
    line_Items: [
      { product: "Ballpen Blue", quantity: 200, unit: "Box", price: 200, total: 40000 },
      { product: "Chalk White", quantity: 50, unit: "Box", price: 150, total: 7500 },
      { product: "Scissors Medium", quantity: 50, unit: "Piece", price: 45, total: 2250 },
    ],
  },
  {
    restock_Id: "RS-002",
    number: "RS-2026-002",
    notes: "Paper products restock",
    status: "PENDING",
    clerk: "Maria Santos",
    supplier: "Global Educational Materials",
    created_At: "2026-06-01",
    line_Items: [
      { product: "Manila Paper (Short)", quantity: 100, unit: "Ream", price: 1200, total: 120000 },
      { product: "Glue Stick", quantity: 30, unit: "Pack", price: 350, total: 10500 },
    ],
  },
  {
    restock_Id: "RS-003",
    number: "RS-2026-003",
    notes: "Writing instruments restock",
    purchase_order_number: "PO-2026-003",
    status: "PENDING",
    clerk: "Juan Dela Cruz",
    supplier: "Philippine School Supplies Inc.",
    created_At: "2026-06-10",
    line_Items: [
      { product: "Pencil #2", quantity: 100, unit: "Box", price: 300, total: 30000 },
      { product: "Notebook 200 Pages", quantity: 100, unit: "Pack", price: 200, total: 20000 },
    ],
  },
];

export const brands = ["Pilot", "Victoria", "Phoenix", "Pentel", "Omni", "Maped", "Elmer's", "Mongol"];
export const categories = ["Office Supplies", "Paper Products", "Art Supplies", "Classroom Supplies", "Measuring Tools", "Adhesives", "Writing Instruments"];
export const variants = ["Fine Point", "Wide Ruled", "Colored Assorted", "Dustless", "Plastic Clear", "170mm", "22g", "Standard"];
