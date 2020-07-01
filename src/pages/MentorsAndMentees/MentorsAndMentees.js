import React from "react";
import { MentorshipData } from "../../jsonObjects/mentorshipData";

import "./mentorsAndMentees.scss";

function MentorsAndMentees() {
  return (
    <section className="mentors-container">
      {MentorshipData.map((data, index) => (
        <>
          <article className="mentors-wrapper">
            <div className="mentors-content">
              <h2 className="mentors-title">{data.title}</h2>
              <p className="mentors-description">{data.description}</p>
            </div>
            <picture className="mentor-image">
              <img
                src={data.mentorImage}
                alt="mentor-image"
                className="image"
              />
            </picture>
          </article>
          <picture className="">
            <img
              src={data.mentorshipImage}
              alt="Mentorship Imge"
              className="mentorship-image"
            />
          </picture>
        </>
      ))}
    </section>
  );
}

export default MentorsAndMentees;
