import './Design.css'

function Content() {
    return (
        <>
        <section id='lamborghini'>
            <video autoPlay muted loop playsInline>
                <source src="/All-About-Automotive/vecteezy_aurangabad-india-oct-30-2023-3d-rendered-cinematic-view_34495911.mp4" type="video/mp4"/>
            </video>
            <div className='ldescription'>
                <h1>Lamborghini</h1>
                <p>
                    Lamborghini was founded in 1963 by Ferruccio Lamborghini, a successful tractor manufacturer who wanted to build high-performance sports cars to rival Ferrari. After launching the 350 GT and the iconic Miura, the company faced financial struggles in the 1970s, leading to a series of ownership changes, including periods under Chrysler and the Volkswagen Group. Today, the brand is known for its aggressive design, powerful V12 engines, and elite status in the sports car market.
                </p>
            </div>
            <div className='limages'>
                <div className='limgcontent'>
                    <img className='lamlogo' src="/All-About-Automotive/Lamborghini.png" alt="" width={80} />
                    <div className='lheadquarter'>
                        <h1>Headquarter</h1>
                        <img src="/All-About-Automotive/LamborginiHeadquarter.jpg" alt="" width={250} />
                        <h2>Sant'Agata Bolognese, Italy</h2>
                    </div>
                    <div className='llinkof'>
                        <a href="https://www.lamborghini.com/en-en#val-ht">Visit official website</a>
                    </div>
                </div>
            </div>
        </section>
        <section id='toyota'>
            <video autoPlay muted loop playsInline>
                <source src="/All-About-Automotive/vecteezy_aurangabad-india-oct-31-2023-3d-rendered-toyota-supra_33241940.mp4" type="video/mp4"/>
            </video>
            <div className='tdescription'>
                <h1>Toyota</h1>
                <p>
                    Toyota began in 1933 as an automotive division of Toyoda Automatic Loom Works before becoming an independent company in 1937, launching its first car, the Model AA, in 1936. After focusing on military vehicles during World War II, the company developed the Toyota Production System to improve quality and efficiency, leading to global expansion and the introduction of popular models like the Corolla and the hybrid Prius. Today, Toyota is a global leader, known for its Toyota and Lexus brands and a multi-path approach to future mobility. 
                </p>
            </div>
            <div className='timages'>
                <div className='timgcontent'>
                    <img className='toylogo' src="/All-About-Automotive/Toyota.png" alt="" width={80} />
                    <div className='theadquarter'>
                        <h1>Headquarter</h1>
                        <img src="/All-About-Automotive/ToyotaHeadquarter.jpg" alt="" width={250} />
                        <h2>Aichi, Japan</h2>
                    </div>
                    <div className='tlinkof'>
                        <a href="https://www.toyota.com/">Visit official website</a>
                    </div>
                </div>
            </div>
        </section>
        <section id='bmw'>
            <video autoPlay muted loop playsInline>
                <source src="/All-About-Automotive/vecteezy_3d-rendered-super-car-cinematic-front-view-in-dark_35355667.mp4" type="video/mp4"/>
            </video>
            <div className='bdescription'>
                <h1>BMW</h1>
                <p>
                    BMW was founded as an aircraft engine manufacturer in 1916/1917 and produced its first motorcycle in the 1920s and automobiles in 1928. After its origin in aircraft engineering, the company transitioned to motorcycles and then into the automobile industry, becoming known for innovation and luxury vehicles. BMW has also built a strong reputation through its involvement in motorsport and has expanded its operations globally. 
                </p>
            </div>
            <div className='bimages'>
                <div className='bimgcontent'>
                    <img className='bmwlogo' src="/All-About-Automotive/BMW.png" alt="" width={80} />
                    <div className='bheadquarter'>
                        <h1>Headquarter</h1>
                        <img src="/All-About-Automotive/BMWHeadquarter.jpg" alt="" width={250} />
                        <h2>Munich, German</h2>
                    </div>
                    <div className='blinkof'>
                        <a href="https://www.bmw.com/en/index.html">Visit official website</a>
                    </div>
                </div>
            </div>
        </section>
        <section className='footer'>
            <div className='footerdes'>
                <h1>Made by Aldien</h1>
                <div className='visitme'>
                    <h2>Visit me:</h2>
                    <div className='footlinks'>
                        <a href="https://github.com/aldienhw"><img src="/All-About-Automotive/github.png" alt="" width={64}/></a>
                        <a href="https://www.instagram.com/aldhdrwhy/profilecard/?igsh=MXZtd2d4ZjBlMHdydg=="><img src="/All-About-Automotive/Instagram.png" alt="" width={64}/></a>
                    </div>
                </div>
            </div>
            <div className='footericon'>
                <img src="All_About_Automotive.png" alt="" width={48}/>
            </div>
        </section>
        </>
    )
}

export default Content
