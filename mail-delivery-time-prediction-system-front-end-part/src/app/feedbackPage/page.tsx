// app/feedback/page.tsx

"use client";

import FeedbackForm from "@/components/feedbackForm/page";
import dynamic from "next/dynamic";
import RootLayout from "../layout";

const FeedbackPage = () => {
  const DynamicNavbar = dynamic(
    () => import("../customerPage/customerNavbar/Navbar"),
    {
      loading: () => null, // Placeholder while Navbar is loading
      ssr: false, // Disable server-side rendering for the Navbar component
    }
  );

  return (
    <RootLayout hideNavbar={true}>
      <DynamicNavbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">Give us your feedback</h1>
        <FeedbackForm />
      </div>
    </RootLayout>
  );
};

export default FeedbackPage;
