
import React from "react";
import "./style.css";
import clock from "../../clock.svg";

const BoxCard = ({data}) => {
    return (
        <div className={'box'}>
            <div className={'box__card'}>
                <img src={clock} className={'box__icon'}  alt={data.name}/>
            </div>
            <div className="box__title"> {data.title}</div>
        </div>
    )
}

export default BoxCard;
