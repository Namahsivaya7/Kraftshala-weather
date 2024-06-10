  "use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Typography, Button } from "antd";

import {
  BulbFilled,
  BulbOutlined,
  CloudOutlined,
  EnvironmentOutlined,
  SunOutlined,
} from "@ant-design/icons";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const WeatherDisplay: React.FC = () => {
  const [theme, setTheme] = useState("light");
   const cities = useSelector((state: RootState) => state.weather.cities);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div style={{width:"100%",display:"flex",justifyContent:"end",margin:'0 10px' ,}}>
      <Button onClick={toggleTheme} icon={theme === 'light' ? <BulbOutlined /> : <BulbFilled />} style={{display:"flex",border:0,justifyContent:"center",alignItems:"center",position:"fixed",margin:10}}>
        {/* Switch to {theme === "light" ? "Dark" : "Light"} Mode */}
      </Button>
      <div style={{margin:'50px 0'}}>
      {cities.map((city) => (
        <div key={city.city} id="cities">
          <Typography.Title id="citiesdata" level={2} style={{ display: "flex", gap: 10 }}>
            <EnvironmentOutlined />
            {city.city}
          </Typography.Title>
          <Typography id="citiesdata" style={{ display: "flex", gap: 20 }}>
            <SunOutlined />
            Temperature : {city.temperature}°C
          </Typography>
          <Typography id="citiesdata" style={{ display: "flex", gap: 20 }}>
            <CloudOutlined /> Humidity : {city.humidity} %
          </Typography>
          <Typography id="citiesdata"
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <CalendarTodayIcon />
            Date and Time : {city.time}
          </Typography>
        </div>
      ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
