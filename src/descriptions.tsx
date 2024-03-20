import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp ,FaWind} from "react-icons/fa";

import {BiHappy} from "react-icons/bi"
import {MdCompress,MdOutlineWaterDrop} from "react-icons/md"
import { Description,Card,DescriptionCardIcon,DescriptionSmall} from './style';


const Descriptions=({weather,units}:{weather:any, units:any} )=> {

  const tempUnit = units === 'metric' ? '°C' : '°F'
  const windUnit = units === 'metric' ? 'm/s' : 'm/h' 

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min?.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max?.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like?.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed?.toFixed(),
      unit: windUnit,
    },
  ];

  return (
      <div className='grid grid-cols-2'>
        {cards.map(({id,icon,title,data,unit})=>(
            <div className='flex flex-col items-center justify-between p-[1rem] rounded-[0.4rem] bg-[rgba(0,0,0,0.7)]' key={id}>
                <div className="w-full flex justify-center items-center gap-[5px] mb-[12px]">
                    {icon}
                    <div className='text-transform-capitalize'>{title}</div>
                </div>
                <h2>{`${data}${unit}`}</h2>
            </div>
        ))}
      </div>
  )
}

export default Descriptions;