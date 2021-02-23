import React from "react"
import { Col, Row } from "react-bootstrap"
import urls from "../urls.json"
import { Box } from "@chakra-ui/react"
import { Link } from "gatsby"
import profilePhoto from "./media/profile_photo.jpg"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"

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

export const MyGithubCalendar = () => {
  const theme = {
    background: "transparent",
    text: "#fff"
  }

  return (
    <GitHubCalendar username="Akhilez" theme={theme} blockSize={14} blockMargin={4}>
      <ReactTooltip delayShow={50} html />
    </GitHubCalendar>
  )
}