// export default function Home() {
//   return (
//     <div className="flex-grow flex items-center justify-center">
//       <div className="text-center px-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-[#4b2f79] mb-6">
//           Gantries by eSamudaay
//         </h1>
//         <p className="text-s md:text-s text-[#5f3a9e] mb-4 max-w-2xl mx-auto">
//           The community where young entrepreneurs are building great businesses.
//           Join us to innovate, collaborate, and achieve success together!
//         </p>
//         <p className="text-2xl md:text-3xl font-semibold text-[#5f3a9e] mb-8">
//           Coming Soon!
//         </p>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Example shadcn component, adjust based on your setup
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
     

      {/* Hero Section */}
      <section className="relative bg-red-500 text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Unleash Your Entrepreneurial Potential with Gantries by eSamudaay
            </h1>
            <p className="mb-8">
              Empower your campus and local community through decentralized
              digital commerce
            </p>
            <Button
              variant="default"
              className="bg-white text-red-500 px-6 py-3 font-semibold rounded"
            >
              Join the Movement
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/path-to-your-image.jpg" // Replace with the actual image path
              alt="Hero Image"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-around">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 md:mb-0">
              <div className="text-purple-500 text-3xl mb-4">Become Leader</div>
              <p>Some text saying something good about leadership skills</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 md:mb-0">
              <div className="text-blue-500 text-3xl mb-4">Become Social</div>
              <p>Some text saying something good about the society skills</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-3xl mb-4">
                Make your Artwork
              </div>
              <p>Some text saying something good about the art skills</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-16">
        {/* About Us Section */}
        <section className="text-center mb-16">
          <p className="text-purple-500 text-lg font-semibold">About us</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            What is Gantries by eSamudaay?
          </h2>
        </section>

        {/* Cards Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-around mb-16">
          <Card className="bg-purple-500 text-white w-full md:w-1/3 m-2 p-6 rounded-lg shadow-md">
            <CardHeader className="font-bold text-xl">Gantries</CardHeader>
            <CardContent>
              <p>
                Explain the concept of Gantries and how it empowers local
                communities through ONDC protocols.
              </p>
            </CardContent>
            <CardFooter>
              <a href="#" className="text-white underline">
                Learn More
              </a>
            </CardFooter>
          </Card>
          <Card className="bg-white text-gray-900 w-full md:w-1/3 m-2 p-6 rounded-lg shadow-md">
            <CardHeader className="font-bold text-xl">Gantries</CardHeader>
            <CardContent>
              <p>
                Explain the concept of Gantries and how it empowers local
                communities through ONDC protocols.
              </p>
            </CardContent>
            <CardFooter>
              <a href="#" className="text-purple-500 underline">
                Learn More
              </a>
            </CardFooter>
          </Card>
          <Card className="bg-white text-gray-900 w-full md:w-1/3 m-2 p-6 rounded-lg shadow-md">
            <CardHeader className="font-bold text-xl">Gantries</CardHeader>
            <CardContent>
              <p>
                Explain the concept of Gantries and how it empowers local
                communities through ONDC protocols.
              </p>
            </CardContent>
            <CardFooter>
              <a href="#" className="text-purple-500 underline">
                Learn More
              </a>
            </CardFooter>
          </Card>
        </div>

        {/* Testimonial Section */}
        <section className="bg-purple-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Leveraging ONDC for Local Commerce
            </h2>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/path-to-profile-image.jpg" // Replace with actual image path
                alt="Seller"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="text-gray-900 font-semibold">Seller</p>
              <p className="text-gray-700 mt-2">
                Describe how eSamudaay utilizes ONDC open protocols along with
                its open-source technology to localize and democratize digital
                commerce (Gantries by eSamudaay - ...).
              </p>
              <p className="text-gray-500 mt-2 text-sm">May 8, 2020</p>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white py-16">
        {/* WHY Gantries Section */}
        <section className="container mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 text-left mb-8">
            WHY <span className="text-purple-500">Gantries</span>
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <ul className="space-y-4">
                <li className="text-gray-700">
                  <span className="text-purple-500">•</span> Emphasize the
                  unique opportunity to be part of a cutting-edge digital
                  commerce initiative that supports local businesses.
                </li>
                <li className="text-gray-700">
                  <span className="text-purple-500">•</span> Highlight how
                  Gantries allow students to launch and manage their own digital
                  businesses on campus, leveraging ONDC protocols and
                  eSamudaay's open-source technology.
                </li>
                <li className="text-gray-700">
                  <span className="text-purple-500">•</span> Use relatable
                  language and visuals that resonate with the college lifestyle.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/path-to-image.jpg" // Replace with actual image path
                alt="Why Gantries"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/path-to-image-2.jpg" // Replace with actual image path
              alt="Community of Innovators"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 text-left md:pl-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join a Thriving Community of Innovators
            </h2>
            <p className="text-gray-700 mb-8">
              Promote the collaborative aspect of Gantries, where students can
              network with like-minded peers, share ideas, and collaborate on
              projects. Include testimonials or quotes from students who have
              benefited from being part of the Gantries community.
            </p>
            <Button
              variant="default"
              className="bg-purple-500 text-white px-6 py-3 font-semibold rounded"
            >
              Learn More
            </Button>
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center p-6 space-y-10">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">
            The Future of{" "}
            <span className="text-pink-500">Digital is Local</span>
          </h1>
        </section>

        {/* Main Content Section */}
        <section className="flex flex-wrap justify-around w-full space-y-6 md:space-y-0 md:space-x-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center w-full md:w-1/3 p-4 shadow-lg rounded-lg bg-white">
            <img
              src="/images/empower-local.jpg"
              alt="Empower Local"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="mt-4 text-xl font-semibold">
              Empower Local, Go Global: Strengthen Your Community with Gantries
            </h2>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center w-full md:w-1/3 p-4 shadow-lg rounded-lg bg-white">
            <img
              src="/images/vocal-local.jpg"
              alt="Vocal for Local"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="mt-4 text-xl font-semibold">
              Your Campus, Your Economy: Vocal for Local with Gantries
            </h2>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col items-center justify-center w-full p-6 bg-gray-100 rounded-lg">
          <h2 className="text-3xl font-bold">
            Take The <span className="text-pink-500">First Step</span>
          </h2>
          <p className="mt-4 text-center">
            Encourage students to sign up for more information, attend a
            webinar, or join a campus event to learn more about how they can get
            involved. Offer exclusive early access or benefits for those who
            join the movement before a certain date, creating urgency and
            excitement.
          </p>
          <button className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-lg">
            Get Started
          </button>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center p-6 bg-black text-white">
        <p>&copy; 2024 eSamudaay. All rights reserved.</p>
      </footer>
    </div>
  );
}
