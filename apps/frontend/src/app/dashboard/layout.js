import DashWrapper from "./_components/DashWrapper";



export default function layout({ children }) {
          
     return (
          <div className="w-full bg-white  h-full  overflow-hidden relative" >
               <DashWrapper>{children}</DashWrapper>
          </div>
     )
}    
