import "./content.style.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdRestaurant } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";

const Content = () => {
  return (
    <section className="content-section">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="content w-100 d-flex flex-column justify-content-center">
          <h1 className="mb-3 mt-4 fw-semibold text-center">
            إكتشف أماكن يعشقها الناس{" "}
          </h1>
          <p className="text-center fs-5 mb-5">
            سوف نساعدك لتجد أفضل الاماكن لقضاء اجمل الاوقات{" "}
          </p>
          <form className="content-form flex-column flex-lg-row d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="w-100 my-2 text-black flex-grow-1 px-3 rounded-1 border-0"
              placeholder="ابحث عن"
            />
            <input
              type="text"
              className="w-100 my-2 text-black mx-3 flex-grow-1 px-3 rounded-1 border-0"
              placeholder="الموقع"
            />
            <input
              type="submit"
              value="بحـــث"
              className="border-0 rounded-1"
              placeholder=""
            />
          </form>
          <div className="locations d-flex justify-content-center flex-wrap my-4">
            <a
              href="#"
              className="text-decoration-none text-white my-2 me-4 d-flex align-items-center"
            >
              <IoMdRestaurant className="me-2" /> مطعم
            </a>
            <a
              href="#"
              className="text-decoration-none text-white my-2 me-4 d-flex align-items-center"
            >
              <GiCoffeeCup className="me-2" /> مقهي
            </a>
            <a
              href="#"
              className="text-decoration-none text-white my-2 me-4 d-flex align-items-center"
            >
              <BiDrink className="me-2" />
              خروجات ليلية
            </a>
            <a
              href="#"
              className="text-decoration-none text-white my-2 me-4 d-flex align-items-center"
            >
              <AiOutlineShoppingCart className="me-2" /> تسوق
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
