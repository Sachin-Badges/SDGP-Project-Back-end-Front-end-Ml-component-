import RootLayout from "../layout";
import Navbar from "../customerPage/customerNavbar/Navbar";
import Image from "next/image";
import img3 from "../../../public/details.png";
import img4 from "../../../public/profile02.png";
import img2 from "../../../public/image2.jpg";

const ProfilePage = () => {
  return (
    <RootLayout hideNavbar={true}>
      <Navbar />

      <div className="banner flex items-center">
        <div className="w-full md:w-1/2">
          <Image src={img3} alt="sample.img" />
        </div>
        <div className="bannerText text-left ml-5 w-full md:w-1/2">
          <h1 className="main text-4xl font-bold">
            The Mail Delivery Time Prediction System
          </h1>
          <p className="description text-lg">
            You can view all of the relevant details linked with the email you
            received. Explore detailed information such as the sender&apos;s
            name, delivery date, and any further details. This allows you to
            find important information about your mails even before they reach
            your door.
          </p>
        </div>
      </div>

      <div className="pl-5 pr-6 md:pl-10 bg-white ">
        <h3 className="my-8 text-white bg-red-900 text-center mt-5 rounded ">
          Customer Profile
        </h3>

        <div className="relative flex justify-center items-center p-5 ">
          <div className="absolute top-6.5 left-6.5 w-87 h-87 bg-red-900 opacity-50 rounded"></div>
          <Image
            src={img2}
            alt="sample2.img"
            className="imageTwo rounded md:pb-5 "
          />

          <form className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md">
            <div className="flex items-center justify-center">
              <svg
                className=" w-24  text-White"
                data-slot="icon"
                fill="none"
                stroke-width="2.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </div>
            <div className=" pb-20 sm:pb-5 md:pb-10 ">
              <label
                htmlFor="Username"
                className="label text-white font-bold text-2xl"
              >
                Username :
              </label>
              <input
                type="text"
                name="username"
                className="input rounded bg-gray-300 w-full  text-black font-bold pl-3"
              />
            </div>

            <div className="sm:pb-5 md:pb-10">
              <label
                htmlFor="Address"
                className="label text-white font-bold text-2xl"
              >
                Address :
              </label>
              <input
                type="text"
                id="Address"
                name="Address"
                className="input rounded bg-gray-300 w-full text-black font-bold pl-3"
              />
            </div>

            <div className=" pb-20 sm:pb-5 md:pb-10">
              <label
                htmlFor="NIC No"
                className="label text-white font-bold text-2xl"
              >
                NIC No:
              </label>
              <input
                type="text"
                id="NIC No"
                name="NIC No"
                className="input rounded bg-gray-300 w-full  text-black font-bold pl-3"
              />
            </div>

            <div className=" pb-20 sm:pb-5 md:pb-10">
              <label
                htmlFor="Longitude"
                className="label text-white font-bold text-2xl"
              >
                Longitude :
              </label>
              <input
                type="text"
                id="Longitude"
                name="Longitude"
                className="input rounded bg-gray-300 w-full  text-black font-bold pl-3"
              />
            </div>

            <div className=" pb-20 sm:pb-5 md:pb-10">
              <label
                htmlFor="Latitude"
                className="label text-white font-bold text-2xl"
              >
                Latitude :
              </label>
              <input
                type="text"
                id="Latitude"
                name="Latitude"
                className="input rounded bg-gray-300 w-full  text-black font-bold pl-3"
              />
            </div>

            <div className=" pb-20 sm:pb-5 md:pb-5 ">
              <label
                htmlFor="Contact Number"
                className="label text-white font-bold text-2xl"
              >
                Contact Number :
              </label>
              <input
                type="text"
                id="Contact Number"
                name="Contact Number"
                className="input rounded bg-gray-300 w-full  text-black font-bold "
              />
            </div>
          </form>
        </div>
      </div>
    </RootLayout>
  );
};

export default ProfilePage;

// import RootLayout from "../layout";
// import Navbar from "../customerPage/customerNavbar/Navbar";
// import Image from "next/image";
// import img3 from "../../../public/details.png";
// import img2 from "../../../public/image2.jpg";

// const ProfilePage = () => {
//   return (
//     <RootLayout hideNavbar={true}>
//       <Navbar />

//       <div className="banner flex flex-col md:flex-row items-center">
//         <div className="w-full md:w-1/2">
//           <Image src={img3} alt="sample.img" />
//         </div>
//         <div className="bannerText text-left ml-5 w-full md:w-1/2">
//           <h1 className="main text-4xl font-bold">The Mail Delivery Time Prediction System</h1>
//           <p className="description text-lg">
//             You can view all of the relevant details linked with the email you received. Explore detailed information such as the sender's name, delivery date, and any further details. This allows you to find important information about your mails even before they reach your door.
//           </p>
//         </div>
//       </div>

//       <div className="pl-5 pr-6 md:pl-10 bg-white">
//         <h3 className="my-8 text-white bg-red-900 text-center mt-5 rounded">Customer Profile</h3>

//         <div className="relative flex flex-col md:flex-row justify-center items-center p-5 ">
//           <div className="absolute top-6.5 left-6.5 md:w-87 md:h-87 bg-red-900 opacity-50 rounded hidden md:block"></div>
//           <Image src={img2} alt="sample2.img" className="imageTwo rounded mb-5 md:mb-0 md:mr-5 md:pb-5 md:w-1/2" />

//           <form className="w-full max-w-md">
//             <div className="pb-3">
//               <label htmlFor="Username" className="label text-white font-bold text-2xl block">Username:</label>
//               <input type="text" name="username" className="input rounded bg-gray-300 w-full text-black font-bold pl-3" />
//             </div>

//             <div className="pb-3">
//               <label htmlFor="Address" className="label text-white font-bold text-2xl block">Address:</label>
//               <input type="text" id="Address" name="Address" className="input rounded bg-gray-300 w-full text-black font-bold pl-3" />
//             </div>

//             <div className="pb-3">
//               <label htmlFor="NIC No" className="label text-white font-bold text-2xl block">NIC No:</label>
//               <input type="text" id="NIC No" name="NIC No" className="input rounded bg-gray-300 w-full text-black font-bold pl-3" />
//             </div>

//             <div className="pb-3">
//               <label htmlFor="Longitude" className="label text-white font-bold text-2xl block">Longitude:</label>
//               <input type="text" id="Longitude" name="Longitude" className="input rounded bg-gray-300 w-full text-black font-bold pl-3" />
//             </div>

//             <div className="pb-3">
//               <label htmlFor="Latitude" className="label text-white font-bold text-2xl block">Latitude:</label>
//               <input type="text" id="Latitude" name="Latitude" className="input rounded bg-gray-300 w-full text-black font-bold pl-3" />
//             </div>

//             <div className="pb-3">
//               <label htmlFor="Contact Number" className="label text-white font-bold text-2xl block">Contact Number:</label>
//               <input type="text" id="Contact Number" name="Contact Number" className="input rounded bg-gray-300 w-full text-black font-bold pl-3" />
//             </div>
//           </form>

//         </div>
//       </div>
//     </RootLayout>
//   );
// };

// export default ProfilePage;
