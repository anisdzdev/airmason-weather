import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export const Search = ({className} : {className?: string|undefined}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    const handleSearch = () => {
        if (!process.env.REACT_APP_API_KEY || !process.env.REACT_APP_API_URL) {
            return toast.error('API key or API URL not found')
        }
        navigate(`/city/${searchTerm}`)
    }

    return (
        <form className={className} onSubmit={handleSearch}>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search"
                       className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                       value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                       placeholder="Search Cities..." required/>
                    <button type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search
                    </button>
            </div>
        </form>
    )
}