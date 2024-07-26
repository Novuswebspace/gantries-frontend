import React from 'react';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Background Image and Text */}
      <div className="w-1/2 relative">
        <Image
          src="/images/nature.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="absolute inset-0 flex flex-col justify-center p-16 text-white">
          <h1 className="text-5xl font-bold mb-6">Our Aim</h1>
          <p className="text-xl">
            Empowering Tomorrow's Leaders: Join a Thriving Community of Student Entrepreneurs to Innovate, Collaborate, and Achieve Success Together!
          </p>
        </div>
      </div>

      {/* Right side - Sign In Form */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-96">
          <h2 className="text-3xl font-semibold mb-8">Sign in</h2>
          <form>
            <button className="w-full py-3 px-4 border border-gray-300 rounded-lg mb-6 flex items-center justify-center text-gray-700 font-medium">
              <Image
                src="/images/google-icon.webp"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Continue with Google
            </button>

            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="mb-6">
              <input
                type="text"
                placeholder="User name or email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-gray-700 font-medium">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
            >
              Sign in
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{' '}
            <a href="/sign-up" className="text-gray-700 font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
