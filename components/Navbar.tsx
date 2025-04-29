import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            YouTube AI Agent
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/search"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Search
            </Link>
            <Link
              href="/recommend"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Recommendations
            </Link>
            <Link
              href="/history"
              className="text-gray-300 hover:text-white transition-colors"
            >
              History
            </Link>
            <Link
              href="/settings"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
