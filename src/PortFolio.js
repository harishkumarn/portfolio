import React from 'react';
import MenuBar from './MenuBar';
import Intro from './Intro';
import ContactMe  from "./ContactMe";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificates from "./Certificates";

class PortFolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {toggleMenu:'sb-sidenav-toggled'};
    }

    render(){
        const toggleMenu = () => {
            this.state.toggleMenu === '' ? this.setState({toggleMenu:'sb-sidenav-toggled'}) : this.setState({toggleMenu:''});
        }
        return (
            <div className="m50"> 
                <MenuBar toggleMenu={toggleMenu}/>
                <div className="mT50 d-flex very relaxed grid">
                    <Intro/>
                    <ContactMe/>
                </div>
                <div className="ui segment mB50 mT50">
                    <div className="ui two column very relaxed grid">
                        <div className="column">
                            <About/>
                        </div>
                        <div className="column">
                            <Skills/>
                        </div>
                    </div>
                <div className="ui vertical divider">&amp;</div>
                </div>
                <div class="ui segment">
                    <Experience/>
                    <h4 class="ui horizontal  divider">&amp;</h4>
                    <Certificates/>
                </div>
            </div>
        );
    }
}

export default PortFolio;