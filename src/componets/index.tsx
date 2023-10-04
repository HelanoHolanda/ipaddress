
import {GrFormNext} from 'react-icons/gr';

interface Props {
      value: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange: any;
}


const HomePage = ({value, onChange, ...props}:Props) => {

    
    return(
    <div className=" relative w-full bg-auth bg-cover h-80  ">

     <h1 className='text-center py-6 font-mono md:text-2xl  lg:text-3xl  sm:font-mono text-white '>IP Address Tracker</h1>

     <div className="flex justify-center ">

     <input type="text" placeholder="Search for any IP address or domain"
             value={value}
             {...props}
             onChange={onChange}
            className= "text-sm w-[260px] lg:w-[600px] md:w-[400px] md:px-4 md:py-4 sm:px-3 sm:py-3 border-transparent outline-none bg-white border-0 rounded-l-lg placeholder:italic  placeholder:text-slate-400 " 
      />
     <button  className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 duration-100 px-5 py-4 rounded-r-lg"  >
     <GrFormNext>
     </GrFormNext>
     </button> 
     </div>

    </div>
     )
}

export default HomePage;