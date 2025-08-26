import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 shadow-lg p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-6">📊 Dashboard</h2>
        <ul className="menu space-y-2">
          <li>
            <Link href="/dashboard">🏠 Home</Link>
          </li>
          <li>
            <Link href="/dashboard/add-product">➕ Add Product</Link>
          </li>
          <li>
            <Link href="/dashboard/products">📦 Products</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="navbar bg-base-100 shadow rounded-lg mb-6">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-lg">My App</a>
          </div>
          <div className="flex-none">
            <button className="btn btn-outline btn-sm">Logout</button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="bg-white rounded-xl shadow p-6">{children}</div>
      </main>
    </div>
  );
}
