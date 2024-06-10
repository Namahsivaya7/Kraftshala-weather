"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchWeather } from '../store/weatherSlice';
// import { fetchWeather } from '../store/weatherSlice';

const CityForm: React.FC = () => {
  const [city, setCity] = useState('');
  const error = useSelector((state: RootState) => state.weather.error);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() !== '') {
      dispatch(fetchWeather(city.trim()));
      setCity('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:'flex',gap:10}}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} style={{display:'flex',gap:10,height:25}}/>
        <button type="submit" style={{background:"orange",color:"black",border:0,borderRadius:5}}>Search City</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default CityForm;
