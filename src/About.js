const About = () =>{
    return (
        <div id="aboutid" className="d-flex">
            <span  className="about">
                <p  className="blackheader">About</p>
                <span  className="aboutmedesc">
                    <p  className="fs17">
                        <span className="fwb fs20">Software Development Engineer</span> with a demonstrated history of working in the information technology and services industry and building scalable and highly-reliable software features.
                    </p>
                    <p  className="fs17"> A technology enthusiast. An enthusiastic team player and perceptive thinker. A quick learner with a can-do attitude. Love experimenting and exploring new technologies.</p>
                    <div className="ui divider mT50 mB50"></div>
                    <p className="fwb">Education:</p>
                    <img class="ui middle aligned tiny image" src="rec.jpeg"/>
                    <span className="fs17 mR10 fwb">B.E, Electronics and Communication Engineering</span><span className="fs17">( Aug 2015 - Apr 2019 )</span>
                    <div className="ui divider mT50 mB50"></div>
                    <p className="fwb">Technologies:</p>
                    <div  className="technology">   
                        <p  className="fwb">Frontend:</p>
                        <ul>
                            <li className="fs17">jQuery, Handlebars Js</li>
                            <li className="fs17">Ember Js</li>
                            <li className="fs17">Less Js</li>
                            <li className="fs17">React (Open Source projects)</li>
                        </ul>
                    </div>
                    <div  className="technology mT20">
                        <p  className="fwb">Backend:</p>
                        <ul>
                            <li className="fs17">Java 8,9</li>
                            <li className="fs17">J2EE : Struts Framework, JSP, Servlet</li>
                            <li className="fs17">Node Js, PIP (Python Package Index)</li>
                            <li className="fs17">Databases : Postgres, Redis</li>
                            <li className="fs17">ORM : Hibernate</li>
                            <li className="fs17">Apache : Apache Ant, Apache Kafka</li>
                            <li className="fs17">Version Control : GitLab, Mercurial</li>
                            <li className="fs17">REST API</li>
                        </ul>
                    </div>
                    <p  className="fs17 mT20">Skilled in problem Solving, Data Structures, Algorithms, Java, Python and SQL.</p>
                    </span>
                </span>
            </div>
    );
}

export default About;