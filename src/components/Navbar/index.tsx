import Image from "next/image";
import { Menu } from "./Menu";


export default function Navbar(){
    return(
        <nav className="h-14 flex justify-between items-center border-b px-3 bg-green-700 border-b-yellow-600">
            <div className="h-12 w-14">
                <Image src="/jj.png" alt="JJ" width={80} height={80} className="w-full h-full object-fill" priority/>
            </div>
            <Menu/>
        </nav>
    )
}