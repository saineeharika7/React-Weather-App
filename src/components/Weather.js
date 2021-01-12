import React from 'react';
import '../App.css'

const Weather = (props) => {
    console.log(props.temp_celsius)
    return (
        <div 
        className ="main-container text-light " >
            <div className ="cards pt-5">
                <h1>{props.city}</h1>
                <h5 className="py-4 px-3">
                   <i className ={ `wi ${props.weathericon} display-1`} /> 
                </h5>
                {temp(props.temp_celsius)}
                  {/**show max and min temperatures */}
                  {minmaxTemp(props.temp_max,props.temp_min)}

                  <h4 className ='py-3 px-4'>{props.description}</h4>
            </div>
        </div>
    );
};
function minmaxTemp (min,max) {
    if(min && max)
    return(
        <h3>
            <span className ="px-3">{min}&deg;</span>
            <span className ="px-3">{max}&deg;</span>

        </h3>
    )
}
function temp(temperature){
    if(temperature){
    return(
        <h1 className= "px-5">{temperature}&deg;</h1>
    )
}

}

export default Weather;