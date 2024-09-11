import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchApod } from "@redux/slices/apodSlice";
import DetailSingle from "@layouts/DetailSingle";

const SelectDate = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { single, isLoading, error } = useSelector((state) => state.apod);

  useEffect(() => {
    if (searchParams.has("date")) {
      dispatch(fetchApod(searchParams.get("date")));
    }
  }, [searchParams, dispatch]);

  return <DetailSingle isLoading={isLoading} error={error} single={single} />;
};

export default SelectDate;
