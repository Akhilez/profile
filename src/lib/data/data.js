export const urls = {
  profile: {
    url: "/",
    title: "Akhilez",
  },
  ml_gallery: {
    url: "https://ml.gallery",
    title: "ML Gallery | Akhilez",
  },
  resume: {
    url: "/resume",
    title: "Resume | Akhilez",
  },
  all_projects: {
    url: "/all_projects",
    title: "Projects | Akhilez",
  },
}

export const projects = {
  projects: [
    {
      title: "ML Gallery",
      desc:
        "Machine Learning Gallery is a master project of few of my experiments with Neural Networks. It is designed in a way to help a beginner understand the concepts with visualizations. You can train and run the networks live and see the results for yourself. Every project here is followed by an explanation on how it works.",
      image: "ml_gallery",
      tags: ["deep-learning", "pytorch", "react.js", "tensorflow.js", "p5.js"],
      date: "2020",
      on_profile: true,
      status: "deployed",
      links: {
        app: "https://akhil.ai/gallery",
        code: "https://github.com/Akhilez/ml_gallery",
      },
    },
    {
      title: "Colorizer",
      desc:
        "A web application that colorizes grayscale images using a Convolutional Neural Network. This was my major project in my undergrad.",
      image: "colorizer",
      tags: ["deep-learning", "cnn", "keras", "python"],
      date: "2018",
      on_profile: true,
      status: "deployed",
      links: {
        app: "http://akhilez.com/colorizer/",
        code: "https://github.com/Akhilez/Colorizer",
      },
    },
    {
      title: "Student Feedback",
      desc:
        "A comprehensive web application for universities to conduct faculty (and other) rating feedback sessions based on various teaching aspects. It collects the feedback data from students and generates beautiful analytical reports on faculty. This project is used by KMIT with thousands of students to assess their faculty members.",
      image: "student_feedback",
      tags: ["django", "python", "web", "mysql"],
      date: "2017",
      on_profile: true,
      status: "developed",
      links: {
        app: "https://github.com/Akhilez/StudentFeedback",
        code: "https://github.com/Akhilez/StudentFeedback",
      },
    },
    {
      title: "Syllabus",
      desc:
        "An android app that provides Engineering syllabus. Aimed for students to manage and keep track of their studies. This became quite popular at my college.",
      image: "syllabus",
      tags: [
        "android",
        "web",
        "kotlin",
        "java",
        "django",
        "mysql",
        "cloud-firestore",
      ],
      date: "2016",
      on_profile: true,
      status: "deployed",
      links: {
        app:
          "https://play.google.com/store/apps/details?id=com.homemade.akhilez.syllabus",
        code: "https://github.com/Akhilez/Syllabus",
        android:
          "https://play.google.com/store/apps/details?id=com.homemade.akhilez.syllabus",
      },
    },
    {
      title: "MedicWhizz",
      desc:
        "An educational service for medical students (Plab). Provides practice quizzes for medical students in the form of a beautiful mobile app. Students can visualize their learning progress.",
      image: "medicwhizz",
      tags: ["android", "ios", "flutter", "firebase", "cloud-firestore"],
      date: "2019",
      on_profile: true,
      status: "deployed",
      links: {
        app:
          "https://play.google.com/store/apps/details?id=com.akhilez.plabmaster&amp;hl=en",
        code: "https://github.com/Akhilez/medicwhizz-api",
        android:
          "https://play.google.com/store/apps/details?id=com.akhilez.plabmaster&amp;hl=en",
      },
    },
    {
      title: "OpCenter",
      desc:
        "At Aviso, I developed many features of OpCenter which is the primary website to control the AWS cloud infrastructure.",
      image: "opcenter",
      tags: [
        "aws",
        "django",
        "python",
        "kubernetes",
        "linux-bash",
        "boto3",
        "vue.js",
      ],
      date: "2019",
      on_profile: true,
      status: "developed",
      links: {
        app: "",
      },
    },
    {
      title: "Alster AR",
      desc:
        "A fun AR wrestling game. The game finds a surface on the table and drops the players (balls) on top of it. Your goal is to control the red ball and push the AI-controlled ball out of the table. Whomever falls off the table more number of times in 1 minute loses.",
      image: "alster",
      tags: ["unity", "augmented-reality", "c#", "android", "ios"],
      date: "2020",
      on_profile: true,
      status: "developed",
      links: {
        app: "https://devpost.com/software/alster",
        code: "https://github.com/Akhilez/Alster",
      },
    },
  ],
}

export const papers = {
  dis_cease: {
    title: "DisCease: Evolving Social Distancing And Herd Immunity",
    abstract:
      "I tried to create a model that simulates the spread of a disease that does not have a medicine. I observed the effects of varying parameters, then introduced a concept of deflections which mimic social distancing and social gatherings. I finally made an attempt to evolve these deflections based on a performance metric.",
    image: "dis_cease.png",
    links: {
      paper: "https://storage.googleapis.com/akhilez/papers/dis_cease.pdf",
      app: "https://discease.akhilez.com/",
    },
    conference: "Complex Systems And Networks",
    association: "University of Cincinnati",
  },
  rl_survey: {
    title: "A Brief Survey of Model-Free Deep Reinforcement Learning",
    abstract:
      "Deep Reinforcement Learning is a branch of machine learning techniques that is used to find out the best possible path given a situation. It is an interesting domain of algorithms ranging from basic multi-arm bandit problems to playing complex games like Dota 2. This paper surveys the research work on model-free approaches to deep reinforcement learning like Deep Q Learning, Policy Gradients, Actor-Critic methods and other recent advancements.",
    image: "rl_survey.png",
    links: {
      paper: "https://storage.googleapis.com/akhilez/papers/rl_survey.pdf",
    },
  },
}

export const papersList = [papers.dis_cease, papers.rl_survey]
