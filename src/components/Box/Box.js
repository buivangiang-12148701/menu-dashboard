import React from 'react';
import "./style.css";
import clock from "../../clock.svg";

function Box() {
    return (
        <div className={'box'}>
            <div className={'box__card'}>
                <img src={clock} className={'box__icon'}  alt={'address-book'}/>
            </div>
            <div className={'box__title'}> hello</div>
        </div>
    )
};

export default Box;
