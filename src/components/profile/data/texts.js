import vndly_logo from "../media/timeline/vndly_logo.png"
import uc_logo from "../media/timeline/uc.png"
import aviso_logo from "../media/timeline/aviso.png"
import kmit_logo from "../media/timeline/kmit.jpg"

export const bio = `

I am a Deep Learning Engineer at VNDLY and 
I majored in Artificial Intelligence in my Masters.
In my free time, I develop ml.gallery.
Also, I won the largest hackathon at my university.

I am obsessed with _Deep Learning_ 🧠, Productivity 👨🏻‍💻 and Space Exploration 🪐 

`

export const timeline = {
  vndly: {
    role: "Deep Learning Engineer",
    org: "VNDLY",
    year: 2020,
    img: vndly_logo,
    description: `NLP Tasks - Semantic Text Similarity based on BERT, segments highlighter \\
Technologies: _PyTorch, TensorFlow, Django, React_`,
  },
  uc: {
    role: "Master’s in Artificial Intelligence",
    org: "University of Cincinnati",
    year: 2019,
    img: uc_logo,
    description: `Specializations: _Computer Vision, NLP, Reinforcement Learning and Complex Intelligent Systems_`,
  },
  aviso: {
    role: "Full-Stack Engineer",
    org: "Aviso AI",
    year: 2018,
    img: aviso_logo,
    description: `Reduced the ML cloud cost by **60%** \\
Technologies used: _Django, Kubernetes, AWS, Linux, Puppet, Vue.js_`,
  },
  kmit_dev: {
    role: "Part-Time Developer",
    org: "Keshav Memorial Institute of Technology",
    year: 2015,
    img: kmit_logo,
    description: `Developed apps for the college’s operations like Student Feedback and Gate-Pass System`,
  },
  kmit: {
    role: "Bachelor's in Computer Science and Engineering",
    org: "Keshav Memorial Institute of Technology",
    year: 2014,
    img: kmit_logo,
    description: `My first adventures with programming`,
  },
}