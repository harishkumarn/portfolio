import React from "react";
import $ from 'jquery';

class MenuBar extends React.Component{
    
    constructor(props){
        super(props);
    }
    render(){
        const downloadResume = () => { 
        }

        const selectCategory = (comp) => {
            debugger
            $('.header').removeClass('header');
            $(comp.target).addClass('header');
        }
        return (
            <div >
                <div  className="subbase center_top">
                    <span className="mainnames">Harish Kumar N</span>
                    <span className="mainnames email">
                        <i  className="envelope outline icon" onClick={downloadResume}></i>
                        <span className="mailTo"><a  href="mailto:harishkr.1110@gmail.com">harishkr.1110@gmail.com</a></span>
                    </span>
                    <span className="mainnames"><i className="download icon cP"></i>Download Resume</span>
                </div>
                <div className="ui menu">
                    <a className="header item cP" onClick={selectCategory}>Home</a>
                    <a className="item cP" href="#aboutid" onClick={selectCategory}>About</a>
                    <a className="item cP" href="#skillsid" onClick={selectCategory}>Skills</a>
                    <a className="item cP" href="#expid" onClick={selectCategory}>Experience</a>
                    <a className="item cP" href="#certificateid" onClick={selectCategory}>Certificates</a>
                </div>
            </div>
        )
    }
}

export default MenuBar;