import React from "react";
import './App.css';
import Box from "./components/Box/Box";
import BoxCard from "./components/BoxCard/BoxCard";
import Clock from "../src/clock.svg";
import LaptopHouse from "../src/laptop-house.svg";
import User from "../src/users.svg";


const data = [
  {
    id: 1,
    name: "box1",
    title: "Chấm công",
    icon: Clock
  },
  {
    id:2,
    name: "box2",
    title: "Làm việc tại nhà",
    icon: LaptopHouse
  },
  {
    id:3,
    name: "box3",
    title: "Chấm công 3",
    icon: User
  }
]
function App() {
  return (
      <>
        {data.map(item =>
            <div className={'box__container'} key={item.id}>
              <div className={'box__card'}>
                <img src={item.icon} className={'box__icon'}  alt={item.name} />
              </div>
              <div className={'box__title'}>{item.title}</div>
            </div>
        )}
    </>
  );
}

export default App;
