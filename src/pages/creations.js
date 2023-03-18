import React from 'react';
import PortfolioOne from '../portfolio/DRT_Portfolio1.JPG';
import PortfolioThree from '../portfolio/DRT_Portfolio3.JPG';
import PortfolioFour from '../portfolio/DRT_Portfolio4.JPG';
import PortfolioSix from '../portfolio/DRT_Portfolio6.JPG';
import PortfolioTen from '../portfolio/DRT_Portfolio10.JPG';
import './creations.css';
import { Fade } from "react-awesome-reveal";

const One =
<div>
    <img src={PortfolioOne} alt="meaningful text" width="400" height="400"></img>
</div>

const Three =
<div>
    <img src={PortfolioThree} alt="meaningful text" width="300" height="400"></img>
</div>

const Four =
<div>
    <img src={PortfolioFour} alt="meaningful text" width="300" height="400"></img>
</div>

const Six =
<div>
    <img src={PortfolioSix} alt="meaningful text" width="400" height="400"></img>
</div>

const Ten =
<div>
    <img src={PortfolioTen} alt="meaningful text" width="300" height="400"></img>
</div>

const Art =
<div>
        <p>
            From time to time, I've dabbled in the visual arts as well. I've collected some of the pieces that I've 
            created over the years that I'm proudest of.
        </p>
</div>

const Creations = () => {
    return (
        <div class="creation-parent">
            {Art}
            <div class="creation-child">
                {One}
                {Three}
                {Four}
                {Six}
                {Ten}
            </div>
        </div>
    );
};

export default Creations;