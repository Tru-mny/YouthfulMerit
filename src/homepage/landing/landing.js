import React from 'react';
import './landing.css';
import back from './back.png'
import highlighter from './highlight.png'
import GreenButton from '../../stylingComponents/buttons/greenButton';
import TextP from '../../stylingComponents/Texts/Paragraph';

function Landing(){
    return(
        <div className='container' >
            <div className='content'>
                <div className='emptymt'></div>
                <h1 className='fst_title'>Merit Youth</h1>
                <div className='FancyTitle'>
                    <h1 className='fst_title'>Communicate, Cooperate</h1>
                </div>
                <div className='subtitle'><TextP fontsize='18pt' colour='white' name="Use rewards"></TextP></div>
                <div className='CTO-btn'><GreenButton size='large' name='Learn more'></GreenButton></div>
                
            </div>

        </div>
    )
}
export default Landing