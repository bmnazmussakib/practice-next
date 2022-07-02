import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="container">
            <nav>
                <div className="logo">
                    {/* <h1><span>NEXT</span> JS</h1> */}
                    <Image src='/logo.png' width={120} height={50} />
                </div>

                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/users"><a>Users</a></Link>
            </nav>
        </div>
    );
};

export default Navbar;