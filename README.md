# Static Prince Inventory System

> **This is a static frontend-only version of the Prince Educational Supply Inventory System.**
> All data displayed is mock/hardcoded data. There is no backend, no API calls, no database, and no Postman integration.
> This version is for demonstration, design review, and UI/UX presentation purposes only.

---

## Getting Started

```bash
npm install
npm run dev
```

The app will start at `http://localhost:8080`.

## Login Credentials

- **Username:** admin1
- **Password:** P@ssword_000

---

## Features and Functionalities

### 1. Authentication
- Static login page with hardcoded credentials
- localStorage-based session persistence
- Protected routes redirect to login when unauthenticated
- Logout clears session and returns to login

### 2. Dashboard
- Overview statistics cards (Stocked In, Stocked Out, Suppliers, Customers)
- Growth/decline percentage indicators
- Chart placeholder areas for future data visualization
- Top suppliers list

### 3. Supplier Management
- Supplier list with search and selection
- Supplier detail panel (contact info, company, notes)
- Add/Edit supplier modals
- Purchase price management per supplier
- Purchase order creation and history tracking
- Purchase order details and confirmation modals
- Purchase price benchmarking

### 4. Customer Management
- Customer list with search and selection
- Customer detail panel (contact info, company, notes)
- Add/Edit customer modals
- Record payment modal
- Statement of Account (SOA) generation

### 5. Inventory Management
- Product list with search and favorites
- Product detail panel with unit presets, restock info, and pricing
- Multi-step add product workflow (Brand > Category > Item > Variant)
- Edit product modal
- Unit preset editor and selector
- Product packaging and packaging pricing modals
- Quotation generator
- Audit log display
- Deactivate product confirmation

### 6. Employee Management
- Employee list with search and selection
- Employee detail panel (role, contact info)
- Add/Edit employee modals
- Recover account modal
- Employee audit log display

### 7. Invoice Management
- Invoice grid view with status badges (PAID, PENDING, VOIDED)
- Invoice detail modal with line items
- New invoice creation workflow with product picker
- Customer picker for invoice assignment
- Invoice preview modal with table view
- Invoice number generation display

### 8. Restock Management
- Restock grid view with status badges (COMPLETED, PENDING)
- Restock detail modal with line items
- New restock creation workflow with product picker
- Void restock confirmation
- Purchase Order (PO) restock workflow
- Delivery status choice modal
- Show all items modal

### 9. Navigation and Layout
- Fixed sidebar with company branding
- Main navigation: Dashboard, Restock, Invoice
- Records navigation: Suppliers, Customers, Inventory, Employees
- Active route highlighting
- User profile display in sidebar
- Logout functionality

### 10. Shared Components
- InfoCard component for list displays
- SelectedUser component for detail panels
- NoSelectedState empty state placeholder
- ItemPicker and SupplierPicker autocomplete components
- Various modal components for CRUD operations
- Toast notifications (Sonner)

### 11. UI and UX
- Consistent theme with river-green (#00b69b) primary color
- Custom gray palette for backgrounds and text
- shadcn/ui component library (new-york style)
- 30+ custom SVG icons
- Responsive layout structure
- Form inputs with consistent styling
- Status badges with color coding

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6.2
- **Routing:** react-router-dom v7
- **Styling:** Tailwind CSS v4 + tw-animate-css
- **UI Library:** shadcn/ui (new-york style)
- **Icons:** lucide-react + custom SVG icons
- **State:** React Context (auth) + useState for UI state
- **Notifications:** Sonner (toast)

---

## Mock Data

| Entity | Count |
|--------|-------|
| Suppliers | 5 |
| Customers | 5 |
| Products | 8 |
| Employees | 4 |
| Invoices | 4 |
| Restocks | 3 |

---

## Project Structure

```
src/
  components/       Shared components (sidebar, info-card, etc.)
  components/ui/    shadcn/ui components
  context/          Auth context (localStorage-based)
  data/             Mock data and TypeScript interfaces
  icons/            Custom SVG icon components
  layouts/          Default and Main layouts
  lib/              Utilities (cn function)
  pages/
    login/          Login page
    admin/
      dashboard/    Dashboard with stat cards
      suppliers/    Supplier management
      customers/    Customer management
      inventory/    Inventory management
      employees/    Employee management
      invoice/      Invoice management
      restock/      Restock management
  routes/           React Router configuration
```
