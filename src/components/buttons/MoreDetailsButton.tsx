const MoreDetailsButton = ({moreDetails}: { moreDetails: () => void }) => {
    return (
        <button className="ml-auto" onClick={moreDetails}>
            <svg className="w-6 h-6 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 18 6-6-6-6"/>
            </svg>
        </button>
    )
}

export default MoreDetailsButton;