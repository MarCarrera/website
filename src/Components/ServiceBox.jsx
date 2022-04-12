import React from 'react';

function ServiceBox(props){
    return(
        <div className ='a-box' >
            <div className ='a-b-img'>
                <center><img src ={props.image} /></center>
            </div>
            <div className = 's-b-text'>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}
export default ServiceBox;