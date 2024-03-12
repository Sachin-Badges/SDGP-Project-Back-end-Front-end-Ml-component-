import RootLayout from "../layout";
import Navbar from "../customerPage/customerNavbar/Navbar";

const Feedback = () => {
  return (
    <RootLayout hideNavbar={true}>
      <Navbar />
      <div> Feedback </div>
    </RootLayout>
  );
};

export default Feedback;
