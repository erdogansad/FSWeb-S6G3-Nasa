import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApod } from "@redux/slices/apodSlice";
import DetailSingle from "@layouts/DetailSingle";

const Home = () => {
  const dispatch = useDispatch();
  const { single, isLoading, error } = useSelector((state) => state.apod);

  useEffect(() => {
    dispatch(fetchApod());
  }, [dispatch]);

  return <DetailSingle isLoading={isLoading} error={error} single={single} />;
};

export default Home;
