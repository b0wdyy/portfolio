import React from "react";

const Projects = () => {
  return (
    <section className="about__projects">
      <h2>Projects</h2>

      <div>
        <div className="projects__item">
          <h3>Webapp that is a clone of a movie theatre site.</h3>

          <p>
            You can choose a movie that you want to see. It then goes to a
            detail page where you can see how many seats there are left and a
            small description. When you go on and want to reserve a spot, you
            can. It keeps track of what spot you reserved, giving back a ticket
            with the row/column number. Made with Laravel.
          </p>
        </div>

        <div className="projects__item">
          <h3>NodeJS job scraper</h3>

          <p>
            A friend and I built a nodeJS job scraper going through all the
            different job sites here in Belgium. Only the ones important for us.
            It searches based on keywords we provide. When the bot finds
            matches, it writes those matches to a .txt file which then gets
            mailed to us.{" "}
          </p>
        </div>

        <div className="projects__item">
          <h3>Fitbonding personal training site</h3>

          <p>
            For a small business in my hometown. Together with a friend we made
            this site. Using Vue and NodeJS. You might think, why use Node? Well
            they have a form aswell. A potention user fills the form in. They
            get sent an e-mail with node-mailer.
          </p>
        </div>

        <div className="projects__item">
          <h3>Bot that buys stuff online 🤖</h3>

          <p>
            A bot that I coded using Python and it's package Selenium. You can
            enter the product name in the input that is given. It searches
            Google and presses a link that contains bol.com or Coolblue. Then it
            goes through the whole process of buying the product and the next
            day the mailman knocks on the door with my product.
          </p>
        </div>

        <div className="projects__item">
          <h3>Datascience project</h3>

          <p>
            Datascience project that reads a csv file and does calculations
            based on the given data. This is done with Python and the packages I
            used were, pandas, numpy and matplotlib.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
