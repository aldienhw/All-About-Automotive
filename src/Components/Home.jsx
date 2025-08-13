import './Design.css'

function Home() {
    return (
        <>
        <section id='home'>
            <div className='homelogo'>
            <img className='navicon2' src="All_About_Automotive.png" alt="icon" width={180} />
            </div>
            <div className='hometext'>
                <h1>All About Automotive</h1>
            <p>
                A place about automotive only for you.
            </p>
            </div>
        </section>
        </>
    )
}

export default Home
