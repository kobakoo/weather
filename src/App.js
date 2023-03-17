import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = "b8f3259f2ef9d894c1026fec139d82d8"; // OpenWeatherMap APIキー
    const CITY_NAME = "Tokyo"; // 都市名
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`; // リクエストURL
    try {
      const response = await axios.get(URL); // APIにリクエスト
      setWeather(response.data); // 取得したデータをstateにセット
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather(); // コンポーネントがマウントされたときに関数を呼び出す
  }, []); // 空の配列を渡して一度だけ実行する

  return (
    <div className="flex h-screen w-full align-center justify-center max-w-full max-h-screen bg-zinc-900 ">
      {weather && (
        <div className="m-auto my-auto">
          <div className="p-16 bg-gray-50 rounded-2xl shadow-xl shadow-white hover:shadow duration-300">
            <img src={`./${weather.weather[0].main}.png`} alt="weather" />
            <h1 className="font-bold text-2xl text-sans max-w-full w-full text-center">
              {weather.name}
            </h1>
            <p className="text-base max-w-full w-full text-center">
              {weather.weather[0].main}
            </p>
            <p className="max-w-full w-full text-center text-sm">
              -{weather.weather[0].description}-
            </p>
            <p className="mt-4 max-w-full w-full text-center text-2xl font-mono">
              {weather.main.temp}°C
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
