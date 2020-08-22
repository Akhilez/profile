import Link from "gatsby"
import urls from "../../urls.json"
import { Col, Row } from "react-bootstrap"
import React from "react"
import mlg_img from "../media/ml_logo.png"

export default function DeepLearning() {
  let topics = [
    {
      title: "Computer Vision",
      projects: "MNSIT GAN (ACGAN), Colorizer, Find All Numbers (Faster-RCNN)",
    },
    {
      title: "Natural Language Processing",
      projects:
        "Next Char (LSTM), Next Word (word2vev), Next Sentence (seq2seq with attention), BERT",
    },
    {
      title: "Reinforcement Learning",
      projects: "Policy Gradients - TicTacToe, Pong, Racer",
    },
    {
      title: "Unsupervised Learning",
      projects:
        "MNIST AutoEncoder, Self-Organizing Feature-Maps, Associative Memory",
    },
    {
      title: "Other",
      projects: "Spiking Neurons, MNIST Detection Dataset",
    },
  ]
  return (
    <div>
      <h3 className="header1">Deep Learning</h3>

      <div
        className="row project_box"
        style={{ marginBottom: -40, marginTop: -30 }}
      >
        <div className="col-md-3">
          <Link to={urls.ml_gallery.url}>
            <a href={urls.ml_gallery.url}>
              <img
                src={mlg_img}
                className="project_image"
                alt={"MLGallery Logo"}
                width={"250px"}
                style={{ marginTop: 15 }}
              />
            </a>
          </Link>
        </div>
        <div className="col-md-9">
          <p>
            My passion for deep learning started when I learned CNNs in 2016 -
            the booming period of deep learning. Since then, I have been
            experimenting with Neural Nets in my pet-projects, earned a Master’s
            degree in Artificial Intelligence and now, I’m developing a curation
            of interesting deep learning tasks (listed below) into a master
            project called Machine Learning Gallery
          </p>
        </div>
      </div>

      <div>
        {topics.map(topic => (
          <Row key={topic.title}>
            <Col sm={"3"} style={{ fontWeight: 400 }}>
              {topic.title}
            </Col>
            <Col sm={"9"}>{topic.projects}</Col>
          </Row>
        ))}
      </div>

      <Link to={urls.ml_gallery.url}>
        <a
          href={urls.ml_gallery.url}
          className="btn btn-outline-secondary btn-lg resume-button"
          style={{ width: 230, marginTop: 30 }}
        >
          VISIT
        </a>
      </Link>
    </div>
  )
}

export function DeepLearning2() {
  let topics = [
    {
      title: "Computer Vision",
      projects: "MNSIT GAN (ACGAN), Colorizer, Find All Numbers (Faster-RCNN)",
    },
    {
      title: "Natural Language Processing",
      projects:
        "Next Char (LSTM), Next Word (word2vev), Next Sentence (seq2seq with attention), BERT",
    },
    {
      title: "Reinforcement Learning",
      projects: "Policy Gradients - TicTacToe, Pong, Racer",
    },
    {
      title: "Unsupervised Learning",
      projects:
        "MNIST AutoEncoder, Self-Organizing Feature-Maps, Associative Memory",
    },
    {
      title: "Other",
      projects: "Spiking Neurons, MNIST Detection Dataset",
    },
  ]
  return (
    <div>
      <h3 className="header1">Deep Learning</h3>

      <div
        className="row project_box"
        style={{ marginBottom: -40, marginTop: -30 }}
      >
        <div className="col-md-3">
          <Link to={urls.ml_gallery.url}>
            <a href={urls.ml_gallery.url}>
              <img
                src={mlg_img}
                className="project_image"
                alt={"MLGallery Logo"}
                width={"250px"}
                style={{ marginTop: 15 }}
              />
            </a>
          </Link>
        </div>
        <div className="col-md-9">
          <p>
            My passion for deep learning started when I learned CNNs in 2016 -
            the booming period of deep learning. Since then, I have been
            experimenting with Neural Nets in my pet-projects, earned a Master’s
            degree in Artificial Intelligence and now, I’m developing a curation
            of interesting deep learning tasks (listed below) into a master
            project called Machine Learning Gallery
          </p>
        </div>
      </div>

      <div>
        {topics.map(topic => (
          <Row key={topic.title}>
            <Col sm={"3"} style={{ fontWeight: 400 }}>
              {topic.title}
            </Col>
            <Col sm={"9"}>{topic.projects}</Col>
          </Row>
        ))}
      </div>

      <Link to={urls.ml_gallery.url}>
        <a
          href={urls.ml_gallery.url}
          className="btn btn-outline-secondary btn-lg resume-button"
          style={{ width: 230, marginTop: 30 }}
        >
          VISIT
        </a>
      </Link>
    </div>
  )
}
