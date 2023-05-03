import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { newsCountryList } from "../actions/newsActions";
import Cards from "../components/Cards";
import Loader from "../components/Loader";

const CountryNews = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getCountryNews = useSelector((state) => state.countrylist);

  const { loading, country_news, error } = getCountryNews;
  useEffect(() => {
    dispatch(newsCountryList(id));
  }, [id, dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="d-flex flex-wrap container gap-5 mt-4">
          {country_news.map((renderNews, index) => (
            <Cards key={index} news={renderNews} />
          ))}
        </div>
      )}
    </>
  );
};

export default CountryNews;
