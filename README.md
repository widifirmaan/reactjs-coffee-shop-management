# Siap Nyafe POS

> Coffee shop point-of-sale, customer self-ordering portal, kitchen display system, and store management application built with React 18, Vite 5, and SQLite.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6.30-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-1.18-5A29E4?style=flat-square&logo=axios&logoColor=white)](https://axios-http.com/)
[![Swiper](https://img.shields.io/badge/Swiper-12.2-6332F6?style=flat-square&logo=swiper&logoColor=white)](https://swiperjs.com/)
[![Lucide](https://img.shields.io/badge/Lucide_React-0.292.0-F56565?style=flat-square)](https://lucide.dev/)
[![SQLite](https://img.shields.io/badge/SQLite-libSQL-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://sqlite.org/)
[![bcryptjs](https://img.shields.io/badge/Auth-bcryptjs_%2B_JWT-111111?style=flat-square)](#tech-stack)

---

## Live URL

- **Production:** [https://siapnyafe.widifirmaan.web.id](https://siapnyafe.widifirmaan.web.id)

## Features

- **Public Brand Showcase (`/`)**: Brand landing page featuring typography marquees, mouse-parallax background lettering, an "About Us" story section, latest published news/promos, and a signature menu grid with item specification modals. Content is configurable from `/settings`.
- **Customer Self-Ordering Portal (`/order`)**: Unauthenticated digital menu with horizontal category filtering (derived from menu categories excluding `Featured`), item detail and image zoom modals, and a floating cart tray.
- **Cart & Order Dispatch**: Guest checkout drawer collecting customer name, table number (or `Take Away`), order notes, and payment method, followed by order confirmation, database submission, and a ticket number summary.
- **Table Waiter Assistance (`/order`, `/waiter`)**: Call Waiter button allowing seated customers to request assistance or the bill. `/waiter` polls for new notifications every 5 seconds with a toggleable alert sound.
- **Cashier POS Terminal (`/cashier`)**: Order register calculating subtotal, configurable tax (default 10% with an include-tax toggle), manual IDR discount, payment method, quick cash presets (`Exact`, `50,000`, `100,000`, `150,000`, `200,000`), change amount, and a printable receipt modal.
- **Operations Dashboard (`/dashboard`)**: Displays today's revenue, today's order count, pending order count, and low-stock ingredient count, along with personal shift clock-in/clock-out attendance tracking (with late alerts) and a shared operational memo note.
- **Kitchen Display System (`/kitchen`)**: Order queue refreshed every 5 seconds with status transitions (`PENDING`, `PREPARING`, `READY_TO_SERVE`, `COMPLETED`), customer notes, toggleable chime, completed history, and ticket item editing.
- **Menu Management (`/menu`)**: Catalog manager supporting category assignment, pricing, descriptions, gallery images via URL or file upload, and item availability toggles (`available`).
- **Ingredient, Recipe & Stock Control (`/inventory`)**: Raw ingredient tracker with minimum stock thresholds (`minThreshold` / `minStock`), plus a Recipes tab mapping ingredients to menu items for automatic stock deduction when orders move to `PREPARING` or `COMPLETED`.
- **Staff Directory (`/employees`)**: Employee directory tracking employee IDs (`EMP-MAN-001`, `EMP-BAR-001`, etc.), roles, base salaries, contact info, password updates, active status toggles, and attendance history.
- **Weekly Shift Scheduling (`/shifts`)**: Shift matrix across morning, afternoon, and evening slots per day of the week, including a midweek save confirmation prompt and an automated shift balancer.
- **Equipment & Asset Register (`/assets`)**: Register of cafe equipment recording purchase date, price, condition (`GOOD`, `NEEDS_MAINTENANCE`, `BROKEN`), location, serial number, and maintenance dates.
- **Financial Ledger (`/finance`)**: Cash flow ledger tracking income and expense entries with category/type filters and a net balance summary.
- **Customer Feedback (`/feedback`)**: Guest ratings (1 to 5 stars), review messages, average rating summary, and the associated shift staff.
- **Promotional Posts & Store Settings (`/posts`, `/settings`)**: Blog/announcement publishing (`/posts`) and store settings (`/settings`) covering shop name, page title, favicon, phone number, hero image, badges, marquee text, info section, tax percentage, and receipt footer.

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React `18.3.1`, Vite `5.4.21` | SPA frontend with Vite HMR and production bundling |
| **Routing** | React Router DOM `6.30.4` | Client-side routing and role-based protected route guards |
| **Networking & State** | React Context API, Axios `1.18.1` | Auth state management and HTTP request/401 interceptors |
| **Styling & Components** | Custom CSS (`index.css`), Swiper `12.2.0` | Neo-brutalist design tokens and scrollable category selector |
| **Icons** | Lucide React `0.292.0` | Vector UI icons across customer and staff interfaces |
| **API Runtime** | Web Fetch REST API (`api/[...route].js`) | Request routing for auth, orders, inventory, attendance, and uploads |
| **Database** | SQLite / libSQL (`@libsql/client` `0.18.0`) | Relational storage for employees, menus, orders, shifts, and assets |
| **Media Storage** | Local Disk / Object Storage / Inline Fallback | Image upload handling for menu items and store branding |
| **Security & Auth** | bcryptjs `2.4.3`, JWT (HS256 via Web Crypto) | Password hashing (10 salt rounds) and 7-day Bearer/cookie sessions |

## Screenshots

### 1. Customer Brand & Self-Ordering Experience (`/`, `/order`)

| Desktop | Mobile |
| :---: | :---: |
| **Public Brand Landing CMS (Hero View)**<br>![Coffee Landing CMS Hero Desktop](screenshots/Coffee%20Landing%20CMS%20Hero%20Desktop.png) | **Public Brand Landing CMS (Hero View)**<br>![Coffee Landing CMS Hero Mobile](screenshots/Coffee%20Landing%20CMS%20Hero%20Mobile.png) |
| **Brand Story & Split Gate (Info Section)**<br>![Coffee Landing CMS Info Section Desktop](screenshots/Coffee%20Landing%20CMS%20Info%20Section%20Desktop.png) | **Brand Story & Split Gate (Info Section)**<br>![Coffee Landing CMS Info Section Mobile](screenshots/Coffee%20Landing%20CMS%20Info%20Section%20Mobile.png) |
| **Promotional Roasts & Specials (Latest Drop)**<br>![Coffee Landing CMS Latest Drop Desktop](screenshots/Coffee%20Landing%20CMS%20Latest%20Drop%20Desktop.png) | **Promotional Roasts & Specials (Latest Drop)**<br>![Coffee Landing CMS Latest Drop Mobile](screenshots/Coffee%20Landing%20CMS%20Latest%20Drop%20Mobile.png) |
| **Fullscreen Signature Menu (Menu Section)**<br>![Coffee Landing CMS Menu Section Desktop](screenshots/Coffee%20Landing%20CMS%20Menu%20Section%20Desktop.png) | **Fullscreen Signature Menu (Menu Section)**<br>![Coffee Landing CMS Menu Section Mobile](screenshots/Coffee%20Landing%20CMS%20Menu%20Section%20Mobile.png) |
| **Signature Menu Item Specifications (Detail Modal)**<br>![Coffee Landing CMS Menu Detail Modal Desktop](screenshots/Coffee%20Landing%20CMS%20Menu%20Detail%20Modal%20Desktop.png) | **Signature Menu Item Specifications (Detail Modal)**<br>![Coffee Landing CMS Menu Detail Modal Mobile](screenshots/Coffee%20Landing%20CMS%20Menu%20Detail%20Modal%20Mobile.png) |
| **High-Resolution Product View (Image Zoom Modal)**<br>![Coffee Landing CMS Image Zoom Modal Desktop](screenshots/Coffee%20Landing%20CMS%20Image%20Zoom%20Modal%20Desktop.png) | **High-Resolution Product View (Image Zoom Modal)**<br>![Coffee Landing CMS Image Zoom Modal Mobile](screenshots/Coffee%20Landing%20CMS%20Image%20Zoom%20Modal%20Mobile.png) |
| **Promotional Coffee Story Reader (Blog Modal)**<br>![Coffee Landing CMS Blog Post Modal Desktop](screenshots/Coffee%20Landing%20CMS%20Blog%20Post%20Modal%20Desktop.png) | **Promotional Coffee Story Reader (Blog Modal)**<br>![Coffee Landing CMS Blog Post Modal Mobile](screenshots/Coffee%20Landing%20CMS%20Blog%20Post%20Modal%20Mobile.png) |
| **Customer Self-Order Catalog (`/order`)**<br>![Coffee Customer Order Page Desktop](screenshots/Coffee%20Customer%20Order%20Page%20Desktop.png) | **Customer Self-Order Catalog (`/order`)**<br>![Coffee Customer Order Page Mobile](screenshots/Coffee%20Customer%20Order%20Page%20Mobile.png) |
| **Menu Item Details (Item Modal)**<br>![Coffee Customer Modal Customization Desktop](screenshots/Coffee%20Customer%20Modal%20Customization%20Desktop.png) | **Menu Item Details (Item Modal)**<br>![Coffee Customer Modal Customization Mobile](screenshots/Coffee%20Customer%20Modal%20Customization%20Mobile.png) |
| **High-Resolution Beverage View (Image Zoom Modal)**<br>![Coffee Customer Image Zoom Modal Desktop](screenshots/Coffee%20Customer%20Image%20Zoom%20Modal%20Desktop.png) | **High-Resolution Beverage View (Image Zoom Modal)**<br>![Coffee Customer Image Zoom Modal Mobile](screenshots/Coffee%20Customer%20Image%20Zoom%20Modal%20Mobile.png) |
| **Cart Tray & Order Summary (Cart Modal)**<br>![Coffee Customer Modal Cart Desktop](screenshots/Coffee%20Customer%20Modal%20Cart%20Desktop.png) | **Cart Tray & Order Summary (Cart Modal)**<br>![Coffee Customer Modal Cart Mobile](screenshots/Coffee%20Customer%20Modal%20Cart%20Mobile.png) |
| **Table Number & Customer Information (Checkout Modal)**<br>![Coffee Customer Modal Checkout Desktop](screenshots/Coffee%20Customer%20Modal%20Checkout%20Desktop.png) | **Table Number & Customer Information (Checkout Modal)**<br>![Coffee Customer Modal Checkout Mobile](screenshots/Coffee%20Customer%20Modal%20Checkout%20Mobile.png) |
| **Pre-Dispatch Order Review (Confirm Order Modal)**<br>![Coffee Customer Modal Confirm Order Desktop](screenshots/Coffee%20Customer%20Modal%20Confirm%20Order%20Desktop.png) | **Pre-Dispatch Order Review (Confirm Order Modal)**<br>![Coffee Customer Modal Confirm Order Mobile](screenshots/Coffee%20Customer%20Modal%20Confirm%20Order%20Mobile.png) |
| **Order Confirmation Ticket (Order Success Modal)**<br>![Coffee Customer Modal Order Success Desktop](screenshots/Coffee%20Customer%20Modal%20Order%20Success%20Desktop.png) | **Order Confirmation Ticket (Order Success Modal)**<br>![Coffee Customer Modal Order Success Mobile](screenshots/Coffee%20Customer%20Modal%20Order%20Success%20Mobile.png) |
| **Floor Assistance & Bill Request (Call Waiter Modal)**<br>![Coffee Customer Modal Call Waiter Desktop](screenshots/Coffee%20Customer%20Modal%20Call%20Waiter%20Desktop.png) | **Floor Assistance & Bill Request (Call Waiter Modal)**<br>![Coffee Customer Modal Call Waiter Mobile](screenshots/Coffee%20Customer%20Modal%20Call%20Waiter%20Mobile.png) |
| **Table Waiter Summon Notification (Toast Alert)**<br>![Coffee Customer Alert Waiter Notified Desktop](screenshots/Coffee%20Customer%20Alert%20Waiter%20Notified%20Desktop.png) | **Table Waiter Summon Notification (Toast Alert)**<br>![Coffee Customer Alert Waiter Notified Mobile](screenshots/Coffee%20Customer%20Alert%20Waiter%20Notified%20Mobile.png) |

---

### 2. Staff Authentication, Operations Dashboard, POS & Kitchen Workflow (`/login`, `/dashboard`, `/cashier`, `/kitchen`, `/waiter`)

| Desktop | Mobile |
| :---: | :---: |
| **Staff & Manager Authentication Portal (`/login`)**<br>![Coffee Staff Login Desktop](screenshots/Coffee%20Staff%20Login%20Desktop.png) | **Staff & Manager Authentication Portal (`/login`)**<br>![Coffee Staff Login Mobile](screenshots/Coffee%20Staff%20Login%20Mobile.png) |
| **Staff Authentication Failure (401 Auth Error Alert)**<br>![Coffee Staff Login Alert Auth Error Desktop](screenshots/Coffee%20Staff%20Login%20Alert%20Auth%20Error%20Desktop.png) | **Staff Authentication Failure (401 Auth Error Alert)**<br>![Coffee Staff Login Alert Auth Error Mobile](screenshots/Coffee%20Staff%20Login%20Alert%20Auth%20Error%20Mobile.png) |
| **Executive Operations Dashboard (`/dashboard`)**<br>![Coffee Manager Dashboard Overview Desktop](screenshots/Coffee%20Manager%20Dashboard%20Overview%20Desktop.png) | **Executive Operations Dashboard (`/dashboard`)**<br>![Coffee Manager Dashboard Overview Mobile](screenshots/Coffee%20Manager%20Dashboard%20Overview%20Mobile.png) |
| **Shift Attendance Confirmation (Clock In Modal)**<br>![Coffee Dashboard Modal Clock In Confirm Desktop](screenshots/Coffee%20Dashboard%20Modal%20Clock%20In%20Confirm%20Desktop.png) | **Shift Attendance Confirmation (Clock In Modal)**<br>![Coffee Dashboard Modal Clock In Confirm Mobile](screenshots/Coffee%20Dashboard%20Modal%20Clock%20In%20Confirm%20Mobile.png) |
| **Shift Timecard & Attendance Alert (Late Modal)**<br>![Coffee Dashboard Modal Attendance Alert Desktop](screenshots/Coffee%20Dashboard%20Modal%20Attendance%20Alert%20Desktop.png) | **Shift Timecard & Attendance Alert (Late Modal)**<br>![Coffee Dashboard Modal Attendance Alert Mobile](screenshots/Coffee%20Dashboard%20Modal%20Attendance%20Alert%20Mobile.png) |
| **Late Attendance Notification Banner (Toast Alert)**<br>![Coffee Dashboard Alert Attendance Late Desktop](screenshots/Coffee%20Dashboard%20Alert%20Attendance%20Late%20Desktop.png) | **Late Attendance Notification Banner (Toast Alert)**<br>![Coffee Dashboard Alert Attendance Late Mobile](screenshots/Coffee%20Dashboard%20Alert%20Attendance%20Late%20Mobile.png) |
| **Manager Operational Memo Saved (Toast Alert)**<br>![Coffee Dashboard Alert Note Saved Desktop](screenshots/Coffee%20Dashboard%20Alert%20Note%20Saved%20Desktop.png) | **Manager Operational Memo Saved (Toast Alert)**<br>![Coffee Dashboard Alert Note Saved Mobile](screenshots/Coffee%20Dashboard%20Alert%20Note%20Saved%20Mobile.png) |
| **Cashier Point-of-Sale Register Terminal (`/cashier`)**<br>![Coffee Cashier POS Register Desktop](screenshots/Coffee%20Cashier%20POS%20Register%20Desktop.png) | **Cashier Point-of-Sale Register Terminal (`/cashier`)**<br>![Coffee Cashier POS Register Mobile](screenshots/Coffee%20Cashier%20POS%20Register%20Mobile.png) |
| **POS Cash Payment Validation (Insufficient State)**<br>![Coffee Cashier Cash Insufficient State Desktop](screenshots/Coffee%20Cashier%20Cash%20Insufficient%20State%20Desktop.png) | **POS Cash Payment Validation (Insufficient State)**<br>![Coffee Cashier Cash Insufficient State Mobile](screenshots/Coffee%20Cashier%20Cash%20Insufficient%20State%20Mobile.png) |
| **Thermal Receipt & Invoice Print Modal**<br>![Coffee Cashier Modal Thermal Receipt Desktop](screenshots/Coffee%20Cashier%20Modal%20Thermal%20Receipt%20Desktop.png) | **Thermal Receipt & Invoice Print Modal**<br>![Coffee Cashier Modal Thermal Receipt Mobile](screenshots/Coffee%20Cashier%20Modal%20Thermal%20Receipt%20Mobile.png) |
| **POS Order Finalized & Stored (Toast Alert)**<br>![Coffee Cashier Alert Order Completed Desktop](screenshots/Coffee%20Cashier%20Alert%20Order%20Completed%20Desktop.png) | **POS Order Finalized & Stored (Toast Alert)**<br>![Coffee Cashier Alert Order Completed Mobile](screenshots/Coffee%20Cashier%20Alert%20Order%20Completed%20Mobile.png) |
| **Barista Kitchen Display System (`/kitchen`)**<br>![Coffee Kitchen Display System Desktop](screenshots/Coffee%20Kitchen%20Display%20System%20Desktop.png) | **Barista Kitchen Display System (`/kitchen`)**<br>![Coffee Kitchen Display System Mobile](screenshots/Coffee%20Kitchen%20Display%20System%20Mobile.png) |
| **Kitchen Ticket Modifier & Note Editor (Edit Modal)**<br>![Coffee Kitchen Modal Edit Order Desktop](screenshots/Coffee%20Kitchen%20Modal%20Edit%20Order%20Desktop.png) | **Kitchen Ticket Modifier & Note Editor (Edit Modal)**<br>![Coffee Kitchen Modal Edit Order Mobile](screenshots/Coffee%20Kitchen%20Modal%20Edit%20Order%20Mobile.png) |
| **Order Preparation Transition (Status Confirm Modal)**<br>![Coffee Kitchen Modal Status Confirm Desktop](screenshots/Coffee%20Kitchen%20Modal%20Status%20Confirm%20Desktop.png) | **Order Preparation Transition (Status Confirm Modal)**<br>![Coffee Kitchen Modal Status Confirm Mobile](screenshots/Coffee%20Kitchen%20Modal%20Status%20Confirm%20Mobile.png) |
| **Kitchen Status Transition Broadcast (Toast Alert)**<br>![Coffee Kitchen Alert Status Updated Desktop](screenshots/Coffee%20Kitchen%20Alert%20Status%20Updated%20Desktop.png) | **Kitchen Status Transition Broadcast (Toast Alert)**<br>![Coffee Kitchen Alert Status Updated Mobile](screenshots/Coffee%20Kitchen%20Alert%20Status%20Updated%20Mobile.png) |
| **Floor Table Assistance Queue (`/waiter`)**<br>![Coffee Waiter Service Queue Desktop](screenshots/Coffee%20Waiter%20Service%20Queue%20Desktop.png) | **Floor Table Assistance Queue (`/waiter`)**<br>![Coffee Waiter Service Queue Mobile](screenshots/Coffee%20Waiter%20Service%20Queue%20Mobile.png) |
| **Service Request Fulfillment (Resolve Confirm Modal)**<br>![Coffee Waiter Modal Resolve Confirm Desktop](screenshots/Coffee%20Waiter%20Modal%20Resolve%20Confirm%20Desktop.png) | **Service Request Fulfillment (Resolve Confirm Modal)**<br>![Coffee Waiter Modal Resolve Confirm Mobile](screenshots/Coffee%20Waiter%20Modal%20Resolve%20Confirm%20Mobile.png) |
| **Floor Assistance Request Resolved (Toast Alert)**<br>![Coffee Waiter Alert Request Resolved Desktop](screenshots/Coffee%20Waiter%20Alert%20Request%20Resolved%20Desktop.png) | **Floor Assistance Request Resolved (Toast Alert)**<br>![Coffee Waiter Alert Request Resolved Mobile](screenshots/Coffee%20Waiter%20Alert%20Request%20Resolved%20Mobile.png) |

---

### 3. Staff Administration, Roster & Weekly Shift Scheduling (`/employees`, `/shifts`)

| Desktop | Mobile |
| :---: | :---: |
| **Staff Directory & Wage Roster (`/employees`)**<br>![Coffee Staff Roster Management Desktop](screenshots/Coffee%20Staff%20Roster%20Management%20Desktop.png) | **Staff Directory & Wage Roster (`/employees`)**<br>![Coffee Staff Roster Management Mobile](screenshots/Coffee%20Staff%20Roster%20Management%20Mobile.png) |
| **Staff Recruitment & Role Provisioning (Recruit Modal)**<br>![Coffee Staff Modal Recruit Employee Desktop](screenshots/Coffee%20Staff%20Modal%20Recruit%20Employee%20Desktop.png) | **Staff Recruitment & Role Provisioning (Recruit Modal)**<br>![Coffee Staff Modal Recruit Employee Mobile](screenshots/Coffee%20Staff%20Modal%20Recruit%20Employee%20Mobile.png) |
| **Staff Profile & Wage Adjustment (Edit Modal)**<br>![Coffee Staff Modal Edit Employee Desktop](screenshots/Coffee%20Staff%20Modal%20Edit%20Employee%20Desktop.png) | **Staff Profile & Wage Adjustment (Edit Modal)**<br>![Coffee Staff Modal Edit Employee Mobile](screenshots/Coffee%20Staff%20Modal%20Edit%20Employee%20Mobile.png) |
| **Shift Attendance History (Attendance History Modal)**<br>![Coffee Staff Modal Attendance History Desktop](screenshots/Coffee%20Staff%20Modal%20Attendance%20History%20Desktop.png) | **Shift Attendance History (Attendance History Modal)**<br>![Coffee Staff Modal Attendance History Mobile](screenshots/Coffee%20Staff%20Modal%20Attendance%20History%20Mobile.png) |
| **Staff Suspension Gate (Freeze Account Modal)**<br>![Coffee Staff Modal Freeze Account Confirm Desktop](screenshots/Coffee%20Staff%20Modal%20Freeze%20Account%20Confirm%20Desktop.png) | **Staff Suspension Gate (Freeze Account Modal)**<br>![Coffee Staff Modal Freeze Account Confirm Mobile](screenshots/Coffee%20Staff%20Modal%20Freeze%20Account%20Confirm%20Mobile.png) |
| **Staff Offboarding Gate (Terminate Staff Modal)**<br>![Coffee Staff Modal Terminate Staff Confirm Desktop](screenshots/Coffee%20Staff%20Modal%20Terminate%20Staff%20Confirm%20Desktop.png) | **Staff Offboarding Gate (Terminate Staff Modal)**<br>![Coffee Staff Modal Terminate Staff Confirm Mobile](screenshots/Coffee%20Staff%20Modal%20Terminate%20Staff%20Confirm%20Mobile.png) |
| **New Staff Recruit Provisioned (Toast Alert)**<br>![Coffee Staff Alert Recruit Added Desktop](screenshots/Coffee%20Staff%20Alert%20Recruit%20Added%20Desktop.png) | **New Staff Recruit Provisioned (Toast Alert)**<br>![Coffee Staff Alert Recruit Added Mobile](screenshots/Coffee%20Staff%20Alert%20Recruit%20Added%20Mobile.png) |
| **Staff Account Status Suspended (Toast Alert)**<br>![Coffee Staff Alert Account Frozen Desktop](screenshots/Coffee%20Staff%20Alert%20Account%20Frozen%20Desktop.png) | **Staff Account Status Suspended (Toast Alert)**<br>![Coffee Staff Alert Account Frozen Mobile](screenshots/Coffee%20Staff%20Alert%20Account%20Frozen%20Mobile.png) |
| **Weekly Shift Scheduling Matrix (`/shifts`)**<br>![Coffee Shift Scheduling Matrix Desktop](screenshots/Coffee%20Shift%20Scheduling%20Matrix%20Desktop.png) | **Weekly Shift Scheduling Matrix (`/shifts`)**<br>![Coffee Shift Scheduling Matrix Mobile](screenshots/Coffee%20Shift%20Scheduling%20Matrix%20Mobile.png) |
| **Automated Shift Randomization (Randomize Modal)**<br>![Coffee Shift Modal Randomize Confirm Desktop](screenshots/Coffee%20Shift%20Modal%20Randomize%20Confirm%20Desktop.png) | **Automated Shift Randomization (Randomize Modal)**<br>![Coffee Shift Modal Randomize Confirm Mobile](screenshots/Coffee%20Shift%20Modal%20Randomize%20Confirm%20Mobile.png) |
| **Midweek Schedule Change Gate (Confirm Modal)**<br>![Coffee Shift Modal Midweek Confirm Desktop](screenshots/Coffee%20Shift%20Modal%20Midweek%20Confirm%20Desktop.png) | **Midweek Schedule Change Gate (Confirm Modal)**<br>![Coffee Shift Modal Midweek Confirm Mobile](screenshots/Coffee%20Shift%20Modal%20Midweek%20Confirm%20Mobile.png) |
| **Weekly Shift Schedule Saved (Toast Alert)**<br>![Coffee Shift Alert Schedule Saved Desktop](screenshots/Coffee%20Shift%20Alert%20Schedule%20Saved%20Desktop.png) | **Weekly Shift Schedule Saved (Toast Alert)**<br>![Coffee Shift Alert Schedule Saved Mobile](screenshots/Coffee%20Shift%20Alert%20Schedule%20Saved%20Mobile.png) |

---

### 4. Supply Chain, Equipment Assets, Finance & Marketing (`/menu`, `/inventory`, `/assets`, `/finance`, `/posts`, `/feedback`, `/settings`)

| Desktop | Mobile |
| :---: | :---: |
| **Menu Catalog & Recipe Management (`/menu`)**<br>![Coffee Menu Item Management Desktop](screenshots/Coffee%20Menu%20Item%20Management%20Desktop.png) | **Menu Catalog & Recipe Management (`/menu`)**<br>![Coffee Menu Item Management Mobile](screenshots/Coffee%20Menu%20Item%20Management%20Mobile.png) |
| **Drink Creation & Price Setup (Add Item Modal)**<br>![Coffee Menu Modal Add Item Desktop](screenshots/Coffee%20Menu%20Modal%20Add%20Item%20Desktop.png) | **Drink Creation & Price Setup (Add Item Modal)**<br>![Coffee Menu Modal Add Item Mobile](screenshots/Coffee%20Menu%20Modal%20Add%20Item%20Mobile.png) |
| **Catalog Item Specifications (Detail Modal)**<br>![Coffee Menu Modal Item Detail View Desktop](screenshots/Coffee%20Menu%20Modal%20Item%20Detail%20View%20Desktop.png) | **Catalog Item Specifications (Detail Modal)**<br>![Coffee Menu Modal Item Detail View Mobile](screenshots/Coffee%20Menu%20Modal%20Item%20Detail%20View%20Mobile.png) |
| **Menu Item Removal Gate (Delete Item Modal)**<br>![Coffee Menu Modal Delete Item Confirm Desktop](screenshots/Coffee%20Menu%20Modal%20Delete%20Item%20Confirm%20Desktop.png) | **Menu Item Removal Gate (Delete Item Modal)**<br>![Coffee Menu Modal Delete Item Confirm Mobile](screenshots/Coffee%20Menu%20Modal%20Delete%20Item%20Confirm%20Mobile.png) |
| **Menu Category Classification (Add Category Modal)**<br>![Coffee Menu Modal Add Category Desktop](screenshots/Coffee%20Menu%20Modal%20Add%20Category%20Desktop.png) | **Menu Category Classification (Add Category Modal)**<br>![Coffee Menu Modal Add Category Mobile](screenshots/Coffee%20Menu%20Modal%20Add%20Category%20Mobile.png) |
| **Menu Category Removal Gate (Delete Category Modal)**<br>![Coffee Menu Modal Delete Category Confirm Desktop](screenshots/Coffee%20Menu%20Modal%20Delete%20Category%20Confirm%20Desktop.png) | **Menu Category Removal Gate (Delete Category Modal)**<br>![Coffee Menu Modal Delete Category Confirm Mobile](screenshots/Coffee%20Menu%20Modal%20Delete%20Category%20Confirm%20Mobile.png) |
| **Catalog Item Created (Toast Alert)**<br>![Coffee Menu Alert Item Created Desktop](screenshots/Coffee%20Menu%20Alert%20Item%20Created%20Desktop.png) | **Catalog Item Created (Toast Alert)**<br>![Coffee Menu Alert Item Created Mobile](screenshots/Coffee%20Menu%20Alert%20Item%20Created%20Mobile.png) |
| **Catalog Item Removed (Toast Alert)**<br>![Coffee Menu Alert Item Deleted Desktop](screenshots/Coffee%20Menu%20Alert%20Item%20Deleted%20Desktop.png) | **Catalog Item Removed (Toast Alert)**<br>![Coffee Menu Alert Item Deleted Mobile](screenshots/Coffee%20Menu%20Alert%20Item%20Deleted%20Mobile.png) |
| **Raw Material & Ingredient Inventory (`/inventory`)**<br>![Coffee Inventory Stock Control Desktop](screenshots/Coffee%20Inventory%20Stock%20Control%20Desktop.png) | **Raw Material & Ingredient Inventory (`/inventory`)**<br>![Coffee Inventory Stock Control Mobile](screenshots/Coffee%20Inventory%20Stock%20Control%20Mobile.png) |
| **Ingredient Restock & Safety Stock (Add Stock Modal)**<br>![Coffee Inventory Modal Add Stock Desktop](screenshots/Coffee%20Inventory%20Modal%20Add%20Stock%20Desktop.png) | **Ingredient Restock & Safety Stock (Add Stock Modal)**<br>![Coffee Inventory Modal Add Stock Mobile](screenshots/Coffee%20Inventory%20Modal%20Add%20Stock%20Mobile.png) |
| **Ingredient Quantity Adjustment (Edit Stock Modal)**<br>![Coffee Inventory Modal Edit Stock Desktop](screenshots/Coffee%20Inventory%20Modal%20Edit%20Stock%20Desktop.png) | **Ingredient Quantity Adjustment (Edit Stock Modal)**<br>![Coffee Inventory Modal Edit Stock Mobile](screenshots/Coffee%20Inventory%20Modal%20Edit%20Stock%20Mobile.png) |
| **Ingredient Removal Gate (Delete Stock Modal)**<br>![Coffee Inventory Modal Delete Stock Confirm Desktop](screenshots/Coffee%20Inventory%20Modal%20Delete%20Stock%20Confirm%20Desktop.png) | **Ingredient Removal Gate (Delete Stock Modal)**<br>![Coffee Inventory Modal Delete Stock Confirm Mobile](screenshots/Coffee%20Inventory%20Modal%20Delete%20Stock%20Confirm%20Mobile.png) |
| **Bill of Materials & Recipe Linkage (Link Recipe Modal)**<br>![Coffee Inventory Modal Link Recipe Desktop](screenshots/Coffee%20Inventory%20Modal%20Link%20Recipe%20Desktop.png) | **Bill of Materials & Recipe Linkage (Link Recipe Modal)**<br>![Coffee Inventory Modal Link Recipe Mobile](screenshots/Coffee%20Inventory%20Modal%20Link%20Recipe%20Mobile.png) |
| **Raw Ingredient Stock Updated (Toast Alert)**<br>![Coffee Inventory Alert Stock Added Desktop](screenshots/Coffee%20Inventory%20Alert%20Stock%20Added%20Desktop.png) | **Raw Ingredient Stock Updated (Toast Alert)**<br>![Coffee Inventory Alert Stock Added Mobile](screenshots/Coffee%20Inventory%20Alert%20Stock%20Added%20Mobile.png) |
| **Bill of Materials Recipe Linked (Toast Alert)**<br>![Coffee Inventory Alert Recipe Linked Desktop](screenshots/Coffee%20Inventory%20Alert%20Recipe%20Linked%20Desktop.png) | **Bill of Materials Recipe Linked (Toast Alert)**<br>![Coffee Inventory Alert Recipe Linked Mobile](screenshots/Coffee%20Inventory%20Alert%20Recipe%20Linked%20Mobile.png) |
| **Commercial Machinery & Equipment Register (`/assets`)**<br>![Coffee Asset & Equipment Desktop](screenshots/Coffee%20Asset%20%26%20Equipment%20Desktop.png) | **Commercial Machinery & Equipment Register (`/assets`)**<br>![Coffee Asset & Equipment Mobile](screenshots/Coffee%20Asset%20%26%20Equipment%20Mobile.png) |
| **Equipment Asset Registration (Register Asset Modal)**<br>![Coffee Asset Modal Register Desktop](screenshots/Coffee%20Asset%20Modal%20Register%20Desktop.png) | **Equipment Asset Registration (Register Asset Modal)**<br>![Coffee Asset Modal Register Mobile](screenshots/Coffee%20Asset%20Modal%20Register%20Mobile.png) |
| **Asset Record Amendment (Edit Asset Modal)**<br>![Coffee Asset Modal Edit Asset Desktop](screenshots/Coffee%20Asset%20Modal%20Edit%20Asset%20Desktop.png) | **Asset Record Amendment (Edit Asset Modal)**<br>![Coffee Asset Modal Edit Asset Mobile](screenshots/Coffee%20Asset%20Modal%20Edit%20Asset%20Mobile.png) |
| **Machine Condition & Maintenance (Condition Modal)**<br>![Coffee Asset Modal Condition Maintenance Desktop](screenshots/Coffee%20Asset%20Modal%20Condition%20Maintenance%20Desktop.png) | **Machine Condition & Maintenance (Condition Modal)**<br>![Coffee Asset Modal Condition Maintenance Mobile](screenshots/Coffee%20Asset%20Modal%20Condition%20Maintenance%20Mobile.png) |
| **Equipment Decommission Gate (Delete Asset Modal)**<br>![Coffee Asset Modal Delete Asset Confirm Desktop](screenshots/Coffee%20Asset%20Modal%20Delete%20Asset%20Confirm%20Desktop.png) | **Equipment Decommission Gate (Delete Asset Modal)**<br>![Coffee Asset Modal Delete Asset Confirm Mobile](screenshots/Coffee%20Asset%20Modal%20Delete%20Asset%20Confirm%20Mobile.png) |
| **Commercial Hardware Registered (Toast Alert)**<br>![Coffee Asset Alert Registered Desktop](screenshots/Coffee%20Asset%20Alert%20Registered%20Desktop.png) | **Commercial Hardware Registered (Toast Alert)**<br>![Coffee Asset Alert Registered Mobile](screenshots/Coffee%20Asset%20Alert%20Registered%20Mobile.png) |
| **Equipment Maintenance Logged (Toast Alert)**<br>![Coffee Asset Alert Maintenance Logged Desktop](screenshots/Coffee%20Asset%20Alert%20Maintenance%20Logged%20Desktop.png) | **Equipment Maintenance Logged (Toast Alert)**<br>![Coffee Asset Alert Maintenance Logged Mobile](screenshots/Coffee%20Asset%20Alert%20Maintenance%20Logged%20Mobile.png) |
| **Financial Ledger & Cashflow Analytics (`/finance`)**<br>![Coffee Finance Cashflow Reports Desktop](screenshots/Coffee%20Finance%20Cashflow%20Reports%20Desktop.png) | **Financial Ledger & Cashflow Analytics (`/finance`)**<br>![Coffee Finance Cashflow Reports Mobile](screenshots/Coffee%20Finance%20Cashflow%20Reports%20Mobile.png) |
| **Petty Cash & Expense Logging (Record Transaction Modal)**<br>![Coffee Finance Modal Record Transaction Desktop](screenshots/Coffee%20Finance%20Modal%20Record%20Transaction%20Desktop.png) | **Petty Cash & Expense Logging (Record Transaction Modal)**<br>![Coffee Finance Modal Record Transaction Mobile](screenshots/Coffee%20Finance%20Modal%20Record%20Transaction%20Mobile.png) |
| **Ledger Entry Removal Gate (Delete Transaction Modal)**<br>![Coffee Finance Modal Delete Transaction Confirm Desktop](screenshots/Coffee%20Finance%20Modal%20Delete%20Transaction%20Confirm%20Desktop.png) | **Ledger Entry Removal Gate (Delete Transaction Modal)**<br>![Coffee Finance Modal Delete Transaction Confirm Mobile](screenshots/Coffee%20Finance%20Modal%20Delete%20Transaction%20Confirm%20Mobile.png) |
| **Announcements & Promotional Blog CMS (`/posts`)**<br>![Coffee Blog Post CMS Desktop](screenshots/Coffee%20Blog%20Post%20CMS%20Desktop.png) | **Announcements & Promotional Blog CMS (`/posts`)**<br>![Coffee Blog Post CMS Mobile](screenshots/Coffee%20Blog%20Post%20CMS%20Mobile.png) |
| **Article Authoring & Publishing (Create Post Modal)**<br>![Coffee Blog Modal Create Post Desktop](screenshots/Coffee%20Blog%20Modal%20Create%20Post%20Desktop.png) | **Article Authoring & Publishing (Create Post Modal)**<br>![Coffee Blog Modal Create Post Mobile](screenshots/Coffee%20Blog%20Modal%20Create%20Post%20Mobile.png) |
| **Article Revision & Update (Edit Post Modal)**<br>![Coffee Blog Modal Edit Post Desktop](screenshots/Coffee%20Blog%20Modal%20Edit%20Post%20Desktop.png) | **Article Revision & Update (Edit Post Modal)**<br>![Coffee Blog Modal Edit Post Mobile](screenshots/Coffee%20Blog%20Modal%20Edit%20Post%20Mobile.png) |
| **Editorial Post Removal Gate (Delete Post Modal)**<br>![Coffee Blog Modal Delete Post Confirm Desktop](screenshots/Coffee%20Blog%20Modal%20Delete%20Post%20Confirm%20Desktop.png) | **Editorial Post Removal Gate (Delete Post Modal)**<br>![Coffee Blog Modal Delete Post Confirm Mobile](screenshots/Coffee%20Blog%20Modal%20Delete%20Post%20Confirm%20Mobile.png) |
| **Editorial Post Published (Toast Alert)**<br>![Coffee Blog Alert Post Saved Desktop](screenshots/Coffee%20Blog%20Alert%20Post%20Saved%20Desktop.png) | **Editorial Post Published (Toast Alert)**<br>![Coffee Blog Alert Post Saved Mobile](screenshots/Coffee%20Blog%20Alert%20Post%20Saved%20Mobile.png) |
| **Customer Feedback & Review Auditing (`/feedback`)**<br>![Coffee Feedback Reviews Desktop](screenshots/Coffee%20Feedback%20Reviews%20Desktop.png) | **Customer Feedback & Review Auditing (`/feedback`)**<br>![Coffee Feedback Reviews Mobile](screenshots/Coffee%20Feedback%20Reviews%20Mobile.png) |
| **Review Moderation Gate (Delete Feedback Modal)**<br>![Coffee Feedback Modal Delete Confirm Desktop](screenshots/Coffee%20Feedback%20Modal%20Delete%20Confirm%20Desktop.png) | **Review Moderation Gate (Delete Feedback Modal)**<br>![Coffee Feedback Modal Delete Confirm Mobile](screenshots/Coffee%20Feedback%20Modal%20Delete%20Confirm%20Mobile.png) |
| **Customer Feedback Removed (Toast Alert)**<br>![Coffee Feedback Alert Deleted Desktop](screenshots/Coffee%20Feedback%20Alert%20Deleted%20Desktop.png) | **Customer Feedback Removed (Toast Alert)**<br>![Coffee Feedback Alert Deleted Mobile](screenshots/Coffee%20Feedback%20Alert%20Deleted%20Mobile.png) |
| **Global Store Configuration & Tax Rules (`/settings`)**<br>![Coffee Store Settings Config Desktop](screenshots/Coffee%20Store%20Settings%20Config%20Desktop.png) | **Global Store Configuration & Tax Rules (`/settings`)**<br>![Coffee Store Settings Config Mobile](screenshots/Coffee%20Store%20Settings%20Config%20Mobile.png) |
| **Store Settings & Tax Rules Saved (Toast Alert)**<br>![Coffee Store Settings Alert Saved Desktop](screenshots/Coffee%20Store%20Settings%20Alert%20Saved%20Desktop.png) | **Store Settings & Tax Rules Saved (Toast Alert)**<br>![Coffee Store Settings Alert Saved Mobile](screenshots/Coffee%20Store%20Settings%20Alert%20Saved%20Mobile.png) |

---

## Local Setup

### Project Structure

```bash
/
├── api/
│   └── [...route].js               # Serverless catch-all API handler
├── scripts/
│   ├── setup-local-db.mjs          # Local SQLite database initializer and seeder
│   ├── seed.sql                    # SQLite demo seed data (15 staff, 61 menus, 16 posts, etc.)
│   └── generate-presentation.mjs   # Presentation generator from screenshots
├── server/
│   └── db-adapter.mjs              # SQLite/libSQL D1-compatible adapter & local upload store
├── src/
│   ├── components/
│   │   ├── layout/                 # Navbar, OrderPageHeader, OrderPageFooter
│   │   └── ui/                     # Reusable buttons, cards, modals, tables, badges
│   ├── context/
│   │   └── AuthContext.jsx         # Global user authentication & role state
│   ├── pages/
│   │   ├── OrderPage.jsx           # Customer self-ordering menu (/order)
│   │   ├── DashboardPage.jsx       # Operations dashboard (/dashboard)
│   │   ├── CashierPage.jsx         # POS register checkout (/cashier)
│   │   ├── KitchenPage.jsx         # Kitchen Display System (/kitchen)
│   │   ├── MenuPage.jsx            # Menu catalog (/menu)
│   │   ├── InventoryPage.jsx       # Ingredient & recipe stock (/inventory)
│   │   ├── EmployeePage.jsx        # Staff directory & attendance history (/employees)
│   │   ├── ShiftPage.jsx           # Weekly shift matrix (/shifts)
│   │   ├── WaiterPage.jsx          # Table waiter notifications (/waiter)
│   │   ├── AssetManagementPage.jsx # Equipment register (/assets)
│   │   ├── FinancePage.jsx         # Cash flow ledger (/finance)
│   │   ├── FeedbackPage.jsx        # Customer reviews (/feedback)
│   │   ├── CMSPage.jsx             # Public brand landing (/)
│   │   ├── PostManagementPage.jsx  # Blog & promo posts (/posts)
│   │   ├── SettingsPage.jsx        # Store configuration & tax (/settings)
│   │   └── LoginPage.jsx           # Staff login portal (/login)
│   ├── utils/
│   │   └── staffUtils.js           # Shift staff parser helper
│   ├── App.jsx                     # Route definitions and role guards
│   └── main.jsx                    # Application entry point
├── screenshots/                    # Desktop and mobile application screenshots
├── public/                         # Static image assets
├── index.html                      # Vite HTML entry
├── schema.sql                      # Relational SQLite database schema (16 tables)
├── vite.config.js                  # Vite config with in-process local /api middleware
├── vercel.json                     # SPA rewrite & serverless SQL include config
├── package.json                    # Dependencies and scripts
└── README.md
```

### 1. Prerequisites

- **Node.js**: Version `18.0.0` or higher (`20+` or `22+` recommended)
- **npm**: Included with Node.js

### 2. Environment Variables

No environment variables are required for local development. All API routes run locally against `local.db` (auto-initialized from [`schema.sql`](schema.sql) and [`scripts/seed.sql`](scripts/seed.sql)) and store uploaded images in `.local-uploads/`.

If needed, copy [`.env.example`](.env.example) to `.env`:

```env
JWT_SECRET=local-dev-jwt-secret
SEED_SECRET=local-dev-seed-secret
# Optional remote libSQL/Turso database:
# TURSO_DATABASE_URL=
# TURSO_AUTH_TOKEN=
# Optional external API base URL (overrides local /api middleware):
# VITE_API_URL=
```

### 3. Installation & Database Setup

```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/reactjs-coffee-shop-management.git
cd reactjs-coffee-shop-management

# 2. Install dependencies
npm install

# 3. Initialize and seed local.db (optional; also auto-runs on first /api request)
npm run db:setup
```

Expected seeded counts from [`scripts/seed.sql`](scripts/seed.sql): `15` employees, `5` categories, `61` menus, `16` posts, `10` ingredients, `10` assets, and `1` `shop_config`.

To reset `local.db` back to the clean seeded state:

```bash
npm run db:reset
```

#### Database Schema (16 Tables in [`schema.sql`](schema.sql))

| Table | Purpose & Stored Data |
| :--- | :--- |
| `employees` | Staff accounts, roles (`Manager`, `Cashier`, `Barista`, `Kitchen Staff`, `Waiter`), and bcrypt password hashes |
| `attendance_records` | Daily clock-in/out logs, shift types, late arrival tracking, and duty status |
| `menus` | Catalog item metadata, categories, prices, descriptions, and image assets |
| `categories` | Product classification groups (`Coffee`, `Non-Coffee`, `Featured`, `Snack`, `Food`) |
| `shop_config` | Store branding, operational settings, marquee notices, gallery, and tax rates |
| `orders` | POS transaction tickets, line items, totals, change amounts, and fulfillment states |
| `posts` | Editorial blog promotions, marketing announcements, and published articles |
| `shift_schedules` | Weekly shift allocations mapped to employee roles and days of the week |
| `transactions` | Operational cash flow ledger, expenditures, and income records |
| `ingredients` | Raw stock tracking, minimum inventory thresholds, units, and supplier data |
| `recipes` | Ingredient-to-menu item recipes with required deduction amounts |
| `assets` | Commercial coffee machinery registry, serial numbers, condition, and maintenance dates |
| `feedbacks` | Customer guest ratings (1-5 stars), review messages, and shift employee associations |
| `notifications` | Internal table calls from customers (`/waiter`) and low-stock alerts |
| `notes` | Operational manager handoff notes and staff notice board |
| `images` | Uploaded image metadata and storage keys |

### 4. Running Locally & Verification

Start the frontend and local `/api/*` backend in a single command:

```bash
npm run dev
```

Open [http://localhost:8085](http://localhost:8085) in your browser.

Verify the API and SQLite database connection end-to-end while `npm run dev` is running:

```bash
# 1. API health check
curl http://localhost:8085/api/ping

# 2. Public database reads
curl http://localhost:8085/api/config
curl http://localhost:8085/api/categories
curl http://localhost:8085/api/menus

# 3. Staff login against local.db (bcrypt + JWT)
TOKEN=$(curl -s -X POST http://localhost:8085/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"employeeId":"EMP-MAN-001","password":"manager123"}' \
  | node -e "const d = JSON.parse(require('fs').readFileSync(0,'utf8')); console.log(d.token || '')")

# 4. Authenticated read from local.db
curl http://localhost:8085/api/employees -H "Authorization: Bearer $TOKEN"

# 5. Optional write-read-delete persistence check
CAT_ID=$(curl -s -X POST http://localhost:8085/api/categories \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"__TEST_CAT__","description":"DB connection test"}' \
  | node -e "const d = JSON.parse(require('fs').readFileSync(0,'utf8')); console.log(d.id || '')")
curl http://localhost:8085/api/categories
curl -X DELETE "http://localhost:8085/api/categories/$CAT_ID" -H "Authorization: Bearer $TOKEN"
```

#### Pre-Configured Demo Accounts

| Role | Employee ID | Email | Password | Default Route | Accessible Modules |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Manager** | `EMP-MAN-001` | `manager@americano.com` | `manager123` | `/dashboard` | All Modules (`/dashboard`, `/cashier`, `/menu`, `/kitchen`, `/inventory`, `/waiter`, `/feedback`, `/employees`, `/shifts`, `/assets`, `/finance`, `/posts`, `/settings`) |
| **Cashier** | `EMP-CSH-001` | `cashier1@americano.com` | `cashier123` | `/dashboard` | Dashboard (`/dashboard`), POS Cashier (`/cashier`), Menu (`/menu`), Feedback (`/feedback`) |
| **Barista** | `EMP-BAR-001` | `barista1@americano.com` | `barista123` | `/dashboard` | Dashboard (`/dashboard`), Kitchen Queue (`/kitchen`), Inventory (`/inventory`), Menu (`/menu`) |
| **Kitchen Staff** | `EMP-KIT-001` | `kitchen1@americano.com` | `kitchen123` | `/dashboard` | Dashboard (`/dashboard`), Kitchen Queue (`/kitchen`), Inventory (`/inventory`), Menu (`/menu`) |
| **Waiter** | `EMP-WAI-001` | `waiter1@americano.com` | `waiter123` | `/dashboard` | Dashboard (`/dashboard`), Waiter Calls (`/waiter`), Feedback (`/feedback`), Menu (`/menu`) |

> **Customer Self-Order:** No login is required to view `/` or place orders at `/order`.

### 5. Production Build

```bash
npm run build
```

---

## Author

**Widi Firmansyah** · [widifirmaan.web.id](https://widifirmaan.web.id)
