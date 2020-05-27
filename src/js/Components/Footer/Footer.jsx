import React, {Component} from "react";
import {FooterButton} from './Index';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            // Since FooterButton accepts props, it is now reusable
            <footer className="align-bottom flex flex-wrap justify-center items-center py-12 darker">
                <FooterButton   url="https://github.com/ChillFish8/ReRoll-Builder" 
                                img="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                                text="Star me on GitHub" />
                <FooterButton url="https://discord.com/api/oauth2/authorize?client_id=572022206243012608&permissions=573959232&scope=bot" 
                              img="https://cdn.discordapp.com/app-icons/572022206243012608/e3afb4c7e48ee95cd3963a1bc13a0a16.png?size=256"
                              text="Invite the Innkeeper" />
                <FooterButton url="https://www.reroll.co/"
                              img="https://www.reroll.co/img/logo.png"
                              text="" />
            </footer>
        );
    }
}

export default Footer;