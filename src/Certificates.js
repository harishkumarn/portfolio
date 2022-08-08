const Certificates = ()=>{
    return (
        <div>
            <div id="certificateid">
                <span  className="about">
                    <p  className="blackheader">Certificates</p>
                </span>
            </div>
            <div  className="technology mT20">   
                <p  className="fwb ">Competitive programming achievements :</p>
                <div className="gallery" id="aes">
                    <a target="_blank" href="certificates/leetcode.png">
                        <img className="galimagesize"  src="certificates/leetcode.png"></img>
                    </a>
                    <a target="_blank" href="certificates/hackerrank.png">
                        <img className="galimagesize"  src="certificates/hackerrank.png"></img>
                    </a>
                    <a target="_blank" href="certificates/codewars.png">
                        <img className="galimagesize"  src="certificates/codewars.png"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Certificates;