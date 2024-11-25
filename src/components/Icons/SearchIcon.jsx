function SearchIcon({color}) {
    return ( 
        <svg width="32" height="27" viewBox="0 0 32 27" fill={color ?? 'transparent'} xmlns="http://www.w3.org/2000/svg">
            <path d="M27.4925 23.1107L21.8878 18.3925M24.9156 12.2642C24.9156 17.0565 20.3009 20.9414 14.6082 20.9414C8.91558 20.9414 4.30078 17.0565 4.30078 12.2642C4.30078 7.47185 8.91558 3.58691 14.6082 3.58691C20.3009 3.58691 24.9156 7.47185 24.9156 12.2642Z" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default SearchIcon;