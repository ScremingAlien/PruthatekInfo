"use client"
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
 
export default function DashWrapper({ children }) {



     return (
          <div className=" w-full flex  flex-row justify-between items-start ">


               <Sidebar />

               <div className=" w-full  flex flex-col  justify-between   px-2">
                    <Navbar />
                    <div className=" w-full h-full overflow-auto ">
                         {children}
                    </div>

               </div>

          </div>
     )
}
