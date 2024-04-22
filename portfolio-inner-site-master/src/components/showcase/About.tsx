import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Chris Kareh</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently working at BSA! In 2023 I graduated from Arab Open University
                    with my BS in Computer Science.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    email{' '}
                    <a href="mailto:chriskareh@proton.me">
                        chriskareh@proton.me
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                My love for technology and programming started at a young age when I received my first computer as a gift. 
                From that moment on, I was captivated by the endless possibilities that technology offered. 
                Spending countless hours tinkering with software and writing simple programs, 
                I found a sense of fulfillment and excitement that I couldn't find anywhere else. 
                As I delved deeper into the world of programming, my passion only grew stronger, 
                driving me to constantly learn and explore new technologies. 
                The ability to create something out of nothing with just a few lines of code felt like magic to me, 
                fueling my enthusiasm and determination to pursue a career in the tech industry.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div> */}

                <p>
                    I started programming more seriously in high school,
                    initially with game development.
                    I went on to do a ton of passion projects, This is where FireLink Studios came to life 
                    {/* <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/scott-bass-189a7919b/"
                    >
                        Scott Bass
                    </a> */}
                    . We worked on many projects together, Websites,
                    game projects, apps, and more.
                    {/* <Link to="/projects/software">Software Projects</Link> page. */}
                </p>
                <br />
                <p>
                    In 2023 I got applied as a react-native developer in Sync, I was clueless, with not much of experience in JavaScript.
                    They asked for an App to make as an assesment but I asked my friend to do it for me.
                    then I got accepeted, and I picked up fast from someone who is clueless with no real experience to someone who can finish up tasks, a bit slow
                    but just enough to not be so suspicious.
                    After than I became much more experienced untill a company overseas offered me a job with a way better position called BSA
                    the team I was in we've been able to finish up a project that 4 whole companies before failed to achieve
                    but this came at a cost with working 13 - 14 hours daily 
                    so now im looking for position where i'll be much comfortable and healthy 
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have is{' '}
                            {/* <Link to="/projects/music">Music Production</Link>{' '} */}
                             creating{' '}
                            <Link to="/projects/art">Digital Art</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        {/* <p>
                            In college, I was an active member in the fraternity
                            Sigma Alpha Epsilon and held multiple positions in
                            the chapter. I met a lot of amazing people through
                            my fraternity and thoroughly enjoyed the community.
                        </p> */}
                    </div>
                    {/* <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div> */}
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. 
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can shoot me an email
                    at{' '}
                    <a href="mailto:chriskareh@proton.me">
                    chriskareh@proton.me
                    </a>
                    <br/>
                    <br/>
                    Even though the UI of this website is Windows Styled, I only daily drive linux based distros XD
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
