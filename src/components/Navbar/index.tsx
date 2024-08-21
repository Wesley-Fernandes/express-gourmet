import { Menu } from "./Menu";


export default function Navbar(){
    return(
        <nav className="h-14 flex justify-between items-center border-b px-3">
            <h1 className="font-black text-lg">ExpressGourmet</h1>
            <Menu/>
        </nav>
    )
}