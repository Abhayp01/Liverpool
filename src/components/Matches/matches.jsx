import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "91f7559421msh48d6296710aba6bp111fedjsn7e1f471c5630"

const API_URL = "https://free-football-soccer-videos.p.rapidapi.com/";
const API_HEADERS = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
};
export default function Matches() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, { headers: API_HEADERS });
        const filteredData = response.data.filter(
          (item) => item.competition.name === "ENGLAND: Premier League"
        );
        const thumbnailLinks = filteredData.map((item) => item.thumbnail);
        setData(thumbnailLinks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [axios, API_URL]);

  return (
    <>
      <div className="flex justify-center">
        <div className="p-3">
          <h1 className="text-center text-2xl font-bold">Matches</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            data.map((imglink, index) => (
              <div key={index} className="m-3">
                <div className="img flex justify-center items-center w-auto lg:w-[500px] lg:h-[300px]  overflow-hidden rounded-lg shadow-lg bg-red-400 transition-all duration-500 ease-in-out">
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
