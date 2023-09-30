const LongFavoriteButton = ({city, isFavorite, setFavorites}: { city?: string, isFavorite: boolean, setFavorites: (city: string, isFavorite: boolean) => void }) => {
    return (
        <button type="button"
                onClick={() => setFavorites(city!, true)}
                className={`ml-auto focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 ${isFavorite ? 'text-white bg-[#FF9119] hover:bg-[#FF9119]/80' : 'text-[#FF9119] bg-[#ffffff] hover:bg-[#ffffff]/80 ring-4 ring-[#FF9119]'}`}>
            <svg className="w-6 h-6 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill={isFavorite ? "#ffffff" : "#FF9119"} stroke={isFavorite ? "#ffffff" : "#FF9119"} viewBox="-4.31 -4.31 56.56 56.56">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"
                   stroke="#CCCCCC" strokeWidth="0.47939999999999994"></g>
                <g id="SVGRepo_iconCarrier"> <path style={{fill:isFavorite ? "#ffffff" : "#FF9119"}}
                                                   d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g>

            </svg>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
    )
}

export default LongFavoriteButton