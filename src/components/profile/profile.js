import React from "react"
import DeepLearning from "./sections/DeepLearning"
import { MyGithubCalendar } from "./profile_components"
import Projects from "./sections/Projects"
import code_art_img from "./media/cover_code_art_with_bg_dark.png"
import neuralhack from "./media/neuralhack.jpg"
import revolutionUC from "./media/revolutionuc.jpg"
import atheism_img from "./media/misc/evolution.jpg"
import vegan_img from "./media/misc/chicken.jpg"
import kmitra_img from "./media/misc/kmitraLogo.jpg"
import ezio_img from "./media/misc/ezio.jpg"
import "../../styles/timeline.css"
import "../../styles/github_calendar.css"
import { ProfileBadge } from "./sections/ProfileBadge"
import { Container } from "@chakra-ui/react"
import { Bio } from "./sections/Bio"
import { Timeline } from "./sections/Timeline"

export default class ProfilePage extends React.Component {
  render() {
    return (
      <Container>
        <ProfileBadge />
        <Bio />
        <Timeline />
        <this.CodingActivity />
        <this.Achievements />
        <Projects />
        <this.Misc />
        <this.Influencers />
      </Container>
    )
  }

  CodingActivity() {
    return (
      <div>
        <h3 className="header1 no_href_p">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Akhilez"
            style={{ fontWeight: 700 }}
          >
            Coding Activity
          </a>
        </h3>
        <br />
        I absolutely ❤ coding! Each green box below represents the amount of
        coding on that day of the year.
        <br />
        <br />
        <MyGithubCalendar />
      </div>
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

  Misc() {
    return (
      <div>
        <h3 className="header1">Misc</h3>

        <div className="row project_box">
          <div className="col-md-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://kmit.in/emagazine/article/8934/"
            >
              <img
                className="project_image round-frame"
                src={kmitra_img}
                alt="kmitra"
                width="200px"
                height="200px"
              />
            </a>
          </div>
          <div className="col-md-9" style={{ marginTop: 30 }}>
            <h4 className="project_title no_href">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://kmit.in/emagazine/article/8934/"
              >
                A short story on AI
              </a>
            </h4>
            <p className="project_description no_href_p">
              In my undergrad, I was a monthly writer at the college e-magazine
              called{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://kmit.in/emagazine/author/akhil-kanna/"
              >
                kMITRA
              </a>
              . One of the articles I wrote is an interesting short story on AI
              called{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://kmit.in/emagazine/article/8934/"
              >
                “PrecArIous Love”
              </a>
              .
            </p>
          </div>
        </div>

        <div className="row project_box">
          <div className="col-md-3">
            <img
              className="project_image round-frame"
              src={atheism_img}
              alt="evolution"
              width="200px"
              height="200px"
            />
          </div>
          <div className="col-md-9" style={{ marginTop: 30 }}>
            <h4 className="project_title no_href">
              Atheism &amp; Rational Thought
            </h4>
            <p className="project_description no_href_p">
              I am an atheist. For me, atheism is not just denying God’s
              existence. That is easy. But I think atheism is an emergent
              phenomenon of rational thought. I encourage people to think
              scientifically and make logical decisions rather than following a
              herd.
            </p>
          </div>
        </div>

        <div className="row project_box">
          <div className="col-md-3">
            <img
              className="project_image round-frame"
              src={vegan_img}
              alt="chicken"
              width="200px"
              height="200px"
            />
          </div>
          <div className="col-md-9" style={{ marginTop: 20 }}>
            <h4 className="project_title no_href">Being Vegan</h4>
            <p className="project_description no_href_p">
              I love animals. I became a vegetarian when I was 10 after
              witnessing an animal slaughter for that night’s dinner. I believe
              no human has moral rights to kill another conscious living thing
              unless it is life-threatening. Recently I stopped consuming all
              animal related products because it involves animal abuse to an
              unknown non-zero degree.
            </p>
          </div>
        </div>

        <div className="row project_box">
          <div className="col-md-3">
            <img
              className="project_image round-frame"
              src={ezio_img}
              alt="ezio"
              width="200px"
              height="200px"
            />
          </div>
          <div className="col-md-9" style={{ marginTop: 30 }}>
            <h4 className="project_title no_href">My Sketches</h4>
            <p className="project_description no_href_p">
              I am very good at sketching. But I don’t find enough time and
              motivation to do it often. I’ll soon post a gallery of my
              sketches.
            </p>
          </div>
        </div>
      </div>
    )
  }

  Influencers() {
    return (
      <div className="project_box">
        <h5 className="project_title">Most influential people in my life</h5>
        <div className="inspiration_person_title no_href">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/elonmusk"
          >
            Elon Musk
          </a>
          <div className="inspiration_person_description">
            "Work every waking hour."
          </div>
        </div>
        <div className="inspiration_person_title no_href">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/neiltyson"
          >
            Neil DeGrasse Tyson
          </a>
          <div className="inspiration_person_description">
            "Science is true whether or not you believe in it."
          </div>
        </div>
        <div className="inspiration_person_title no_href">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/GrantCardone"
          >
            Grant Cardone
          </a>
          <div className="inspiration_person_description">
            “Stay dangerous” from “Be obsessed or be average”
          </div>
        </div>
        <div className="inspiration_person_title no_href">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/RGVzoomin"
          >
            Ram Gopal Varma
          </a>
          <div className="inspiration_person_description">
            “Naa ishtam” (translation: I decide what I do.)
          </div>
        </div>
        <div className="inspiration_person_title">
          <div className="no_href">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cs.stanford.edu/people/karpathy/"
            >
              Andrej Karpathy
            </a>
          </div>
          <div className="inspiration_person_description no_href_p">
            Andrej is very special to me. He was just a normal{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/user/badmephisto"
            >
              youtuber{" "}
            </a>
            who taught me rubik’s cube with his{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/user/badmephisto"
            >
              videos
            </a>
            . But he became very successful as I saw him grow older. Today he is
            the director of AI at Tesla. My career path is a huge inspiration
            from his career path. Even this website is lightly inspired from his{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cs.stanford.edu/people/karpathy/"
            >
              website.
            </a>
          </div>
        </div>
        <div className="inspiration_person_title no_href">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://eecs.ceas.uc.edu/~aminai/"
          >
            Ali Minai
          </a>
          <div className="inspiration_person_description">
            The most influential professor of my life. He is the reason why I
            love academia so much.
          </div>
        </div>
      </div>
    )
  }
}
