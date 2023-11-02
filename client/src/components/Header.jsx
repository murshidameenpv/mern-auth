import {Link} from "react-router-dom"
export default function Header() {
    return (
        <div className="bg-slate-300">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <h1 className="font-bold">Auth App</h1>
                <ul className="flex gap-8">
                    <Link to='/'>
                        <li className="text-black hover:text-blue-500 transition duration-200">Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className="text-black hover:text-blue-500 transition duration-200">About</li>
                    </Link>
                    <Link to='sign-in'>
                        <li className="text-black hover:text-blue-500 transition duration-200">Sign In</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
