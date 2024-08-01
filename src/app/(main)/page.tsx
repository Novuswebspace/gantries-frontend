import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-purple-50">
      <header className="p-4 bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="https://esamudaay.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/esamudaay-logo.svg"
                alt="eSamudaay Logo"
                width={200}
                height={50}
                priority
                className="hover:opacity-80 transition duration-300"
              />
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              className="text-[#5f3a9e] hover:text-[#4b2f79] transition duration-300"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="bg-[#5f3a9e] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#4b2f79] transition duration-300"
            >
              Join the Community
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4b2f79] mb-6">
            Gantries by eSamudaay
          </h1>
          <p className="text-s md:text-s text-[#5f3a9e] mb-4 max-w-2xl mx-auto">
            The community where young entrepreneurs are building great businesses.
            Join us to innovate, collaborate, and achieve success together!
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-[#5f3a9e] mb-8">
            Coming Soon!
          </p>
          <div className="space-x-4">
            <Link
              href="/sign-in"
              className="inline-block bg-[#5f3a9e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4b2f79] transition duration-300"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="inline-block bg-white text-[#5f3a9e] px-6 py-3 rounded-full font-semibold border-2 border-[#5f3a9e] hover:bg-purple-100 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <footer className="py-4 bg-white">
        <div className="container mx-auto text-center text-[#5f3a9e] text-sm">
          © 2024 Gantries by eSamudaay. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
