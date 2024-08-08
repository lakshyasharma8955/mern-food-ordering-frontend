import mobileImg from "../assets/mobileImg.png";
import appDownload from "../assets/appDownload.png";
import SearchBar,{SearchForm} from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePages = () =>
    {
      const navigate = useNavigate();
      const handleSearchForm = (searchData : SearchForm) =>
         {
              navigate({
               pathname : `/search/${searchData.searchQuery}`
              })
         }

         const handleReset = () =>
            {
               console.log("Reset Form!")
            }
       return (
       <div className="flex flex-col gap-12">
       <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
        Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>

        <SearchBar
         onSubmit = {handleSearchForm}
         onReset = {handleReset}
         placeHolder = "Search by City or Town"
        />
       </div>
             <div className="grid md:grid-cols-2 gap-5">
                  <img src={mobileImg} alt="" />
                  <div className="flex flex-col items-center justify-center gap-4 text-center">
                     <span className="font-bold text-3xl tracking-tighter">
                     Order takeaway even faster!
                     </span>
                     <span>
            Download the TastyTwist App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownload} alt="" />
                  </div>
             </div>
       </div>
       )
    }
    export default HomePages