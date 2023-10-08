import { Link } from "react-router-dom"
import error404 from "../asset/images/error404.png"
import wave from "../asset/images/wave.svg"
import "../asset/PageNotFound.css"


function PageNotFound() {
  return (
    <main className="NotFound">
      <div className="NotFound-container">
        <div className="NotFound-picture-container">
          <img src={error404} alt="Erro 404: página não encontrada" />
        </div>
        <div className="NotFound-button-container">
    <Link to="/" className="bg-green-600 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl">Home</Link>
        </div>
      </div>
    
      <img className="NotFound-wave" src={wave} alt="" />
      <img className="NotFound-wave-upsidedown" src={wave} alt="" />
    </main>
)
}
export default PageNotFound
{/* <main className="flex items-center justify-center bg-gradient-to-r from-yellow-300 via-red-500 to-purple-600 bg-cover min-h-screen min-w-screen ">
<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-3 flex flex-col items-center max-h-[80vh] max-w-[80vw] ">
  <div className="w-full ">
    <img src={error404} alt="Error 404 Image" className="max-w-[80vw] h-full object-contain w-400" />
  </div>
  <div className="w-120 z-5">
<button>Home</button>
  </div>
</div>
<img className="fixed bottom-0 opacity-80 w-full z-0" src={wave} alt="" />
<img className="fixed opacity-20 rotate-180 top-0 w-full z-0" src={wave} alt="" />
</main>   */}
