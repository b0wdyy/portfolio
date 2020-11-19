import React from "react";

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>

      <div className="resume__items">
        <div className="resume__row">
          <div className="resume__items__item">
            <h3>Work Experience 💼</h3>

            <ul>
              <li>Setle</li>
              <li>Full-stack developer</li>
              <li>July 2020 - Now</li>
            </ul>

            <ul>
              <li>Freelance</li>
              <li>Software engineer</li>
              <li>November 2019 - Now</li>
            </ul>
          </div>

          <div className="resume__items__item">
            <h3>Education 🎓</h3>

            <ul>
              <li>Thomas More</li>
              <li>Computer Science</li>
              <li>September 2017 - July 2019</li>
            </ul>

            <ul>
              <li>CVO De Verdieping</li>
              <li>Front-end developer</li>
              <li>September 2019 - July 2020</li>
            </ul>
          </div>
        </div>

        <div className="resume__row">
          <div className="resume__items__item">
            <h3>Skills 🕺</h3>

            <ul>
              <li>Designing</li>
              <li>Product Design</li>
              <li>Wireframing</li>
            </ul>

            <ul>
              <li>Development</li>
              <li>HTML & CSS</li>
              <li>JavaScript, TypeScript</li>
              <li>NodeJS</li>
              <li>Vue, Nuxt</li>
              <li>React, NextJS</li>
              <li>Laravel</li>
              <li>Angular</li>
              <li>Python</li>
              <li>React Native</li>
              <li>Flutter (currently learning!)</li>
            </ul>
          </div>

          <div className="resume__items__item">
            <h3>Tools 🛠</h3>

            <ul>
              <li>Git</li>
              <li>Jira</li>
              <li>Visual studio code</li>
              <li>Webstorm</li>
              <li>PyCharm</li>
              <li>Adobe XD</li>
              <li>Adobe Photoshop</li>
              <li>Adobe After Effects</li>
              <li>Trello</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="circle first"></div>
      <div className="circle second"></div>
      <div className="circle third"></div>
    </section>
  );
};

export default Resume;
