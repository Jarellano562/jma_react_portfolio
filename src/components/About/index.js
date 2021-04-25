import React from 'react';

function About() {
    return (
        <section className="title">
            <h1 class="name">About...</h1>
            <hr></hr>

            <div className="row justify-content-center">
                <div className="col-10" id="about-section">
                    <img class="mb-5" src="https://raw.githubusercontent.com/Jarellano562/jma_react_portfolio/main/src/assets/images/me.jpeg" alt="Jesus" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
     
                        View full <a href="#/resume" class="link">Résumé</a>
                </div>
            </div>
        </section>
    )
}

export default About;