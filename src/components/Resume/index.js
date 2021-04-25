import React from 'react';

function Resume() {

    return (
        <section class="mb-5">
            <h1 className="resume">Résumé </h1>
            <hr></hr>
            <div class="row justify-content-center" id="resume">
                <div class="mt-5 pl-5 pr-5">
                    My expertise covers all aspects of specialty banking such as relationship 
                    management, credit standards, risk management, accounting, loan due diligence, 
                    portfolio purchases, legal and accounting issues. I graduated from 
                    Loyola Marymount University in 2008 and joined the credit training program at 
                    MUFG Union Bank.

                <p class="mt-5">
                        <a href="https://www.linkedin.com/in/jesus-m-arellano-iii-7711a923/">
                            <img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="JMA LinkedIn" /></a>
                    </p>
                    <p>
                        Download my full <a href="https://raw.githubusercontent.com/Jarellano562/jma_react_portfolio/main/src/assets/images/Jesse%20M%20Arellano%20Resume%202021.pdf" class="link">Résumé</a>
                        <br></br>
                    </p>
                </div>
            </div>

            <div class="justify-content-center mt-5">
                <div id="front-back">
                    <h2>Front End Experience</h2>
                    <p>HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, IndexedDB</p>
                </div>

                <div id="front-back" class="mt-5">
                    <h2>Back End Experience</h2>
                    <p>
                        Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, Django, API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
                </div>
            </div>
        </section>
    );
}

export default Resume;