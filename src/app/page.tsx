import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-amber-800"> WOOF COFFEE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/menu" className="text-gray-700 hover:text-amber-600 font-medium">Menu</Link>
              <Link href="/order" className="text-gray-700 hover:text-amber-600 font-medium">Order</Link>
              <Link href="/cart" className="text-gray-700 hover:text-amber-600 font-medium">Cart</Link>
              <Link href="/orders" className="text-gray-700 hover:text-amber-600 font-medium">Orders</Link>
              <Link href="/login" className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 font-medium">Login</Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Welcome to WOOF COFFEE</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Seattle's premier virtual coffee shop. Order your favorite drinks and pastries 
            through our AI-powered ordering system or browse our menu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors">
              Start Ordering with AI
            </Link>
            <Link href="/menu" className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-colors">
              Browse Menu
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
