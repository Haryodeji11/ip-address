import React, { useEffect } from 'react';
import { memo } from 'react';

const Container = (props) => {
    const {input, lat, lon, isp, city, timezone} = props
    console.log(input, lat, lon, isp, city, timezone);

    useEffect(()=>{
        if(lat && lon){

            try  {

                let map = L.map('map-container').setView([lat, lon], 10);
                console.log(lat,lon);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
        
                L.marker([lat, lon]).addTo(map)
                    .bindPopup("here's your location")
                    .openPopup();
    
                 } catch(err){
    
                    console.log(err.message);
                    
                }

        }
    },[lat, lon])

        

            console.log({lat, lon});
    return ( 
        
        <>
             <div id='map-container'>
             <div  className="map">
                 <div  className="map_details">
                     <div className="map_details_header">
                         IP ADDRESS
                     </div>
                     <div className="map_details_body">
                         {input}
                     </div>
                 </div>

                 <div className="map_details">
                     <div className="map_details_header">
                         LOCATION
                     </div>
                     <div className="map_details_body">
                         {city}
                     </div>
                 </div>

                 <div className="map_details">
                     <div className="map_details_header">
                         TIME ZONE
                     </div>
                     <div className="map_details_body">
                       {timezone}
                     </div>
                 </div>

                 <div className="map_details">
                     <div className="map_details_header">
                         ISP
                     </div>
                     <div className="map_details_body">
                         {isp}
                     </div>
                 </div>
             </div>
             </div>
             </>
     );
}
 
export default memo(Container);
