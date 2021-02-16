import React from "react"
import { Row, Col } from "react-bootstrap"
import urls from "../urls.json"
import GithubCalendar from "github-calendar"
import { Box } from "@chakra-ui/core/dist"
import { Link } from "gatsby"
import profilePhoto from "./media/profile_photo.jpg"

export function ProfileBadge() {
  return (
    <Box className={"profileBadgeContainer"} ml={{ base: "10%", sm: 0 }}>
      <Row>
        <Col sm={"auto"}>
          <img
            src={profilePhoto}
            className={"profile_img"}
            alt={"profilePhoto"}
          />
        </Col>
        <Col sm={"auto"}>
          <div style={{ marginTop: 20 }}>
            <h1 className={"light_font"} style={{ fontSize: 58 }}>
              Akhil Devarashetti
            </h1>

            <div style={{ fontSize: 28, marginTop: -10 }}>
              Deep Learning Engineer
            </div>
            <div style={{ fontSize: 22 }} className="roboto-light-ak no_href">
              <a href="mailto: akhilez.ai@gmail.com">
                {" "}
                akhilez.ai<span style={{ color: "#8d9599" }}>@gmail.com</span>
              </a>
            </div>
            <Social />
            <ResumeButton />
          </div>
        </Col>
      </Row>
    </Box>
  )
}

export function ResumeButton() {
  return (
    <div>
      <Link
        to={urls.resume.url}
        className="btn btn-outline-secondary resume-button"
      >
        RESUME
      </Link>
    </div>
  )
}

export function Social() {
  return (
    <div className="social">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/akhilez/"
          >
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Akhilez"
          >
            <i className="fa fa-github" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export class MyGithubCalendar extends React.Component {
  render() {
    return (
      <div
        className="calendar"
        style={{ marginTop: 20, marginBottom: 50, width: "100%" }}
      >
        Loading the data just for you.
      </div>
    )
  }

  componentDidMount() {
    GithubCalendar(".calendar", "Akhilez", { responsive: true })
  }
}
