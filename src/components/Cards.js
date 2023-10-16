import "./cardspage.css";
function Cards() {
    return (
        <div className='container section' id='skills'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='section-head'>Skills</h2>
                </div>
                <div className='col-md-4' id='cards'>
                    <div className="card" >
                        <img src={imageUrl2} alt="web" className="img-fluid" id='web' />
                        <div className="card-body">
                            <h5 className="card-title">Web developer</h5>
                            <p className="card-text">HTML, CSS, JavaScript, PHP<br></br>
                                • Database: MySQL<br></br>
                                • Data science: Standard ML algorithms <br></br>
                                (regression, classification, clustering) <br></br>
                                • Data Analysis: R,NumPy, Pandas,Matplotlib</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4' id='cards'>
                    <div className="card" >
                        <img src={imageUrl3} alt="java" className="img-fluid" id='java' />
                        <div className="card-body">
                            <h5 className="card-title">Java</h5>
                            <p className="card-text">Java is a high-level, class-based, object-oriented programming langugae that is designed to have as few implementation dependencies as possible<br></br>Proficient in problem solving skills and DSA</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4' id='cards'>
                    <div className="card" >
                        <img src={imageUrl4} alt="python" className="img-fluid" id='python' />
                        <div className="card-body">
                            <h5 className="card-title">Python</h5>
                            <p className="card-text">High-level programming language. Ideal for web, data analysis, AI, automation. And Machine Learning algorithms, deep learnig algorihtms. Libraries like numpy, pandas, tensorflow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;