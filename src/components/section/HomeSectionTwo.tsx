
const HomeSectionTwo = () => {
    return (
        <div
        className="flex flex-col flex-none flex-nowrap items-center justify-center gap-0 h-[80vh] w-full p-[160px_24px_80px] overflow-visible relative"
        >

        <div className="absolute">
            <img decoding="async" sizes="100vw" src="https://framerusercontent.com/images/H5C9PEz6HOH8XJZgEi1YXASUGso.jpg" alt="Hero image" 
            
            style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center center",
                objectFit: "cover",
                imageRendering: "auto"
            }}
            />
        </div>
        <div
        //  className="framer-1cl55z2"
            className="flex flex-col items-center justify-center gap-10 min-h-min w-full max-w-[720px] relative z-5 "
        >

            <h1
            style={{
                fontSize: "60px",
                fontWeight: "400",
                fontFamily: "Inter Tight, sans-serif",
                fontStyle: "normal",
                fontOpticalSizing: "auto",
                color: "rgb(252, 252, 250)"
            }}
            // className="text-4xl font-bold inter-tight-uniquifier "
            >Home Section Two</h1>
        </div>
            </div>
    )
}

export default HomeSectionTwo
