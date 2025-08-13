import './Design.css'

function Navbar() {
    return (
        <>
        <nav>
            <img className='navicon' src="/All-About-Automotive/All_About_Automotive.png" alt="icon" width={64} height={64} />
            <h1 className='iconname'>All About Automotive</h1>
            <div className='navlinks'>
                <a href="#home">Home</a>
                <a href="#lamborghini"><img src="/All-About-Automotive/Lamborghini.png" alt="" width={40}/></a>
                <a href="#toyota"><img src="/All-About-Automotive/Toyota.png" alt="" width={40}/></a>
                <a href="#bmw"><img src="/All-About-Automotive/BMW.png" alt="" width={40}/></a>
            </div>
        </nav>
        </>
    )
}

export default Navbar
