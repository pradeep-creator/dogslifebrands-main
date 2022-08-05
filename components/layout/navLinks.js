import Link from "next/link"

const Index = ({ isHome = false }) => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "70px" }}>
            {/* <div><a  href="/" style={{ color: isHome ?  "white": "black" }}>Home</a></div> */}
            <div><Link href="/"><a>Home</a></Link></div>
            <div><Link href="/#sec-1f01"><a>Brands</a></Link></div>
            <div><Link href="/#sec-8229"><a>Opportunities</a></Link></div>

            {/* <div><a href="/#sec-1f01" style={{  color: isHome ?  "white": "black" }}>Brands</a></div>
            <div><a href="/#sec-8229" style={{  color: isHome ?  "white": "black" }}>Opportunities</a></div> */}

            <div><Link href="/about"><a>About</a></Link></div>
            <div><Link href="/contact"><a>Contact</a></Link></div>
        </div>
    )
}

export default Index