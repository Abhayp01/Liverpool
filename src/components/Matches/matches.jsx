import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://free-football-soccer-videos.p.rapidapi.com/";
const API_HEADERS = {
  "X-RapidAPI-Key": "91f7559421msh48d6296710aba6bp111fedjsn7e1f471c5630",
  "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
};

export default function Matches() {
  const [matchesData, setMatchesData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("ENGLAND: Premier League");
  }, []);

  const fetchData = async (league) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL, { headers: API_HEADERS });
      setMatchesData(response.data);
      console.log(response.data);
      const filteredData = league
        ? response.data.filter((item) => item.competition.name === league)
        : response.data; // If league is empty, use all data
      const thumbnailLinks = filteredData.map((item) => item.thumbnail);
      setData(thumbnailLinks);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
    }
    setLoading(false);
  };

  const handleChange = (league) => {
    if (matchesData && Array.isArray(matchesData)) {
      setLoading(true);
      const filteredData = matchesData.filter(
        (item) => item.competition.name === league
      );
      const thumbnailLinks = filteredData.map((item) => item.thumbnail);
      setData(thumbnailLinks);
      setLoading(false);
    } else {
      setError("No data available");
    }
  };
  return (
    <>
      <div className="select_types flex justify-center p-4">
        <button
          className="mx-4 rounded-full border-double border-4 border-gray-600 font-medium"
          onClick={() => handleChange("ENGLAND: Premier League")}
        >
          <div className="bg-gray-400 p-2 rounded-full">Premier League</div>
        </button>
        <button
          className="mx-4 rounded-full border-double border-4 border-gray-600 font-medium"
          onClick={() => handleChange("SPAIN: La Liga")}
        >
          <div className="bg-gray-400 p-2 px-8 rounded-full">LaLiga</div>
        </button>
        <button
          className="mx-4 rounded-full border-double border-4 border-gray-600 font-medium"
          onClick={() => handleChange("ITALY: Serie A")}
        >
          <div className="bg-gray-400 p-2 rounded-full">Serie A</div>
        </button>
      </div>
      {error && <p className="error-message">Error: {error}</p>}
      <div className="flex justify-center">
        <div className="p-3">
          <h1 className="text-center text-2xl font-bold">Matches</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            data.map((imglink, index) => (
              <div key={index} className="m-3">
                <div className="img flex justify-center items-center w-auto lg:w-[500px] lg:h-[300px] overflow-hidden rounded-lg shadow-lg bg-red-400 transition-all duration-500 ease-in-out">
                  <img
                    className="w-[480px] h-[285px] object-fit rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                    src={imglink}
                    alt={`Thumbnail ${index}`}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
