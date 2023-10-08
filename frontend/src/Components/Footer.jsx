import {Facebook,Instagram,Twitter} from "../asset/icon"
import { AiFillYoutube } from "react-icons/ai"
import Logo from "./Logo"

function Footer() {
  return (
<section className='min-h-[30vh] w-screen bg-white relative text-black flex flex-col'>
<div className='w-3/4 mx-auto my-8 flex justify-between border-b border-[#000000] md:w-90 md:h1:font-akaya-telivigala'>
<div className='flex flex-col justify-center items-center md:w-full'>
<Logo/>
<div className='flex items-center space-x-2 pr-2 my-4 '>
<a href='https://www.facebook.com/groups/thebrideassemblychurchlagos' className="transition-transform hover:scale-125" target='_blank' rel='noopener'>
<Facebook/>
</a>
<a href='https://www.instagram.com/brideassembly1/' target='_blank' rel='noopener' className="transition-transform hover:scale-125">
<Instagram/>
</a>
<a href='https://twitter.com/brideassembly1' target='_blank' rel='noopener' className="transition-transform hover:scale-125">
<Twitter/>
</a>
<a href='https://www.youtube.com/@BrideAssembly1' target='_blank' rel='noopener' className="transition-transform hover:scale-125">
<AiFillYoutube size={35}/>
</a>
</div>
</div>
{/* https://bridetvstreaming.org/radio/ */}
<ul className="list-none w-1/2 grid grid-cols-2 grid-rows-3 gap-4 md:grid md:w-full">
<a href="https://brideassemblychurch.org.ng/" target='_blank' rel='noopener'><li className="cursor-pointer  w-0 h-2 bg-[theme(text)] transition-width duration-300 ease-in-out">Church</li></a>
<a href="https://brideassemblychurch.org.ng/event/" target='_blank' rel='noopener'><li className="cursor-pointer  w-0 h-2 bg-[theme(text)] transition-width duration-300 ease-in-out">Events</li></a>
<a href="https://brideassemblychurch.org.ng/contact-us/" target='_blank' rel='noopener'><li className="cursor-pointer  w-0 h-2 bg-[theme(text)] transition-width duration-300 ease-in-out">Contact</li></a>
<a href="https://brideassemblychurch.org.ng/media/" target='_blank' rel='noopener'><li className="cursor-pointer  w-0 h-2 bg-[theme(text)] transition-width duration-300 ease-in-out">Media</li></a>
<a href="https://bridetvstreaming.org/radio/ " target='_blank' rel='noopener'><li className="cursor-pointer  w-0 h-2 bg-[theme(text)] transition-width duration-300 ease-in-out">Radio</li></a>
<a href="https://brideassemblychurch.org.ng/donations/" target='_blank' rel='noopener'><li className="cursor-pointer  w-0 h-2 bg-[theme(text)] transition-width duration-300 ease-in-out">Donations</li></a>
</ul>

</div>
<div className='w-3/4 mx-auto flex justify-between items-center md:flex md:flex-col md:w-full'>
<span>&copy; {new Date().getFullYear()} Bride Assembly, Lagos Church. All right reserved </span>
</div>
</section>
    )
}
export default Footer