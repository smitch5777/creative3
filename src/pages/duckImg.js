import React from 'react';
import './home.css'
import { BallTriangle } from 'react-loader-spinner'

;<BallTriangle
height={100}
width={100}
radius={5}
color="#42170E"
ariaLabel="ball-triangle-loading"
wrapperClass={{}}
wrapperStyle="./home.css"
visible={true}
/>

const DuckImg = ({isLoading, imgsrc }) => {
    console.log('duckImg called with: ' + isLoading + ' and ' + imgsrc);
    return isLoading ? ( 
            <BallTriangle/>
    ) : (
        <img alt="duck" src={imgsrc}/>
    );
}

export default DuckImg