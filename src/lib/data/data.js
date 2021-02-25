import { neuralHack, revolutionUc } from "./texts"
import neuralhackImage from "../media/neuralhack.jpg"
import revolutionUCImage from "../media/revolutionuc.jpg"
import visionImg from "../media/projects/computer_vision.png"
import nlpImg from "../media/projects/nlp.png"
import rlImg from "../media/projects/rlImg.jpg"
import studentFeedbackImg from "../media/projects/student_feedback.png"
import syllabusImg from "../media/projects/syllabus.png"
import medicWhizzImg from "../media/projects/medicwhizz.png"
import alsterImg from "../media/projects/alster.png"

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

export const hackathonsList = [
  {
    title: "RevolutionUC",
    date: "22nd February, 2020",
    result: "Top 5",
    img: revolutionUCImage,
    desc: revolutionUc,
  },
  {
    title: "NeuralHack",
    date: "16th November, 2017",
    result: "Won 3rd",
    img: neuralhackImage,
    desc: neuralHack,
  },
]

export const deepLearningProjects = [
  {
    title: "Computer Vision",
    img: visionImg,
    projectList: [
      "Object Detection",
      "Dense Captioning",
      "Colorization",
      "GANs",
      "Classification",
    ],
  },
  {
    title: "Natural Language Processing",
    img: nlpImg,
    projectList: [
      "Next Character",
      "Next Word",
      "Movie Genre",
      "Virtual Assistant",
    ],
  },
  {
    title: "Reinforcement Learning",
    img: rlImg,
    projectList: [
      "Policy Gradient",
      "Deep Q Learning",
      "ActorCritic",
      "AlphaZero",
      "MuZero",
    ],
  },
]

