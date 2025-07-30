import { Link } from "react-router-dom";
import about from "../../assets/caregiver.jpg";
const Aboutus = () => {
  return (
    <section className="bg-black py-16 px-5">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Section: Image */}
          <div className="md:w-1/2">
            <img src={about} alt="About Us" className="rounded-lg shadow-lg" />
          </div>

          {/* Right Section: Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-5">About Us</h2>
            <p className="text-white leading-relaxed mb-6">
              At {}
              <span className="text-blue-500 font-semibold">
                Bangla Home Care
              </span>
              , we are passionate about helping individuals achieve their
              fitness and wellness goals. Our mission is to provide accessible,
              innovative, and inspiring solutions tailored to everyone’s unique
              journey.
            </p>
            <p className="text-white  leading-relaxed mb-6">
              Our team of professional trainers, nutritionists, and wellness
              experts work together to create personalized plans, ensuring our
              members stay motivated and achieve sustainable results. Whether
              you're a beginner or an experienced fitness enthusiast, we're here
              to support you every step of the way.
            </p>
            <Link
              to="/about"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
