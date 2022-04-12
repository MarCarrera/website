import React from 'react';
import ServiceBox from './ServiceBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';
//import { useNavigate } from 'react-router-dom';


function Service(){
    //const navigate = useNavigate();
    //navigate('/detailsService');

    return(
        <div id ='features'>
            <div className ='a-container'>
                <ServiceBox image ={featureimage} title ='Service 1'/>
                <ServiceBox image ={featureimage1} title ='Service 2'/>
                <ServiceBox image ={featureimage2} title ='Service 3'/>
                <ServiceBox image ={featureimage} title ='Service 4'/>                
            </div>
            <div className ='a-container'>
                <ServiceBox image ={featureimage} title ='Service 5'/>
                <ServiceBox image ={featureimage1} title ='Service 6'/>
                <ServiceBox image ={featureimage2} title ='Service 7'/>
                <ServiceBox image ={featureimage} title ='Service 8'/>
            </div>
        </div>
    )

}
export default Service;