export const mobileProjects = [
  {
    title: "Syllabus",
    desc:
      "An android app that provides Engineering syllabus. Aimed for students to manage and keep track of their studies. This became quite popular at my college.",
    image: syllabusImg,
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
    image: medicWhizzImg,
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
]

export const webProjects = [
  {
    title: "Student Feedback",
    desc:
      "A comprehensive web application for universities to conduct faculty (and other) rating feedback sessions based on various teaching aspects. It collects the feedback data from students and generates beautiful analytical reports on faculty. This project is used by KMIT with thousands of students to assess their faculty members.",
    image: studentFeedbackImg,
    tags: ["django", "python", "web", "mysql"],
    date: "2017",
    on_profile: true,
    status: "developed",
    links: {
      app: "https://github.com/Akhilez/StudentFeedback",
      code: "https://github.com/Akhilez/StudentFeedback",
    },
  },
]

export const gameProjects = [
  {
    title: "Alster AR",
    desc:
      "A fun AR wrestling game. The game finds a surface on the table and drops the players (balls) on top of it. Your goal is to control the red ball and push the AI-controlled ball out of the table. Whomever falls off the table more number of times in 1 minute loses.",
    image: alsterImg,
    tags: ["unity", "augmented-reality", "c#", "android", "ios"],
    date: "2020",
    on_profile: true,
    status: "developed",
    links: {
      app: "https://devpost.com/software/alster",
      code: "https://github.com/Akhilez/Alster",
    },
  },
]

// https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akhilez
const response = {
  status: "ok",
  feed: {
    url: "https://medium.com/feed/@akhilez",
    title: "Stories by Akhilez on Medium",
    link: "https://medium.com/@akhilez?source=rss-c26812ee15f5------2",
    author: "",
    description: "Stories by Akhilez on Medium",
    image:
      "https://cdn-images-1.medium.com/fit/c/150/150/1*rtNy3yfv-JM930gWqeggWQ.jpeg",
  },
  items: [
    {
      title: "My Successful Weight Loss Strategy",
      pubDate: "2021-02-20 21:19:48",
      link:
        "https://medium.com/@akhilez/my-successful-weight-loss-strategy-90c80f8b1436?source=rss-c26812ee15f5------2",
      guid: "https://medium.com/p/90c80f8b1436",
      author: "Akhilez",
      thumbnail:
        "https://cdn-images-1.medium.com/max/945/1*aVF5HfcFS62eGy6JG0PLIQ.png",
      description:
        '\n<p><strong>TL;DR</strong>: 23lb/10kg lost in 3 months. Mantra: eat anything, but\u00a0little</p>\n<p>These are my observations on myself, obviously, they may differ for\u00a0others.</p>\n<p>I could\u2019ve made this more scientific (like finding fat % and lean body mass %, weight logging every day, other vitals, the scientific reasoning behind the observations, etc), but I guess I was just lazy to do the work and honestly didn\u2019t expect this method would work so successfully.</p>\n<p>I would absolutely recommend a <em>much</em> better <a href="http://karpathy.github.io/2020/06/11/biohacking-lite/">article</a> written by <a href="https://karpathy.ai/">Andrej Karpathy</a> on a similar topic that goes into the depths of how weight loss works. This article is what got me started with this experiment on myself. I also started reading a book titled \u201cThe Machinery of Life\u201d which gave me an understanding of how our cells work and how energy is consumed.</p>\n<h3>What I\u00a0did:</h3>\n<p><strong>I didn\u2019t do anything crazy</strong> <br>Small increments overtime becomes a large increment. There\u2019s no sudden change of habits, I could\u2019ve taken it at any comfortable pace. And the actual diet is not something totally different from my regular\u00a0diet.</p>\n<p><strong>Eat Less<br></strong>Just eat the amount of food you are <em>hungry</em> for. Not for the taste/craving.</p>\n<p>My typical daily diet would be\u00a0like</p>\n<ul>\n<li>Morning: Only when I\u2019m hungry: some nuts OR 2\u20133 spoons of oatmeal with few fruits OR\u00a0nothing</li>\n<li>12 PM: A typical South-Indian food\u200a\u2014\u200arice with some vegetable curry. But only about 5\u201310 spoons of rice and just enough curry for the\u00a0rice.</li>\n<li>Evening: Nothing or a handful of some snacks. I had a regular habit of eating Samosa or other snacks in the evenings when I was in India which is still hard to get rid of. I cheated many times by eating a lot of potato chips in the evenings which always had an immediate effect of 0.5\u20131 lb increase in weight the next\u00a0day.</li>\n<li>8 PM: Same as\u00a0lunch</li>\n</ul>\n<p><strong>Avoid sugars<br></strong>I tried to avoid ice creams, chocolates, sweets, cakes, etc. Even fruits like oranges are sugars, I had a couple of pieces once a week or so. A spoon of ice cream once a month is probably harmless. Sugars get stored as fat. I think of them as something that goes in and doesn\u2019t come out. So it accumulates over time and builds weight (not true but helps to not increase\u00a0weight).</p>\n<p><strong>Workout<br></strong>I work out almost every day. Not a lot, just around an hour targeting one part of the body. My weekly routine is chest, back, shoulders, cardio, biceps &amp; triceps, and\u00a0legs.</p>\n<p><strong>No protein shake<br></strong>Protein shake increases weight by a lot in a short span of time. One might argue that this increase in weight is actually lean body mass/muscle, and NOT fat. But I had no way of telling without actual measurement.</p>\n<p><strong>Vegan diet<br></strong>Nothing new here, I\u2019ve been on a mostly vegan diet for a very long time. (I eat paneer, but I plan to stop it). I don\u2019t know how much of this is a factor in weight loss. I can\u2019t verify because I don\u2019t eat\u00a0meat.</p>\n<h3>Why it\u00a0works</h3>\n<p>This diet works because of the simple fact that you consume fewer calories than you burn. You might ask \u201cAlternatively, I can eat normally, but workout twice as much, right?\u201d. Well, maybe, but the human body is highly efficient in burning energy for workouts. Surprisingly, staying alive takes a lot of energy than working out (please don\u2019t take this as an excuse to not go to the gym, the workout is part of my weight loss). I know I can\u2019t keep working out for hours and waste my time burning more than 2000 calories a day, so I did the opposite, consume less than 2000 calories a\u00a0day.</p>\n<h3>Results:</h3>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/945/1*aVF5HfcFS62eGy6JG0PLIQ.png"><figcaption>My weight data from Google\u00a0Fit</figcaption></figure><p>Note: I am a metric guy, but my roommates here in the US use a weighing machine that is set to pounds by\u00a0default.</p>\n<p><strong>Weight reduced</strong></p>\n<ul>\n<li>I used to weigh <strong>168</strong> lb (76.2 kg) on the heaviest day. Averaging at around 165 lb (74.8\u00a0kg).</li>\n<li>After following the diet, I weigh <strong>145</strong> lb (65.7 kg) and still decreasing. A weight loss of <strong>23</strong> lb (10.4\u00a0kg)</li>\n</ul>\n<p><strong>Rate of weight\u00a0decline</strong></p>\n<ul>\n<li>If I strictly follow low quantity diet, I immediately have an effect on the next day. About <strong>1</strong> pound (0.45 kg) of weight loss in a single day (especially in beginning).</li>\n<li>However, those days are few, because on average, about <strong>0.25</strong> pounds (0.11 kg) a day is what I\u00a0saw.</li>\n<li>The chart above is taken from my Google Fit data. I know, I wish I had more data\u00a0points.</li>\n</ul>\n<p><strong>Visual Changes</strong></p>\n<ul>\n<li>I used to struggle to pull my belly inwards when I wear a tighter T-shirt. I didn\u2019t have a lot of belly fat, but I would consider that a medium-sized pot belly for my body size. I also had a good amount of love handles that I always\u00a0hated.</li>\n<li>Now, I still have thin belly fat that is visible without the shirt, but I would look absolutely flat in a t-shirt with no struggle. Good news, the love handles are gone. They exist, but not as much as I would consider fatty. I don\u2019t think I lost fat in my\u00a0thighs</li>\n<li>I noticed that the volume of my body decreased. I became a tiny bit\u00a0slender.</li>\n</ul>\n<h3>My observations before starting this\u00a0diet:</h3>\n<ul>\n<li>Workout with eating a lot: Always increased my weight. After I stop working out for some reason, I gain a lot of weight because of the same eating\u00a0habits.</li>\n<li>Drinking protein shake increases weight like\u00a0crazy</li>\n</ul>\n<h3>Advantages of this\u00a0diet:</h3>\n<ul>\n<li>You can eat whatever the hell you want. Consider some other diet that recommends eating a certain food only, then you\u2019re likely eating the same food every day and you won\u2019t like it after a while. Parties and gatherings mean that you must break your diet, but not with the diet I followed.</li>\n<li>After following this for a couple of months, my body got comfortable with small bowls of food and I didn\u2019t feel like eating a lot. It became a habit. A habit, good or bad, is hard to get rid\u00a0of.</li>\n</ul>\n<h3>Disadvantages:</h3>\n<ul>\n<li>Humans have a natural craving for eating a lot of delicious food. How can one control that, especially when others around you are eating a lot of tasty food? Well, you will still eat that delicious food, albeit not as much as others. In my case, I was at an advantage because I was never a foodie. I eat whatever I have and move on to my work. So the craving factor was\u00a0low.</li>\n<li>I had no real metric to measure how healthy I was getting overtime. I was physically more active at most times. I didn\u2019t get sick, no acid refluxes, no regrets. But what\u2019s reality? \u201cI <em>feel</em> good\u201d doesn\u2019t mean \u201cI am healthy\u201d. We need scientific tools to determine how healthy I was. And I have no idea what those tools are (maybe blood pressure machine, blood sugar level measuring machine? I don\u2019t know) or how to get access to them. This is just me being lazy and ignorant. I did NOT feel better in one situation. You must have experienced <em>almost</em> passing out when you get up after sitting for a long time. I used to experience that many years ago AND after starting this diet plan. Once a couple of weeks, I almost fall down. This is definitely a sign that I am not gathering enough energy. I\u2019m guessing that this is because I am running out of ATP buffer and there\u2019s not enough glucose available in my skeletal\u00a0muscle.</li>\n</ul>\n<h3>Conclusion</h3>\n<p>My diet, call it whatever you want (maybe low quant diet?), is really effective on\u00a0me.</p>\n<p>Once again, this is a record of an experiment on my body. I won\u2019t say this generalizes to everybody. If a person is suffering from acid reflux, following my diet might be a bad idea. I do not know who should NOT follow this diet. I also do not say there are strict rules to this. My advice is to start the experiment, if it isn\u2019t working for you, make some tweaks to fit it into your lifestyle. The goal is to burn more calories than you\u00a0consume.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=90c80f8b1436" width="1" height="1" alt="">\n',
      content:
        '\n<p><strong>TL;DR</strong>: 23lb/10kg lost in 3 months. Mantra: eat anything, but\u00a0little</p>\n<p>These are my observations on myself, obviously, they may differ for\u00a0others.</p>\n<p>I could\u2019ve made this more scientific (like finding fat % and lean body mass %, weight logging every day, other vitals, the scientific reasoning behind the observations, etc), but I guess I was just lazy to do the work and honestly didn\u2019t expect this method would work so successfully.</p>\n<p>I would absolutely recommend a <em>much</em> better <a href="http://karpathy.github.io/2020/06/11/biohacking-lite/">article</a> written by <a href="https://karpathy.ai/">Andrej Karpathy</a> on a similar topic that goes into the depths of how weight loss works. This article is what got me started with this experiment on myself. I also started reading a book titled \u201cThe Machinery of Life\u201d which gave me an understanding of how our cells work and how energy is consumed.</p>\n<h3>What I\u00a0did:</h3>\n<p><strong>I didn\u2019t do anything crazy</strong> <br>Small increments overtime becomes a large increment. There\u2019s no sudden change of habits, I could\u2019ve taken it at any comfortable pace. And the actual diet is not something totally different from my regular\u00a0diet.</p>\n<p><strong>Eat Less<br></strong>Just eat the amount of food you are <em>hungry</em> for. Not for the taste/craving.</p>\n<p>My typical daily diet would be\u00a0like</p>\n<ul>\n<li>Morning: Only when I\u2019m hungry: some nuts OR 2\u20133 spoons of oatmeal with few fruits OR\u00a0nothing</li>\n<li>12 PM: A typical South-Indian food\u200a\u2014\u200arice with some vegetable curry. But only about 5\u201310 spoons of rice and just enough curry for the\u00a0rice.</li>\n<li>Evening: Nothing or a handful of some snacks. I had a regular habit of eating Samosa or other snacks in the evenings when I was in India which is still hard to get rid of. I cheated many times by eating a lot of potato chips in the evenings which always had an immediate effect of 0.5\u20131 lb increase in weight the next\u00a0day.</li>\n<li>8 PM: Same as\u00a0lunch</li>\n</ul>\n<p><strong>Avoid sugars<br></strong>I tried to avoid ice creams, chocolates, sweets, cakes, etc. Even fruits like oranges are sugars, I had a couple of pieces once a week or so. A spoon of ice cream once a month is probably harmless. Sugars get stored as fat. I think of them as something that goes in and doesn\u2019t come out. So it accumulates over time and builds weight (not true but helps to not increase\u00a0weight).</p>\n<p><strong>Workout<br></strong>I work out almost every day. Not a lot, just around an hour targeting one part of the body. My weekly routine is chest, back, shoulders, cardio, biceps &amp; triceps, and\u00a0legs.</p>\n<p><strong>No protein shake<br></strong>Protein shake increases weight by a lot in a short span of time. One might argue that this increase in weight is actually lean body mass/muscle, and NOT fat. But I had no way of telling without actual measurement.</p>\n<p><strong>Vegan diet<br></strong>Nothing new here, I\u2019ve been on a mostly vegan diet for a very long time. (I eat paneer, but I plan to stop it). I don\u2019t know how much of this is a factor in weight loss. I can\u2019t verify because I don\u2019t eat\u00a0meat.</p>\n<h3>Why it\u00a0works</h3>\n<p>This diet works because of the simple fact that you consume fewer calories than you burn. You might ask \u201cAlternatively, I can eat normally, but workout twice as much, right?\u201d. Well, maybe, but the human body is highly efficient in burning energy for workouts. Surprisingly, staying alive takes a lot of energy than working out (please don\u2019t take this as an excuse to not go to the gym, the workout is part of my weight loss). I know I can\u2019t keep working out for hours and waste my time burning more than 2000 calories a day, so I did the opposite, consume less than 2000 calories a\u00a0day.</p>\n<h3>Results:</h3>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/945/1*aVF5HfcFS62eGy6JG0PLIQ.png"><figcaption>My weight data from Google\u00a0Fit</figcaption></figure><p>Note: I am a metric guy, but my roommates here in the US use a weighing machine that is set to pounds by\u00a0default.</p>\n<p><strong>Weight reduced</strong></p>\n<ul>\n<li>I used to weigh <strong>168</strong> lb (76.2 kg) on the heaviest day. Averaging at around 165 lb (74.8\u00a0kg).</li>\n<li>After following the diet, I weigh <strong>145</strong> lb (65.7 kg) and still decreasing. A weight loss of <strong>23</strong> lb (10.4\u00a0kg)</li>\n</ul>\n<p><strong>Rate of weight\u00a0decline</strong></p>\n<ul>\n<li>If I strictly follow low quantity diet, I immediately have an effect on the next day. About <strong>1</strong> pound (0.45 kg) of weight loss in a single day (especially in beginning).</li>\n<li>However, those days are few, because on average, about <strong>0.25</strong> pounds (0.11 kg) a day is what I\u00a0saw.</li>\n<li>The chart above is taken from my Google Fit data. I know, I wish I had more data\u00a0points.</li>\n</ul>\n<p><strong>Visual Changes</strong></p>\n<ul>\n<li>I used to struggle to pull my belly inwards when I wear a tighter T-shirt. I didn\u2019t have a lot of belly fat, but I would consider that a medium-sized pot belly for my body size. I also had a good amount of love handles that I always\u00a0hated.</li>\n<li>Now, I still have thin belly fat that is visible without the shirt, but I would look absolutely flat in a t-shirt with no struggle. Good news, the love handles are gone. They exist, but not as much as I would consider fatty. I don\u2019t think I lost fat in my\u00a0thighs</li>\n<li>I noticed that the volume of my body decreased. I became a tiny bit\u00a0slender.</li>\n</ul>\n<h3>My observations before starting this\u00a0diet:</h3>\n<ul>\n<li>Workout with eating a lot: Always increased my weight. After I stop working out for some reason, I gain a lot of weight because of the same eating\u00a0habits.</li>\n<li>Drinking protein shake increases weight like\u00a0crazy</li>\n</ul>\n<h3>Advantages of this\u00a0diet:</h3>\n<ul>\n<li>You can eat whatever the hell you want. Consider some other diet that recommends eating a certain food only, then you\u2019re likely eating the same food every day and you won\u2019t like it after a while. Parties and gatherings mean that you must break your diet, but not with the diet I followed.</li>\n<li>After following this for a couple of months, my body got comfortable with small bowls of food and I didn\u2019t feel like eating a lot. It became a habit. A habit, good or bad, is hard to get rid\u00a0of.</li>\n</ul>\n<h3>Disadvantages:</h3>\n<ul>\n<li>Humans have a natural craving for eating a lot of delicious food. How can one control that, especially when others around you are eating a lot of tasty food? Well, you will still eat that delicious food, albeit not as much as others. In my case, I was at an advantage because I was never a foodie. I eat whatever I have and move on to my work. So the craving factor was\u00a0low.</li>\n<li>I had no real metric to measure how healthy I was getting overtime. I was physically more active at most times. I didn\u2019t get sick, no acid refluxes, no regrets. But what\u2019s reality? \u201cI <em>feel</em> good\u201d doesn\u2019t mean \u201cI am healthy\u201d. We need scientific tools to determine how healthy I was. And I have no idea what those tools are (maybe blood pressure machine, blood sugar level measuring machine? I don\u2019t know) or how to get access to them. This is just me being lazy and ignorant. I did NOT feel better in one situation. You must have experienced <em>almost</em> passing out when you get up after sitting for a long time. I used to experience that many years ago AND after starting this diet plan. Once a couple of weeks, I almost fall down. This is definitely a sign that I am not gathering enough energy. I\u2019m guessing that this is because I am running out of ATP buffer and there\u2019s not enough glucose available in my skeletal\u00a0muscle.</li>\n</ul>\n<h3>Conclusion</h3>\n<p>My diet, call it whatever you want (maybe low quant diet?), is really effective on\u00a0me.</p>\n<p>Once again, this is a record of an experiment on my body. I won\u2019t say this generalizes to everybody. If a person is suffering from acid reflux, following my diet might be a bad idea. I do not know who should NOT follow this diet. I also do not say there are strict rules to this. My advice is to start the experiment, if it isn\u2019t working for you, make some tweaks to fit it into your lifestyle. The goal is to burn more calories than you\u00a0consume.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=90c80f8b1436" width="1" height="1" alt="">\n',
      enclosure: {},
      categories: ["experiment", "weight-loss"],
    },
    {
      title: "My Review of University of Cincinnati",
      pubDate: "2021-02-05 05:24:28",
      link:
        "https://medium.com/@akhilez/my-review-of-university-of-cincinnati-ce0d24f0330a?source=rss-c26812ee15f5------2",
      guid: "https://medium.com/p/ce0d24f0330a",
      author: "Akhilez",
      thumbnail:
        "https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=ce0d24f0330a",
      description:
        '\n<p>I am an international student. I wanted to specialize in Deep Learning, so I joined <a href="https://ceas.uc.edu/academics/departments/aerospace-engineering-mechanics/degrees-programs/artificial-intelligence-master-of-engineering.html">MEng in\u00a0AI</a>.</p>\n<p>I can\u2019t speak of undergrad, thesis, Ph.D. or other professors at UC. My duration here was roughly around 8 months, so take this review for what it\u2019s\u00a0worth.</p>\n<h3>Academics</h3>\n<p>I was at UC for 2 semesters. I had to choose 4 courses each semester, of which 1 would be non-technical like entrepreneurship, leadership etc. The 6 other courses are related to AI, no unrelated mandatory course which is\u00a0great.</p>\n<h4><a href="https://www.coursicle.com/uc/courses/EECE/6036/">Intelligent Systems</a></h4>\n<p>This is THE BEST course at UC for me. The course starts off with philosophy-like lectures about intelligence. The majority of this course is teaching the basics of neural networks. The professor explains the inner workings of neural networks in meticulous detail. The course also includes unconventional neural networks like spiking neurons and Hopfield networks, ensemble networks, etc. The exams are also good\u200a\u2014\u200afew one-liners, some longer answers, sometimes open-ended questions that do not have a correct\u00a0answer.</p>\n<p>The professor is <a href="https://eecs.ceas.uc.edu/~minaiaa/">Ali Minai</a>, the director of the engineering department. Ali Minai is one of the best professors at UC, a huge influencer for me. He is confident and knows his material really well. His words are very clear, he maintains that clarity of speech throughout the course. His style of teaching is in a manner that makes difficult concepts easy to understand.<br>You don\u2019t have to take my word for it, read others\u2019 reviews\u00a0<a href="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=134654">here.</a></p>\n<h4><a href="https://www.coursicle.com/uc/courses/EECE/7065/">Complex Systems and\u00a0Networks</a></h4>\n<p>This is the second-best course at UC for me, taught again by Ali Minai. Concepts here include evolution, emergent phenomena, etc. This class has so many open-ended threads that can be dug into their own rabbit holes. You have a lot of optional material to read which is really interesting. This course can open up one\u2019s curiosity towards nature. I absolutely loved it. There are no exams, just one final project that you must present. Student groups come up with very fascinating projects.</p>\n<h4><a href="https://www.coursicle.com/uc/courses/CS/6073/">Deep Learning</a></h4>\n<p>One must not go into this course thinking you\u2019ll get a good intro to deep learning. This is anything but. The course starts off with autoencoders and in each class, the professor takes the students through a new concept in deep learning. There\u2019s a short but difficult quiz after each class. One must study the concepts well before attending the class or you\u2019ll have a hard time following.</p>\n<p>It\u2019s taught by <a href="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=373609">Yizong Cheng</a>. I love the course, but I\u2019m not particularly a fan of his. He offers nothing interesting to the subject. His materials are okay. He doesn\u2019t explain much, just introduces us to the concept and talks in a hand-wavy fashion. The quizzes and exams are actually\u00a0good.</p>\n<h4>Computer Vision</h4>\n<p>Yes, UC has a dedicated computer vision course, but it is masqueraded with a different name: Deep Learning for Image Processing Applications. This is a Ph.D. level course that I chose outside of the curriculum because I love Computer Vision. The course starts off with the professor explaining how CNNs work. After a couple of weeks, students take over\u200a\u2014\u200aeach student voluntarily gives a presentation on any interesting computer vision papers. This is such a breath of fresh air for me, every class is exciting and new with a new teacher that is one of the classmates. There are no exams, just a final presentation.</p>\n<p>The professor is William Wee. He is a very friendly teacher. He has a background in traditional image processing. He doesn\u2019t explain the concepts with clarity, but that\u2019s okay because students are the teachers here\u00a0anyway.</p>\n<h4>Artificial Intelligence</h4>\n<p>The Textbook was the regular AI A Modern Approach which is good. Reading the textbook was fun and 100x better than listening to the lectures. However, you need to pay attention to the classes to pass the exams. The exam pattern is discussed before the exam so that\u2019s useful. The worst part however is the fact that the professor uses an ancient logic language called FRIL. It is very similar to prolog, so there are some resources available online.</p>\n<p>The professor is Anca Ralescu. She has a lot of background and experience in the field of AI. She boasts her connections with pioneers of AI research. Having a good deal of background doesn\u2019t mean she can teach well. In my opinion, she is a terrible teacher (find professor reviews in ratemyprofessor for more opinions). She thinks in her mind that all of the AI concepts are so obvious and doesn\u2019t consider the case of students feeling overwhelming. This happens in every class. The professor sometimes will not discuss the questions that appear in the exam, dismissing the questions as too obvious to\u00a0answer.</p>\n<h4>Machine Learning</h4>\n<p>Machine Learning class teaches 4\u20135 ML concepts like Linear Regression, SVM, and finally Neural Networks. This is a huge class, the classroom is like an auditorium and it\u2019s usually full. This is again taught by Anca Ralescu, a huge bummer. I passed the exams by learning as much as I can online. Many students are too bored and fall asleep during the class and honestly, cannot blame the students because she\u2019s just not an engaging\u00a0teacher.</p>\n<h4>StartupUC / Special Topics in Entrepreneurship</h4>\n<p>This is one of the non-technical courses I took. I thoroughly enjoyed this class. Every student presents their own startup idea. Students are formed into groups to develop their startup further. The coursework is based on a book named Lean Startup by Eric\u00a0Ries.</p>\n<p>The professor is a former startup founder named Chris Petersen.</p>\n<blockquote>I attended a few startup events in Cincinnati. Turns out that Cincinnati has a good startup culture! I am currently working at a Cincy\u00a0startup!</blockquote>\n<h4>Management of Innovation</h4>\n<p>Pure waste of time, took it because it is just for 2\u00a0months.</p>\n<h3>Non-academic</h3>\n<p>I am an overly studious guy, occasionally attending events, so I cannot speak much of athletics, parties, and extracurricular activities. I attended a few programs, HyperloopUC, Salsa class, and a few networking and fun events which were all great. The administrators were nice to talk\u00a0to.</p>\n<h4>Job opportunities</h4>\n<p>Coming from a place where job opportunities are basically gifted to students\u200a\u2014\u200aundergrad at <a href="https://www.kmit.in/">KMIT</a>, UC felt quite different. Companies don\u2019t randomly set a date and show up to interview students, but they visit the campus on a single day\u200a\u2014\u200athe event of Career Fair. Other than that, students occasionally get job alerts from the job advisor where one has to apply online if interested. So students are pretty much on their own when hunting\u00a0jobs.</p>\n<p>UC conducts a career fair every semester. About 90 companies come to the event, of which only 20 or so are software companies, almost none are AI-related. Most of them are construction, manufacturing companies, etc. It is nice to interact with the companies, one must plan to navigate well, taking full advantage of the guide book given. I got my first 2 jobs in the first semester\u2019s career fair. Not everyone is as lucky as I am though, I know countable friends who got the job from fairs.<br>The job advisor Amanda McLaughlin is a very kind person, helped me build my resume and\u00a0more.</p>\n<h4>UC Online</h4>\n<p>When the COVID pandemic hit, I was halfway done with my second semester. The biggest bummer for me was that I couldn\u2019t meet the professors and students in person. If I had to watch online lectures, I could\u2019ve done it back in India. The relationship with professors and in-class experience is why I go to the university. Now that\u2019s\u00a0lost.</p>\n<p>Classes however recovered quickly. The Materials for all the courses were already online since day 1, so only lecture videos and live lectures had to be introduced. I wouldn\u2019t say I disliked the online lectures, but there was a definite disconnect with the professors and students.</p>\n<h4>Miscellaneous</h4>\n<p>UC provides off-campus housing for graduate students. The apartment is very neat and overall very\u00a0good.</p>\n<p>The university is approximately 3 miles away from downtown and 1 mile from the Cincinnati Zoo. The surrounding area is urban and neat with mostly safe\u00a0areas.</p>\n<p>University has provided $10k as a scholarship for all international students.</p>\n<h3>Conclusion</h3>\n<p>MEng in AI at UC has been an amazing experience for me. The best part is the reduced course duration of just 2 semesters enabling focused coursework and opening the opportunity to work right after the coursework.</p>\n<p>If I missed out on any aspects, please let me know in the comments!</p>\n<h3>Appendix</h3>\n<p>So why was I interested in\u00a0UC?</p>\n<ul>\n<li>Masters in AI. There were only 4 universities in the US that offered Masters in Artificial Intelligence. One of them is UC. Other 3\u200a\u2014\u200aNorthwestern, UGA, and Northeastern University.</li>\n<li>Relatively low fees\u200a\u2014\u200a$20k</li>\n<li>1-year non-thesis course</li>\n</ul>\n<p>A LOT of students came to UC from my city, nobody I know was rejected. So what is the real acceptance rate?</p>\n<p>How to select a university for your master\'s?<br>Here\u2019s what I did\u200a\u2014\u200aonly applies to CS students.</p>\n<ul>\n<li>Go to <a href="http://csrankings.org/">http://csrankings.org</a>/</li>\n<li>On the left, select the areas that you are interested in.</li>\n<li>On the right, you\u2019ll see a list of universities sorted descendingly by the number of publications and\u00a0faculty.</li>\n<li>Assuming that a number of publications correlate to a better university, this will give you an academically personalized list of universities.</li>\n<li>However, you still do not know which universities are likely to get admission from. For this, there is no real statistic. I relied on the mean GRE scores provided in <a href="https://yocket.in/">https://yocket.in/</a>\n</li>\n<li>Once you\u2019ve shortlisted about 50 or so universities, now the next step would be to go to each university\'s website, look at the course descriptions, fees,\u00a0etc.</li>\n<li>The next step is to look at who is teaching these courses and find their reviews on <a href="https://www.ratemyprofessors.com/">https://www.ratemyprofessors.com/</a>. You will now be able to shortlist to a small enough number to finalize the\u00a0list!</li>\n</ul>\n<p>But why am I interested in AI in the first place? That\u2019s for another\u00a0blog!</p>\n<p>Thanks for reading! Checkout my ML website at <a href="https://ml.gallery/">https://ml.gallery/</a></p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=ce0d24f0330a" width="1" height="1" alt="">\n',
      content:
        '\n<p>I am an international student. I wanted to specialize in Deep Learning, so I joined <a href="https://ceas.uc.edu/academics/departments/aerospace-engineering-mechanics/degrees-programs/artificial-intelligence-master-of-engineering.html">MEng in\u00a0AI</a>.</p>\n<p>I can\u2019t speak of undergrad, thesis, Ph.D. or other professors at UC. My duration here was roughly around 8 months, so take this review for what it\u2019s\u00a0worth.</p>\n<h3>Academics</h3>\n<p>I was at UC for 2 semesters. I had to choose 4 courses each semester, of which 1 would be non-technical like entrepreneurship, leadership etc. The 6 other courses are related to AI, no unrelated mandatory course which is\u00a0great.</p>\n<h4><a href="https://www.coursicle.com/uc/courses/EECE/6036/">Intelligent Systems</a></h4>\n<p>This is THE BEST course at UC for me. The course starts off with philosophy-like lectures about intelligence. The majority of this course is teaching the basics of neural networks. The professor explains the inner workings of neural networks in meticulous detail. The course also includes unconventional neural networks like spiking neurons and Hopfield networks, ensemble networks, etc. The exams are also good\u200a\u2014\u200afew one-liners, some longer answers, sometimes open-ended questions that do not have a correct\u00a0answer.</p>\n<p>The professor is <a href="https://eecs.ceas.uc.edu/~minaiaa/">Ali Minai</a>, the director of the engineering department. Ali Minai is one of the best professors at UC, a huge influencer for me. He is confident and knows his material really well. His words are very clear, he maintains that clarity of speech throughout the course. His style of teaching is in a manner that makes difficult concepts easy to understand.<br>You don\u2019t have to take my word for it, read others\u2019 reviews\u00a0<a href="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=134654">here.</a></p>\n<h4><a href="https://www.coursicle.com/uc/courses/EECE/7065/">Complex Systems and\u00a0Networks</a></h4>\n<p>This is the second-best course at UC for me, taught again by Ali Minai. Concepts here include evolution, emergent phenomena, etc. This class has so many open-ended threads that can be dug into their own rabbit holes. You have a lot of optional material to read which is really interesting. This course can open up one\u2019s curiosity towards nature. I absolutely loved it. There are no exams, just one final project that you must present. Student groups come up with very fascinating projects.</p>\n<h4><a href="https://www.coursicle.com/uc/courses/CS/6073/">Deep Learning</a></h4>\n<p>One must not go into this course thinking you\u2019ll get a good intro to deep learning. This is anything but. The course starts off with autoencoders and in each class, the professor takes the students through a new concept in deep learning. There\u2019s a short but difficult quiz after each class. One must study the concepts well before attending the class or you\u2019ll have a hard time following.</p>\n<p>It\u2019s taught by <a href="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=373609">Yizong Cheng</a>. I love the course, but I\u2019m not particularly a fan of his. He offers nothing interesting to the subject. His materials are okay. He doesn\u2019t explain much, just introduces us to the concept and talks in a hand-wavy fashion. The quizzes and exams are actually\u00a0good.</p>\n<h4>Computer Vision</h4>\n<p>Yes, UC has a dedicated computer vision course, but it is masqueraded with a different name: Deep Learning for Image Processing Applications. This is a Ph.D. level course that I chose outside of the curriculum because I love Computer Vision. The course starts off with the professor explaining how CNNs work. After a couple of weeks, students take over\u200a\u2014\u200aeach student voluntarily gives a presentation on any interesting computer vision papers. This is such a breath of fresh air for me, every class is exciting and new with a new teacher that is one of the classmates. There are no exams, just a final presentation.</p>\n<p>The professor is William Wee. He is a very friendly teacher. He has a background in traditional image processing. He doesn\u2019t explain the concepts with clarity, but that\u2019s okay because students are the teachers here\u00a0anyway.</p>\n<h4>Artificial Intelligence</h4>\n<p>The Textbook was the regular AI A Modern Approach which is good. Reading the textbook was fun and 100x better than listening to the lectures. However, you need to pay attention to the classes to pass the exams. The exam pattern is discussed before the exam so that\u2019s useful. The worst part however is the fact that the professor uses an ancient logic language called FRIL. It is very similar to prolog, so there are some resources available online.</p>\n<p>The professor is Anca Ralescu. She has a lot of background and experience in the field of AI. She boasts her connections with pioneers of AI research. Having a good deal of background doesn\u2019t mean she can teach well. In my opinion, she is a terrible teacher (find professor reviews in ratemyprofessor for more opinions). She thinks in her mind that all of the AI concepts are so obvious and doesn\u2019t consider the case of students feeling overwhelming. This happens in every class. The professor sometimes will not discuss the questions that appear in the exam, dismissing the questions as too obvious to\u00a0answer.</p>\n<h4>Machine Learning</h4>\n<p>Machine Learning class teaches 4\u20135 ML concepts like Linear Regression, SVM, and finally Neural Networks. This is a huge class, the classroom is like an auditorium and it\u2019s usually full. This is again taught by Anca Ralescu, a huge bummer. I passed the exams by learning as much as I can online. Many students are too bored and fall asleep during the class and honestly, cannot blame the students because she\u2019s just not an engaging\u00a0teacher.</p>\n<h4>StartupUC / Special Topics in Entrepreneurship</h4>\n<p>This is one of the non-technical courses I took. I thoroughly enjoyed this class. Every student presents their own startup idea. Students are formed into groups to develop their startup further. The coursework is based on a book named Lean Startup by Eric\u00a0Ries.</p>\n<p>The professor is a former startup founder named Chris Petersen.</p>\n<blockquote>I attended a few startup events in Cincinnati. Turns out that Cincinnati has a good startup culture! I am currently working at a Cincy\u00a0startup!</blockquote>\n<h4>Management of Innovation</h4>\n<p>Pure waste of time, took it because it is just for 2\u00a0months.</p>\n<h3>Non-academic</h3>\n<p>I am an overly studious guy, occasionally attending events, so I cannot speak much of athletics, parties, and extracurricular activities. I attended a few programs, HyperloopUC, Salsa class, and a few networking and fun events which were all great. The administrators were nice to talk\u00a0to.</p>\n<h4>Job opportunities</h4>\n<p>Coming from a place where job opportunities are basically gifted to students\u200a\u2014\u200aundergrad at <a href="https://www.kmit.in/">KMIT</a>, UC felt quite different. Companies don\u2019t randomly set a date and show up to interview students, but they visit the campus on a single day\u200a\u2014\u200athe event of Career Fair. Other than that, students occasionally get job alerts from the job advisor where one has to apply online if interested. So students are pretty much on their own when hunting\u00a0jobs.</p>\n<p>UC conducts a career fair every semester. About 90 companies come to the event, of which only 20 or so are software companies, almost none are AI-related. Most of them are construction, manufacturing companies, etc. It is nice to interact with the companies, one must plan to navigate well, taking full advantage of the guide book given. I got my first 2 jobs in the first semester\u2019s career fair. Not everyone is as lucky as I am though, I know countable friends who got the job from fairs.<br>The job advisor Amanda McLaughlin is a very kind person, helped me build my resume and\u00a0more.</p>\n<h4>UC Online</h4>\n<p>When the COVID pandemic hit, I was halfway done with my second semester. The biggest bummer for me was that I couldn\u2019t meet the professors and students in person. If I had to watch online lectures, I could\u2019ve done it back in India. The relationship with professors and in-class experience is why I go to the university. Now that\u2019s\u00a0lost.</p>\n<p>Classes however recovered quickly. The Materials for all the courses were already online since day 1, so only lecture videos and live lectures had to be introduced. I wouldn\u2019t say I disliked the online lectures, but there was a definite disconnect with the professors and students.</p>\n<h4>Miscellaneous</h4>\n<p>UC provides off-campus housing for graduate students. The apartment is very neat and overall very\u00a0good.</p>\n<p>The university is approximately 3 miles away from downtown and 1 mile from the Cincinnati Zoo. The surrounding area is urban and neat with mostly safe\u00a0areas.</p>\n<p>University has provided $10k as a scholarship for all international students.</p>\n<h3>Conclusion</h3>\n<p>MEng in AI at UC has been an amazing experience for me. The best part is the reduced course duration of just 2 semesters enabling focused coursework and opening the opportunity to work right after the coursework.</p>\n<p>If I missed out on any aspects, please let me know in the comments!</p>\n<h3>Appendix</h3>\n<p>So why was I interested in\u00a0UC?</p>\n<ul>\n<li>Masters in AI. There were only 4 universities in the US that offered Masters in Artificial Intelligence. One of them is UC. Other 3\u200a\u2014\u200aNorthwestern, UGA, and Northeastern University.</li>\n<li>Relatively low fees\u200a\u2014\u200a$20k</li>\n<li>1-year non-thesis course</li>\n</ul>\n<p>A LOT of students came to UC from my city, nobody I know was rejected. So what is the real acceptance rate?</p>\n<p>How to select a university for your master\'s?<br>Here\u2019s what I did\u200a\u2014\u200aonly applies to CS students.</p>\n<ul>\n<li>Go to <a href="http://csrankings.org/">http://csrankings.org</a>/</li>\n<li>On the left, select the areas that you are interested in.</li>\n<li>On the right, you\u2019ll see a list of universities sorted descendingly by the number of publications and\u00a0faculty.</li>\n<li>Assuming that a number of publications correlate to a better university, this will give you an academically personalized list of universities.</li>\n<li>However, you still do not know which universities are likely to get admission from. For this, there is no real statistic. I relied on the mean GRE scores provided in <a href="https://yocket.in/">https://yocket.in/</a>\n</li>\n<li>Once you\u2019ve shortlisted about 50 or so universities, now the next step would be to go to each university\'s website, look at the course descriptions, fees,\u00a0etc.</li>\n<li>The next step is to look at who is teaching these courses and find their reviews on <a href="https://www.ratemyprofessors.com/">https://www.ratemyprofessors.com/</a>. You will now be able to shortlist to a small enough number to finalize the\u00a0list!</li>\n</ul>\n<p>But why am I interested in AI in the first place? That\u2019s for another\u00a0blog!</p>\n<p>Thanks for reading! Checkout my ML website at <a href="https://ml.gallery/">https://ml.gallery/</a></p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=ce0d24f0330a" width="1" height="1" alt="">\n',
      enclosure: {},
      categories: [
        "masters-degree",
        "university-of-cincinnati",
        "artificial-intelligence",
      ],
    },
    {
      title: "PrecAIrious Love: A short story on AI",
      pubDate: "2020-03-20 22:46:52",
      link:
        "https://medium.com/@akhilez/precairious-love-a-short-story-on-ai-c25b07fa2e91?source=rss-c26812ee15f5------2",
      guid: "https://medium.com/p/c25b07fa2e91",
      author: "Akhilez",
      thumbnail:
        "https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=c25b07fa2e91",
      description:
        '\n<h3>PrecAIrious Love</h3>\n<h4>A short story on\u00a0AI</h4>\n<blockquote>The following short story is a <a href="http://kmit.in/emagazine/article/8934/">repost </a>from <a href="http://kmit.in/emagazine/author/akhil-kanna/">kMITRA </a>written by myself, with a few\u00a0changes.</blockquote>\n<p>The year is 2035, I lost her to a car accident three years ago. She was the love of my life. The unbearable grief amplified with every other day. I lost my job at VirtualMind Inc. and started spending all of my time creating a robotic replica of her. Humanity has developed robotic citizens that have passed the Turing test. AI has advanced much faster than anticipated.</p>\n<p>Years have passed, her replica is ready. She looks perfectly identical, yet doesn\u2019t know who I am. She has no memories of my girlfriend. She has her legal freedom rights, so I had to set her free in the city without her knowing about me. Now she is some other person living her own life. However, I know that she waits at a bus stop every day. I go to the bus stop every day to see her. I started to admire how closely she acts like my late girlfriend. My obsession made me meet her at the bus stop one day. I introduced myself, we both got to know each other. We became friends, we meet every day at that bus stop. We play with a dog that hangs around the bus stop, our bond started to grow. The dog recognizes us and gets excited whenever we arrive. We started meeting not only at the bus stop but also at the movies and parks. We started to hold each other\u2019s hands while walking and we finally fell in love with each other. I loved all the moments with her which I thought would never experience again with\u00a0her.</p>\n<p>I fell in love again, but with an AI, and the love was real. I never tried to say \u201cYou are a robot, we cannot be lovers\u201d because I was afraid that it would ruin our relationship. But unfortunately, that day has come. We were casually walking arm in arm, she was happy and asked, \u201cWhen will you introduce me to your parents?\u201d. I said, \u201cSociety will not accept us. Society will not accept an AI being in love with a human\u201d. She was silent, felt irritated and said, \u201cSo what? Don\u2019t robots have feelings?\u201d. That question broke my heart too. Her mood was\u00a0spoiled.</p>\n<p>Later that day, after she boarded her bus, I decided to talk to my mother about us. I went to my mom\u2019s house, but when I opened the front door, there was a dog sitting right in front of me. It was the same dog from the bus stop that we used to play with at the bus stop. But surprisingly, it did not recognize me, it seemed like it was a robot programmed to guard the door. \u201cWas my mom spying on me all this time?\u201d, I thought to myself. At once, the dog barked at me. After listening to that distinct high-pitched bark which I recognize very well, I was still in a weird sense of surprise, I felt like everything is hitting my\u00a0head.</p>\n<p>Then I woke up in an instant from my sleep, realizing that it was all a dream, I looked at my girlfriend sleeping beside me, facing the other direction. I cuddled her from the back and said, \u201cBaby, I had a bad dream\u201d. Worriedly, she turned and I saw her beautiful robotic face that I had\u00a0made.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=c25b07fa2e91" width="1" height="1" alt="">\n',
      content:
        '\n<h3>PrecAIrious Love</h3>\n<h4>A short story on\u00a0AI</h4>\n<blockquote>The following short story is a <a href="http://kmit.in/emagazine/article/8934/">repost </a>from <a href="http://kmit.in/emagazine/author/akhil-kanna/">kMITRA </a>written by myself, with a few\u00a0changes.</blockquote>\n<p>The year is 2035, I lost her to a car accident three years ago. She was the love of my life. The unbearable grief amplified with every other day. I lost my job at VirtualMind Inc. and started spending all of my time creating a robotic replica of her. Humanity has developed robotic citizens that have passed the Turing test. AI has advanced much faster than anticipated.</p>\n<p>Years have passed, her replica is ready. She looks perfectly identical, yet doesn\u2019t know who I am. She has no memories of my girlfriend. She has her legal freedom rights, so I had to set her free in the city without her knowing about me. Now she is some other person living her own life. However, I know that she waits at a bus stop every day. I go to the bus stop every day to see her. I started to admire how closely she acts like my late girlfriend. My obsession made me meet her at the bus stop one day. I introduced myself, we both got to know each other. We became friends, we meet every day at that bus stop. We play with a dog that hangs around the bus stop, our bond started to grow. The dog recognizes us and gets excited whenever we arrive. We started meeting not only at the bus stop but also at the movies and parks. We started to hold each other\u2019s hands while walking and we finally fell in love with each other. I loved all the moments with her which I thought would never experience again with\u00a0her.</p>\n<p>I fell in love again, but with an AI, and the love was real. I never tried to say \u201cYou are a robot, we cannot be lovers\u201d because I was afraid that it would ruin our relationship. But unfortunately, that day has come. We were casually walking arm in arm, she was happy and asked, \u201cWhen will you introduce me to your parents?\u201d. I said, \u201cSociety will not accept us. Society will not accept an AI being in love with a human\u201d. She was silent, felt irritated and said, \u201cSo what? Don\u2019t robots have feelings?\u201d. That question broke my heart too. Her mood was\u00a0spoiled.</p>\n<p>Later that day, after she boarded her bus, I decided to talk to my mother about us. I went to my mom\u2019s house, but when I opened the front door, there was a dog sitting right in front of me. It was the same dog from the bus stop that we used to play with at the bus stop. But surprisingly, it did not recognize me, it seemed like it was a robot programmed to guard the door. \u201cWas my mom spying on me all this time?\u201d, I thought to myself. At once, the dog barked at me. After listening to that distinct high-pitched bark which I recognize very well, I was still in a weird sense of surprise, I felt like everything is hitting my\u00a0head.</p>\n<p>Then I woke up in an instant from my sleep, realizing that it was all a dream, I looked at my girlfriend sleeping beside me, facing the other direction. I cuddled her from the back and said, \u201cBaby, I had a bad dream\u201d. Worriedly, she turned and I saw her beautiful robotic face that I had\u00a0made.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=c25b07fa2e91" width="1" height="1" alt="">\n',
      enclosure: {},
      categories: ["ai", "short-story"],
    },
  ],
}
