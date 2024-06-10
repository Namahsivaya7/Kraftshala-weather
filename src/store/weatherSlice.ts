
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';

interface Weather {
  city: string;
  temperature: number;
  conditions: string;
  humidity:string;
  wind:string;
  time:string;
}

interface WeatherState {
  cities: Weather[];
  error: string | null;
}

const initialState: WeatherState = {
  cities: [],
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<Weather>) => {
      state.cities.push(action.payload);
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { addCity, setError } = weatherSlice.actions;

export default weatherSlice.reducer;

export const fetchWeather = (city: string): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9b835ae4ab787358a7b3e83a4d5cd1e&units=metric`);
    const data = await response.json();
    if (response.ok) {
      dispatch(
        addCity({
          city: data.name,
          temperature: data.main.temp,
          conditions: data.weather[0].main,
          humidity:data.main.humidity,
          wind:data.wind.speed,
          time:new Date(data.dt * 1000).toString()
        })
      );
    } else {
      dispatch(setError('City not found'));
    }
  } catch (error) {
    dispatch(setError('Failed to fetch weather data'));
  }
};
