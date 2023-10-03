import { TileLayer, Marker, MapContainer } from "react-leaflet";
import './App.css'
import HomePage from './componets'
import './index.css'
import Dashboard from './componets/Dashboard'
import { SetStateAction, useEffect, useState } from 'react'
import { Api } from './Api/Api'
import L from "leaflet";
import markerImg from './image/icon-location.svg'

const markerIcon = new L.Icon({
  iconUrl: markerImg,
  iconRetinaUrl: markerImg,
  iconSize: [33, 43],
});

function App() {

  const regexIPv4 = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g;

  const regexDomain = /(?:[a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}/;



  const [position, setPosition] = useState<[number, number] >([0, 0]);
  
  const [ip, setIp] = useState('') // input field

  const [ipAdress, setIpAdress] = useState("")  // dashboard fields
  const [isp, setIsp ] = useState("")           // dashboard fields
  const [location, setLocation] = useState("")
  const [timezone, setTimezone] =useState("")  // dashboard fields

  useEffect (() => {
    const initialData = async () => {
      const response = await Api.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_7MhIYjcHt8hm51361rx1BliIF7qc7&ipAddress=8.8.8.8") 
      const data = response.data
      if(data) {
        setIpAdress(data.ip);
        setIsp(data.isp);
        setTimezone(data.location.timezone);
        setPosition([data.location.lat, data.location.lng]);
        setLocation(`${data.location.region}, ${data.location.country}`);
        console.log(position)
      }
      
      }
  initialData()
  }, []);

  const getEnteredData = async () => {
    const res = await Api.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_API_KEY
      }&${
        regexIPv4.test(ip)
          ? `ipAddress=${ip}`
          : regexDomain.test(ip)
          ? `domain=${ip}`
          : ""
      }`
      )
    const data = await res.data
    if(data){
      setIpAdress(data.ip);
      setIsp(data.isp);
      setLocation(`${data.location.region}, ${data.location.country}`);
      setTimezone(data.location.timezone);
      setPosition([data.location.lat, data.location.lng]);
      console.log(position);
    } 
    }
  
  

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    getEnteredData()
    setIp("")
  }
 
  
  return (
       
    <>   
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossOrigin=""/>
     
    <form onSubmit={handleSubmit}>
      <HomePage 
       value={ip} 
       onChange={(e: { target: { value: SetStateAction<string> } }) => {
       return setIp(e.target.value)
       }}/>
       </form>
      <Dashboard ipAdress={ipAdress} isp={isp} location={location} timezone={timezone} />

    
      <MapContainer style={{height: '100vh', maxWidth: 'inherit',}}
      
      center={position} zoom={3} scrollWheelZoom={false}>
      
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
      <Marker position={position} icon={markerIcon}>
      
      </Marker>
  </MapContainer>,
    </>
  )
} 

export default App
