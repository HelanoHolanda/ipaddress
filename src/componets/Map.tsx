import { MapContainer, Marker, Popup, TileLayer, } from 'react-leaflet'

const Map = () => {



  return (
    <div>
         <MapContainer center={[0, 0]} zoom={12} scrollWheelZoom={false} style={{ height: "100vh", width: "100vw",}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[0, 0]}>     
      <Popup>
        A pretty CSS3 popup. <br/> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  )
}
 
export default Map;
