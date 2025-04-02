import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AppNavbar from "../components/AppNavbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { fetchShoes } from "../features/shoes/shoesAction";

export default function Shoes() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.shoes.data); 
  console.log("Redux State Data:", data);

  useEffect(() => {
    dispatch(fetchShoes());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  console.log("Start Index:", startIndex);
  console.log("End Index:", endIndex);
  console.log("Total Data Length:", data?.length);


  const currentCards = Array.isArray(data) ? data.slice(startIndex, endIndex) : [];

  console.log("Current Cards After Slicing:", currentCards);

  return (
    <div className=" relative lg:py-10">
      <AppNavbar />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:px-32 lg:py-5 p-2">
        {currentCards.map((product, index) => (
          <div key={index} className="">
            <Cards
              id={product.id}
              images={product.images}
              price={product.price}
              title={product.title}
              description={product.description}
            />
          </div>
        ))}
      </div>
 
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-slate-600 text-white px-4 py-2 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => (prev * cardsPerPage < data.length ? prev + 1 : prev))}
          disabled={currentPage * cardsPerPage >= data.length}
          className="bg-slate-600 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
      <Footer/>
    </div>
  );
}
