import React from "react";

const Services = () => {
  return (
    <section className="services">
      <h2>Services</h2>

      <div className="services__box">
        <div className="services__box__item services__box__item--first">
          <div>✍️</div>

          <h3>Design</h3>

          <p>
            I love designing the UI/UX for an app. Let my mind do the talking. I
            put some headphones and I'm ready to tackle this task. Want a
            specific button within the app? No problem, I'll handle that! Want
            me to work in a group? Not a problem at all 🎯!{" "}
          </p>
        </div>
        <div className="services__box__item">
          <div>👨🏼‍💻</div>

          <h3>Development</h3>

          <p>
            In need of a developer? I'm the guy you are looking for! I have
            experience in creating web- and mobile-apps. I just need some
            wireframes and I can do my thing. Maybe I can be the helping hand
            you need 🤝!
          </p>
        </div>
        <div className="services__box__item services__box__item--second">
          <div>📱</div>

          <h3>Mobile</h3>

          <p>
            We are living in an era where we can't deny the fact that most of us
            are using mobile phones. An app should be available on mobile too.
            That's why I'm currently learning React-Native and Flutter! Give me
            a couple of weeks, maybe a month and I'm ready to tackle these
            obstacles too 🤳!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
