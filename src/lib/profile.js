import React from "react"
import { Projects } from "./sections/Projects"
import neuralhack from "./media/neuralhack.jpg"
import revolutionUC from "./media/revolutionuc.jpg"
import "../styles/github_calendar.css"
import { ProfileBadge } from "./sections/ProfileBadge"
import { Container } from "@chakra-ui/react"
import { Bio } from "./sections/Bio"
import { Timeline } from "./sections/Timeline"
import { CodingActivity } from "./sections/CodingActivity"
import { Research } from "./sections/Research"
import { Hackathons } from "./sections/Hackathons"
import { Blogs } from "./sections/Blogs"
import { Misc } from "./sections/Misc"

export default class ProfilePage extends React.Component {
  render() {
    return (
      <Container mb={6}>
        <ProfileBadge />
        <Bio />
        <Timeline />
        <CodingActivity />
        <Research />
        <Hackathons />
        <Projects />
        <Blogs />
        <Misc />
      </Container>
    )
  }

  Achievements() {
    return (
      <div>
        <h3 className="header1">Hackathons</h3>

        <div className="row project_box">
          <div className="col-md-7">
            <img
              className="project_image"
              src={neuralhack}
              alt="syllabus"
              width="600px"
            />
          </div>
          <div className="col-md-5">
            <h4 className="project_title">Won NeuralHack</h4>
            <p className="project_description">
              NeuralHack is an India-wide hackathon with approximately 13,000
              participants conducted by Virtusa. The tasks to be completed in 24
              hours were:
            </p>
            <ul className="project_description">
              <li>
                Build a machine learning model that predicts a class label from
                the given dataset.
              </li>
              <li>
                Build an IoT device that measures the alcohol content from the
                air and sends a signal to the cloud on reaching a threshold.
              </li>
            </ul>

            <div className="row">
              <div className="col-auto project_date">16th November, 2017</div>
            </div>
          </div>
        </div>

        <div className="row project_box">
          <div className="col-md-7">
            <img
              className="project_image"
              src={revolutionUC}
              alt="syllabus"
              width="600px"
            />
          </div>
          <div className="col-md-5">
            <h4 className="project_title no_href">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://revolutionuc.com/"
              >
                Won RevolutionUC
              </a>
            </h4>
            <p className="project_description no_href_p">
              <a href="https://revolutionuc.com/">RevolutionUC</a> is a
              hackathon conducted by ACM at University of Cincinnati with
              roughly 400 participants.
            </p>
            <p className="project_description no_href_p">
              I built an Augmented Reality game called
              <a href="http://akhilez.com/home/all_projects//#alster">
                {" "}
                Alster{" "}
              </a>
              in 24 hours and won top 5.
            </p>

            <div className="row">
              <div className="col-auto project_date">22nd February, 2020</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
