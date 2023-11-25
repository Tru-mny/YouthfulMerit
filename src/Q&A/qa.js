import React from 'react';
import './qa.css';
import Navbar from '../homepage/navbar/navbar';
import '../App.css'
import back from'./backqa.png'
import {motion} from "framer-motion"
import { renderMatches } from 'react-router-dom';
import TextTitle from '../stylingComponents/Texts/Title';
import TextP from '../stylingComponents/Texts/Paragraph';
import Footer from '../homepage/footer/footer';
import '../stylingComponents/buttons/greenButtons.css'


function QAPage(){
    const butStyle = {
        borderColor: "transparent",
        marginTop: "3vh",
    };

    return(
        <motion.div className="App"
        initial={{ opacity: 0 , x:20}}
        animate={{ opacity: 1 , x:0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}>
        <div className='qacontainer'>
            <img src={back} alt="background" draggable="false"></img>
            <div className='content'>
                <div className='empty-margin-top'></div>
                <div className='FAQTitle'>
                    <TextTitle name="Frequently Asked Questions" colour= "white"></TextTitle>
                </div>
                <div className='FAQSubtitle'>
                <TextP name="Check out the Frequently Asked Questions" colour='white'>
                </TextP> 
                </div>
            </div>   
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>What specific advantages or benefits does the website offer for young users?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>The website provides a range of benefits, including educational
                        resources, career guidance, discounts on various products and services, internship
                        opportunities, and access to exclusive events tailored for youth.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>How accessible are these advantages for youth?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>The advantages are readily accessible for young individuals who
                        meet certain age or eligibility criteria specified by the website, and have a Merit
                        admissible line subscription. This includes individuals between the ages of 16 to 25.</p>
                </div>
            </div>
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>How can I redeem or utilize these advantages offered by the website?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Users can redeem advantages by following specific instructions
                        provided on the website, which might include using promo codes, submitting applications,
                        or following designated procedures for each benefit. Terms and conditions may apply for
                        different advantages.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Is there a membership fee or subscription required to access these benefits?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Access to the basic benefits on the website is typically free.
                        However, some premium or exclusive benefits might be accessible through a membership or
                        subscription model, offering additional perks and features for a fee.</p>
                </div>
            </div>
            <div className='QuestionsRow'>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Is there a community or forum where young users can engage and connect?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Yes, the website often hosts forums, discussion boards, or social
                        spaces where young users can connect, share experiences, and collaborate with peers.</p>
                    </div>
                <div className='Question'>
                    <h1 className='QuestionTitle'>Can I access the advantages on different devices, like smartphones or tablets?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>The website is optimized for various devices, ensuring access and
                        usability across smartphones, tablets, and computers for convenience.</p>
                </div>
            </div>
            <div className='QuestionsRow'>
            <div className='Question'>
                    <h1 className='QuestionTitleQ'>Do you have a question?</h1>
                    <div className='line'></div>
                    <p className='QuestionText'>Feel free to ask us anything. We will answer you in a short amount of time</p>
                    <button  className='green-btn' style={butStyle}><h className='green-btn-text-small'>Ask a Question</h></button>
                </div>
            </div>

        <div className='empty-margin-top'></div>
        <Footer></Footer>
        <Navbar></Navbar>

            </div>
            
        </motion.div>
    )

}
export default QAPage