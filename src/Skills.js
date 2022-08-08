const Skills = () => {
    return (
        <div id="skillsid">
            <span  className="about">
                <p  className="blackheader">Skills</p>
            </span>
            <p className="fwb fs20 mT20">Tech Skills:</p>
            <div className="ui progress">
                <div className="bar" style={{width:"90%"}}>
                    <div className="progress"></div>
                </div>
                <div className="label">Java</div>
            </div>
            <div className="ui progress">
                <div className="bar" style={{width:"90%"}}>
                    <div className="progress"></div>
                </div>
                <div className="label">Javascript</div>
            </div>
            <div className="ui progress">
                <div className="bar" style={{width:"90%"}}>
                    <div className="progress"></div>
                </div>
                <div className="label">SQL</div>
            </div>
            <div className="ui progress">
                <div className="bar" style={{width:"80%"}}>
                    <div className="progress"></div>
                </div>
                <div className="label">Python</div>
            </div>
            <div className="ui progress">
                <div className="bar" style={{width:"70%"}}>
                    <div className="progress"></div>
                </div>
                <div className="label">C/C++</div>
            </div>
            <div className="ui progress">
                <div className="bar" style={{width:"70%"}}>
                    <div className="progress"></div>
                </div>
                <div className="label">Scala</div>
            </div>
            <div className="ui divider mT50 mB50"></div>
            <p className="fwb fs20">Languages:</p>
            <div className="ui progress">
                <div className="bar" style={{width:"100%"}}>
                    <div className="progress">Native / Bilingual Proficiency</div>
                </div>
                <div className="label">தமிழ் ( Tamil )</div>
            </div>
            <div className="ui progress">
                <div className="bar" style={{width:"90%"}}>
                    <div className="progress">Professional working proficiency</div>
                </div>
                <div className="label">English</div>
            </div>
            <div className="ui divider mT50 mB50"></div>
            <p className="fwb fs20">Qualities :</p>
            <ul>
                <li className="fs17">Great problem solving and analytical skills</li>
                <li className="fs17">Curious to learn and teach</li>
                <li className="fs17">Great communication skills</li>
            </ul>
        </div>
    );
}


export default Skills;