import React from 'react';
import {FiArrowDown, FiArrowUp} from 'react-icons/fi';
import DetailCard from "./DetailCard";
import LongDetailCard from "./LongDetailCard";
import WeatherIcon from "../helper/WeatherIcon";
import Forecast from "./Forecast";

const MainDetailLayout = ({data, isMetric}: { data: any, isMetric: boolean }) => (
    <div className="flex flex-col">
        <div className="flex justify-between mt-5 text-center flex-wrap flex-row">
            <LongDetailCard title="Weather Now">
                <div className="mt-[25px] flex flex-row justify-between items-center">
                    <div className="mr-8">
                        <WeatherIcon hasError={data === undefined} icon={data?.weather?.[0]?.icon}/>
                    </div>
                    <span className="info-text"><span>{data?.weather?.[0]?.main || "Clear"}</span></span>
                    <div className="flex flex-col">
                        <div className="info-text"><span className="!text-[40px]">{parseInt(data?.main?.temp)} {isMetric ? '°C' : '°F'}</span></div>
                        <div className="info-text !leading-3">Feels like: {Math.round(data?.main?.feels_like)}</div>
                    </div>
                </div>
            </LongDetailCard>
        </div>
        <div className="flex justify-between mt-5 text-center flex-wrap flex-row">
            <Forecast isMetric={isMetric}/>
        </div>
        <div className="flex justify-between mt-5 text-center flex-wrap flex-row">
        <DetailCard title="UV Index">
            <div className="mt-[25px]">
                <span className="info-text">Unavailable in Free API</span>
            </div>
        </DetailCard>
        <DetailCard title="Wind Status">
            <>
                <div className="info-text !text-base mt-5"><span>{data?.wind?.speed}</span> {isMetric ? 'km/s' : ' mph'}</div>
                <div className="info-text !text-base !leading-[1.9rem]">Angle: <span>{data?.wind?.deg}</span></div>
            </>
        </DetailCard>
        <DetailCard title="Sunrise & Sunset">
            <>
                <div className="sunrise icon">
                    <span><FiArrowUp/></span>{(new Date(data?.sys?.sunrise * 1000)).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })}</div>
                <div className="sunset icon">
                    <span><FiArrowDown/></span>{(new Date(data?.sys?.sunset * 1000)).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })}</div>
            </>
        </DetailCard>
        <DetailCard title="Humidity">
            <div className="flex-box">
                <span className="info-text"><span>{data?.main?.humidity}</span> % </span>
            </div>
        </DetailCard>
        <DetailCard title="Pressure">
            <div className="flex-box">
                <span className="info-text"><span>{data?.main?.pressure}</span> kPa</span>
            </div>
        </DetailCard>
        <DetailCard title="Visibility">
            <div className="flex-box">
                <span className="info-text"><span>{(data?.visibility / 1000).toFixed(1)}</span> km</span>
            </div>
        </DetailCard>
    </div>
    </div>
);

export default MainDetailLayout;