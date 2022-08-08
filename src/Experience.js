const Experience = () => {
    return (
        <div>
            <div id="expid">
                <span  className="about">
                    <p  className="blackheader">Experience</p>
                </span>
                <div>
                    <span className="exp" style={{width:"70%",allign:"center"}}>
                        <span className="company">
                            <img className="explogo" src="zoho.svg"></img>
                            <span className="companyName">Zoho Corporation</span>
                        </span>
                        <span  className="fw100 expdate">
                            <span  className="loc">
                                <span>May 2019 - Present</span>
                                <span>Chennai Area, India</span>
                            </span>
                        </span>
                    </span>
                    <span className="fs26 fsb">Member of Technical Staff</span><br/>
                    <span className="fs18 team fsb">Zoho CRM</span><br/>
                    <div className="fs18 mT20">
                        <span>Full Stack developer working on Zoo's flagship enterprise SAAS product Zoho-CRM specializing in the Emails module of the product</span>
                        <div  className="technology mT20">   
                            <p  className="fwb ">Roles and Responsibilites:</p>
                            <ul>
                                <li className="fs17">Revamped the <a href="#aes">Email Sharing feature</a>, introduced a <a href="#aesPref">few
enhancements</a> to the same, and migrated the page from
Handlebars.js to Lyte (Ember.js)</li>
                                <li className="fs17">Released a couple of <a href="#template">enhancements</a> in the Templates module.</li>
                                <li className="fs17">Migrated a couple of other <a href="#emailAuth">features</a> from JSP/handlebars.is to
Lyte (Ember.js )</li>
                                <li className="fs17">Responsible for ZeptoMail (Zoho's own Email Service Provider
service) product integration inside Zoho-CRM.</li>
                                <li className="fs17"> Owner of Templates module, Mass Mailer, Email Sharing, Email
Authentication, and Email Tracking features inside the product.</li>
                            </ul>
                        </div>
                        <div  className="technology mT20">   
                            <p  className="fwb ">Worked with :</p>
                            <ul>
                                <li className="fs17">Java 8</li>
                                <li className="fs17">JavaScript / jQuery</li>
                                <li className="fs17">Struts</li>
                                <li className="fs17">PostgreSQL/ Redis</li>
                                <li className="fs17">OAuth / RESTful WebServices</li>
                            </ul>
                        </div>
                        <div  className="technology mT20">   
                            <p  className="fwb ">Screenshots :</p>
                            <div className="gallery" id="aes">
                                <a target="_blank" href="AES/1.png">
                                    <img className="galimagesize"  src="AES/1.png"></img>
                                </a>
                                <a target="_blank" href="AES/4.png">
                                    <img className="galimagesize"  src="AES/4.png"></img>
                                </a>
                                <a target="_blank" href="AES/5.png">
                                    <img className="galimagesize"  src="AES/5.png"></img>
                                </a>
                                <a target="_blank" href="AES/6.png">
                                    <img className="galimagesize"  src="AES/6.png"></img>
                                </a>
                                <a target="_blank" href="AES/7.png">
                                    <img className="galimagesize"  src="AES/7.png"></img>
                                </a>
                                <a target="_blank" href="AES/8.png">
                                    <img className="galimagesize"  src="AES/8.png"></img>
                                </a>
                                <a target="_blank" href="AES/9.png">
                                    <img className="galimagesize"  src="AES/9.png"></img>
                                </a>
                            </div>
                            <div className="ui divider mT50 mB50"></div>
                            <div className="gallery" id="aesPref">
                                <a target="_blank" href="AES_P/1.png">
                                    <img className="galimagesize"  src="AES_P/1.png"></img>
                                </a>
                                <a target="_blank" href="AES/3.png">
                                    <img className="galimagesize"  src="AES_P/2.png"></img>
                                </a>
                                <a target="_blank" href="AES/3.png">
                                    <img className="galimagesize"  src="AES_P/3.png"></img>
                                </a>
                            </div>
                            <div className="ui divider mT50 mB50"></div>
                            <div className="gallery" id="emailAuth">
                                <a target="_blank" href="Email_Auth/1.png">
                                    <img className="galimagesize"  src="Email_Auth/1.png"></img>
                                </a>
                                <a target="_blank" href="Email_Auth/3.png">
                                    <img className="galimagesize"  src="Email_Auth/2.png"></img>
                                </a>
                                <a target="_blank" href="Email_Auth/3.png">
                                    <img className="galimagesize"  src="Email_Auth/3.png"></img>
                                </a>
                                <a target="_blank" href="Email_Auth/4.png">
                                    <img className="galimagesize"  src="Email_Auth/4.png"></img>
                                </a>
                            </div>
                            <div className="ui divider mT50 mB50"></div>
                            <div className="gallery" id="template">
                                <a target="_blank" href="templates/1.png">
                                    <img className="galimagesize"  src="templates/1.png"></img>
                                </a>
                                <a target="_blank" href="templates/4.png">
                                    <img className="galimagesize"  src="templates/4.png"></img>
                                </a>
                                <a target="_blank" href="templates/3.png">
                                    <img className="galimagesize"  src="templates/3.png"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;