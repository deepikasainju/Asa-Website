import React from 'react' 
import './Contact.css'
import {MdCall} from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                
                {/*left side*/}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ea perspiciatis reiciendis consequuntur illum, recusandae adipisci quibusdam aspernatur, accusantium repudiandae corporis illo quis nostrum laboriosam suscipit sunt dicta nihil quo.</span>


                    <div className="flexColStart contactModes">
                        {/*First row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>123 456 7890</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>

                            {/*second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>123 456 7890</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>

                        {/*Second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdEmail size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Email</span>
                                        <span className='secondaryText'>abc@gmail.com</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Email Now</div>
                            </div>

                            {/*fourth mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>123 456 7890</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*right side*/}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
