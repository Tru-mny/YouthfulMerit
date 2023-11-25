import React from 'react';
import './footer.css';
import TextP from '../../stylingComponents/Texts/Paragraph';
import { Link } from 'react-router-dom';



function Footer(){
    return(
        <div className='footer-container' >
            
            <div className='footer-content1'>
                <div className='footer-t'><h1 className='footer-t'>Merit Youth</h1></div>
                <div className='footer-t'><TextP fontsize='14pt' colour='white' name="We strive to connect the youth for a greater tomorrow, and a more entertaining today."></TextP></div>
                
                <div className='social-icons'>
                    <div className='fb-ico'></div>
                    <div className='tw-ico'></div>
                    <div className='wa-ico'></div>
                    <div className='email-ico'></div>
                </div>
                
                
            </div>
            <div className='footer-content2'>
                <ul>
                    <li className='li-footer'>
                    <Link to='/'>
                        <a href="#" className='a footer'>Home</a>
                    </Link>
                    </li>
                    <li className='li-footer'>
                    <Link to='/reviews'>
                        <a href="#" className='a footer'>Reviews</a>
                    </Link>
                    </li>
                    <li className='li-footer'>
                    <Link to='subscriptions'>
                        <a href="#" className='a footer'>Subscriptions</a>
                    </Link>
                    </li>


                    <li className='li-footer'>
                        <Link to='faq'></Link>
                        <a href="#" className='a footer'>Contact</a>
                    </li>
                </ul>
                
            </div>
            
        </div>
    )
}
export default Footer