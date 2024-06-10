"use client"
import '../components/theme.css'
import React from 'react';
import CityForm from '../components/CityForm';
import WeatherDisplay from '../components/WeatherDisplay';
import { Col, ConfigProvider, Flex, Row, Typography } from 'antd';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const Home: React.FC = () => {
  return (
    <ConfigProvider >
      <Provider store={store}>
    <div style={{}}><Row>
    
      <Col lg={6} xs={2}></Col>
      <Col lg={12} xs={20}>
        <Flex justify='center' style={{flexDirection:"column"}}>
      <Typography.Title level={2}>Weather Information</Typography.Title>
      <CityForm />
      <WeatherDisplay />
      </Flex>
      </Col>
      <Col lg={6} xs={2}></Col>
      </Row>
    </div>
    </Provider>
    </ConfigProvider>
  );
};

export default Home;
