import './Design.css'

function Navbar() {
    return (
        <>
        <nav>
            <img className='navicon' src="/All_About_Automotive.png" alt="icon" width={64} height={64} />
            <h1 className='iconname'>All About Automotive</h1>
            <div className='navlinks'>
                <a href="#home">Home</a>
                <a href="#lamborghini"><img src="/Lamborghini.png" alt="" width={40}/></a>
                <a href="#toyota"><img src="/Toyota.png" alt="" width={40}/></a>
                <a href="#bmw"><img src="/BMW.png" alt="" width={40}/></a>
            </div>
        </nav>
        </>
    )
}

export default Navbar