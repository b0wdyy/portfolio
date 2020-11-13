import React from "react";
import Image from "next/image";

const MainAbout = () => {
  return (
    <main className="about">
      <div>
        <div className="about__text">
          <h1>About me!</h1>
          <p>
            When I was a kid, I was always interested by how a pc worked. We had
            one in our family and I could make use of it all the time. Just
            looking around in the files or just playing games. At that time not
            many people knew much about the internet. So I went exploring. 'How
            does the internet work? How does a computer work? Can I make my own
            computer?'. Those kind of questions went through my head day in, day
            out. When there would be a technical problem they would always call
            me for help. Keep in mind, I was around 8 at the time. Oh, you have
            a computer issue? Get Bodhi. Something's not working right? Get
            Bodhi. As I grew older I could do more and more on the computer. I
            started experementing. I started programming, watching videos on
            YouTube. For hours on end. I always knew I wanted to do something
            involving computers.
          </p>

          <p>
            A lot of time went by and I put programming to the side. It didn't
            interest me that much anymore. I got introduced to gaming. Every day
            after school my friends and I would play until bedtime. Luckily I
            didn't had to study for school so I could just run upstairs and
            power on my Xbox. Until the 5th year of high-school I didn't have to
            study once. I would pick a lot of things from class. But that all
            changed. We got a programming course in our year. I stopped for some
            years, but I picked it back up like I never stopped. I started
            watching videos again. The main goal was getting better at it.
            Unfortunately we there was a small amount of students that wanted to
            persue it. That's why they cancelled the class for the next year. If
            you wanted to follow it, you would have to go to another school. I
            didn't like that so I took the only class that was still available.{" "}
            <br />
            <br />
            After that I had to go to uni. I applied for computer science at
            Thomas More, hoping it would skyrocket my skills and become the best
            version of myself. That wasn't the case.. We would learn old syntax
            that would not be used in a software company. My motivation quickly
            dropped and I would tell myself I was going to learn this on my own.
            <br />
            <br />
            To this day, I'm still learning and watching videos about
            programming every single day. I love to learn and I'm not quitting
            until I don't have to visit StackOverflow anymore. But we all know
            that's not going to happen. Code evolves every single day.
          </p>
        </div>

        <div className="img">
          <Image
            src="/images/thinking.png"
            width={300}
            height={300}
            unoptimized={true}
          />
        </div>
      </div>
    </main>
  );
};

export default MainAbout;
