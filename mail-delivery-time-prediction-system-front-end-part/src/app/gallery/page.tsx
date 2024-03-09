import React from "react";
import Image from "next/image";
import Link from "next/link";
import RootLayout from "../layout";

const GalleryPage = () => {
  const galleryItems = [
    {
      id: 1,
      title: "FEB-14",
      description: "Surprise your partner with your blessing on time for upcoming valentines.",
      imageUrl: "/cardi.gif", // Replace with your actual image URL
    },
    {
      id: 2,
      title: "Accuracy",
      description: "Secure and accurate delivery times through a computerized system. See How it works >>>",
      imageUrl: "/mails.gif", // Replace with your actual image URL
    },
    {
      id: 3,
      title: "Packages",
      description: "Enjoy our special delivery with special packages and you'll see unexpected things. Check on HomePage",
      imageUrl: "/special.gif", // Replace with your actual image URL
    },
    {
      id: 4,
      title: "Secure ",
      description: "No more waiting on mails to deliver and missing on mails and more secure with further details ",
      imageUrl: "/deliv.gif", // Replace with your actual image URL
    },
    {
      id: 5,
      title: "Collect",
      imageUrl: "/poster.jpg", // Replace with your actual image URL
    },
    {
      id: 6,
      title: "Free",
      description: "Be our respected loyal customer with gaining more points on the account and have a chance to win 2 months free",
      imageUrl: "/free.jpg", // Replace with your actual image URL
    },
  ];

  return (
    <RootLayout>
      <section className="lg:py-16">
        <div className="grid grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative">
              <div className="bg-white rounded-md overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={`Item ${item.id}`}
                  className="object-cover w-full h-64 rounded-md mb-4 transition-transform transform-gpu hover:scale-105 hover:translate-y-[-10px]"
                  layout="responsive"
                  width={500}
                  height={300}
                />
                <div className="p-6 flex flex-col justify-between">
                  <div className="bg-black bg-opacity-10 rounded-md p-6 transition-transform transform-gpu hover:scale-110 hover:bg-rose-500">
                    <h2 className="text-xl font-semibold mb-2 text-white">{item.title}</h2>
                    <p className="text-gray-600 mb-4 font-bold hover:text-white">{item.description}</p>
                  </div>
                  <button className="text-blue-500">Click to See More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </RootLayout>
  );
};

export default GalleryPage;
