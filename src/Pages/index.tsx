import {GrFormNext} from 'react-icons/gr';
import {useEffect} from 'react';
import axios from 'axios';

'https://geo.ipify.org/api/v2/country?apiKey=at_Re2rYbfMJrcgYF9iAH3yJoLmsD4LQ&ipAddress=8.8.8.8'

const HomePage = () => {

    
    const Api = async () => {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_API_KEY}&ipAddress=8.8.8.8`)
        return response.data
    }
console.log(Api);
    
    return(
    <div className=" relative w-full bg-[url('src/image/desktop.png')] bg-cover h-80">

     <h1 className='text-center py-6 font-mono text-3xl text-white'>IP Address Tracker</h1>

     <div className="flex justify-center ">

     <input type="text" placeholder="Search for any IP address or domain" 
     className= "w-[600px] px-4 py-4 border-transparent outline-none bg-white border-0 rounded-l-lg placeholder:italic placeholder:text-slate-400 " 
      />
     <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 duration-100 px-5 py-4 rounded-r-lg"
     >
     <GrFormNext>
     </GrFormNext>
     </button> 
     </div>

    </div>
     )
}

export default HomePage;