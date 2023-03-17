import React from 'react';
import PortfolioOne from '../portfolio/DRT_Portfolio1.JPG';
import PortfolioThree from '../portfolio/DRT_Portfolio3.JPG';
import PortfolioFour from '../portfolio/DRT_Portfolio4.JPG';
import PortfolioSix from '../portfolio/DRT_Portfolio6.JPG';
import PortfolioTen from '../portfolio/DRT_Portfolio10.JPG';
import './creations.css';
import { Fade } from 'react-reveal';

const One =
<div>
    <img src={PortfolioOne} width="400" height="400"></img>
</div>

const Three =
<div>
    <img src={PortfolioThree} width="300" height="400"></img>
</div>

const Four =
<div>
    <img src={PortfolioFour} width="300" height="400"></img>
</div>

const Six =
<div>
    <img src={PortfolioSix} width="400" height="400"></img>
</div>

const Ten =
<div>
    <img src={PortfolioTen} width="300" height="400"></img>
</div>

const Art =
<div>
    <Fade down>
        <p>
            From time to time, I've dabbled in the visual arts as well. I've collected some of the pieces that I've 
            created over the years that I'm proudest of.
        </p>
    </Fade>
</div>

const Creations = () => {
    return (
        <div class="creation-parent">
            {Art}
            <div class="creation-child">
                <Fade up>
                {One}
                {Three}
                {Four}
                {Six}
                {Ten}
            </Fade>
            </div>
        </div>
    );
};

export default Creations;