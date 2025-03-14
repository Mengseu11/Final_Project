import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AppNavbar from "../components/AppNavbar";
import Cards from "../components/Cards";
import { fetchMen } from "../features/people/peopleAction"; // Ensure fetchMen fetches products

export default function Men() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.men.data); // Ensure the state is correctly set
  console.log("Redux State Data:", data);

  useEffect(() => {
    dispatch(fetchMen());
  }, [dispatch]);

  // Ensure data is an array before slicing
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  console.log("Start Index:", startIndex);
  console.log("End Index:", endIndex);
  console.log("Total Data Length:", data?.length);

  // Use optional chaining to prevent errors if `data` is undefined
  const currentCards = Array.isArray(data) ? data.slice(startIndex, endIndex) : [];

  console.log("Current Cards After Slicing:", currentCards);

  return (
    <div className=" py-10 ">
      <AppNavbar />
      <div className="grid sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-4 gap-4 px-32 py-5">
        {currentCards.map((product, index) => (
          <div key={index} className="">
            <Cards
              id={product.id}
              images={product.images} // ✅ Pass array of images
              price={product.price}
              title={product.title}
              description={product.description}
            />
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
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
    </div>
  );
}
