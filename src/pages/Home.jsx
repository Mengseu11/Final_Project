import { FaMinus, FaPlus } from "react-icons/fa";
import { ButtonIcon } from "../components/AppButton";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router";
export default function Home() {
  // const dispatch = useDispatch();

  // const { data, status, error } = useSelector((state) => state.movie);

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, []);

  // const onIncreasement = () => {
  //   console.log(increment());
  //   dispatch(increment());
  // };
  // const onDecreasement = () => {
  //   console.log(decrement());
  //   dispatch(decrement());
  // };

  return (
    <main>
          <Banner/>
    </main>
  );
}
