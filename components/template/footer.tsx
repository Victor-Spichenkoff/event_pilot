interface IFooter {
    notAbsolute?: boolean
}


export const Footer = ({notAbsolute}: IFooter) => {
    const now = new Date()

    const year = now.getFullYear()

    return (
        <footer className={`${!notAbsolute ? "absolute" : "self-end mt-3"}
          bottom-0 right-0  bg-secondary border-0 border-y-gray-400 px-2 py-1 
        rounded-lg rounded-br-none
        text-xs text-secondary-foreground shadow-md font-playfair
        `}>
            Victor Spichenkoff &copy; 2025-{year}
        </footer>
    )
}
