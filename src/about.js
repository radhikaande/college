import React from 'react';
 import './home.css';



export function About() {
    return (
            <div id='about'>
                <center>
                    <h1>About</h1>
                    
                    <h1>Vaagdevi engineering collge</h1>




                {/* <marquee direction="left" scrollamount="5">
                    opening for b.tech,M.Tech,B.Zc students
                </marquee> */}
               
                    <nav>
                        <ul>
                            <a  href="https://www.vaagdevi.edu.in/"> Home</a> &nbsp;&nbsp;
                            <a href="https://www.vaagdevi.edu.in/about-vce/">About</a>


                        </ul>
                    </nav>

               
                

                    <h1></h1>
                    <p  style={{color:'white'}}>Welcome to vagdevi college, a top-ranked institution for higher education.</p>
                    <div id="about">
                        <section>
                            <h2 style={{color:'brown'}}>About Us</h2>
                            <p class="flex ">College Name is a private, non-profit institution dedicated to providing a rigorous and comprehensive education to students from all backgrounds. Founded in 1900, our institution has a long history of academic excellence and a commitment to social justice.</p>
                            <a id='about' href='https://www.vaagdevi.edu.in/application-forms/'>Registration</a>
                        </section>
                    </div>
                    <div id="admissions">
                        <section >
                            <h2 style={{color:'brown'}}>Admissions</h2>
                            <p class="flex ">We offer a variety of undergraduate and graduate programs in a range of fields, including business, education, engineering, and more. Our admissions process is highly selective, and we seek out students who are intellectually curious, socially engaged, and committed to making a positive impact on the world.</p>
                            
                        </section></div>
                    </center>
            </div>
    

    );
}