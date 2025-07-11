const data = [
  {
    title: "Data Structures and Algorithms",
    emoji: "📚",
    author: "John Doe",
    description: "A comprehensive guide to data structures and algorithms.",
    keywords: [
      "data structures",
      "algorithms",
      "programming",
      "computer science",
    ],
    content:
      "This book covers a wide range of fundamental data structures such as arrays, linked lists, stacks, queues, trees, and graphs. It delves into essential algorithms for searching, sorting, and traversing these structures while providing clear explanations and practical code examples. By the end, readers will not only understand how these structures work but also how to choose and implement them effectively to solve real-world problems.",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8hly31xKli0%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=46795911acd6a169f06b2a5aed7c4d358cc581b44e135e2c11b5ea0b05758960",
  },
  {
    title: "Introduction to Machine Learning",
    emoji: "🤖",
    author: "Jane Smith",
    description:
      "An accessible introduction to machine learning concepts and techniques.",
    keywords: ["machine learning", "AI", "data science", "supervised learning"],
    content:
      "This article offers a gentle introduction to the world of machine learning, explaining core ideas like regression, classification, and clustering in an intuitive way. It covers the basics of supervised and unsupervised learning, explores how models are trained, and introduces neural networks without overwhelming math. With practical examples and real-world applications, it empowers readers to see how machine learning can solve problems across industries.",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ait.de%2Fwp-content%2Fuploads%2F2022%2F01%2FVergleich-Machine-Learning-Deep-Learning-1536x1152.png&f=1&nofb=1&ipt=1b30532e5facb71b15a4c851e789dc9fc253957abaa53d25db40d93cffd79e9a",
  },
  {
    title: "Web Development Essentials",
    emoji: "🌐",
    author: "Alice Johnson",
    description: "Learn the fundamentals of modern web development.",
    keywords: ["HTML", "CSS", "JavaScript", "frontend", "backend"],
    content:
      "Whether you're building your first website or looking to refresh your skills, this guide will walk you through modern web development practices step by step. Learn how to create responsive layouts with HTML and CSS, add interactivity with JavaScript, and understand the basics of frontend frameworks. The article also introduces backend concepts like APIs and databases to help you see the big picture of full-stack development.",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1358%2F1*yj7hIuB4t9K8aCR4ZZ4Gbg.png&f=1&nofb=1&ipt=b1bf6d9fb5086c67a33fa519e10de2e16c5d6f178f1625d9317637f194c761a4",
  },
  {
    title: "Understanding Databases",
    emoji: "🗄️",
    author: "Robert Lee",
    description: "A practical guide to relational and NoSQL databases.",
    keywords: ["databases", "SQL", "NoSQL", "data modeling"],
    content:
      "Databases are at the heart of nearly every application, and this guide helps demystify them. It begins with relational database concepts such as tables, relationships, normalization, and SQL queries. Then it explores the world of NoSQL databases, including document stores and key-value databases, highlighting when and why to use each. By the end, you'll understand data modeling, querying, and designing systems that scale.",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebimages.mongodb.com%2F_com_assets%2Fcms%2Fkuzt9r42or1fxvlq2-Meta_Generic.png&f=1&nofb=1&ipt=e4d0536fc5488608e03e86e587ecee001b5c60e51bebc3b42cae2b30c373b247",
  },
  {
    title: "DevOps and Continuous Integration",
    emoji: "⚙️",
    author: "Emily Davis",
    description: "Streamline your development workflow with DevOps practices.",
    keywords: ["DevOps", "CI/CD", "automation", "software development"],
    content:
      "In this article, we explore the principles of DevOps and how they improve collaboration between development and operations teams. Learn about version control, automated testing, continuous integration, and deployment pipelines that make releasing software faster and more reliable. We'll also discuss infrastructure as code and monitoring, showing you how automation and culture shifts can transform your team's workflow.",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbairesdev.mo.cloudinary.net%2Fblog%2F2023%2F05%2FCI-for-DevOps.jpg%3Ftx%3Dw_3840%2Cq_auto&f=1&nofb=1&ipt=4a8b657f6cf45ebf977e55edd431e5cfa55baac173dfb50a61ec1f362ce2c4b3",
  },
  {
    title: "Cybersecurity Fundamentals",
    emoji: "🛡️",
    author: "Michael Brown",
    description: "Learn to protect systems against modern security threats.",
    keywords: [
      "cybersecurity",
      "network security",
      "encryption",
      "threat modeling",
    ],
    content:
      "As our world becomes more connected, cybersecurity is more important than ever. This article breaks down key concepts such as encryption, authentication, and secure network design in clear terms. It introduces threat modeling, common attack vectors, and best practices for defending systems against breaches. With practical tips for developers and IT professionals, you'll gain the knowledge to build and maintain more secure applications.",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogin.cyberiom.com%2Fwp-content%2Fuploads%2F2024%2F04%2FCybersecurity-Fundamentals-images-2-scaled.jpg&f=1&nofb=1&ipt=40d30fe1bf40faff3e7e16e94ba8fc0c33414e995d9fb53e0cf9ff6105f89de6",
  },
  {
    title: "Cloud Computing Explained",
    emoji: "☁️",
    author: "Sophia Wilson",
    description: "Understand how cloud platforms work and how to use them.",
    keywords: ["cloud computing", "AWS", "Azure", "DevOps", "infrastructure"],
    content:
      "Cloud computing has revolutionized how we build and deploy software, offering flexibility and scalability for projects of any size. This article explains service models like IaaS, PaaS, and SaaS, and outlines deployment options including public, private, and hybrid clouds. Readers will also learn about major providers such as AWS and Azure, cost considerations, and practical strategies for migrating and managing workloads in the cloud.",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.synergyit.ca%2Fwp-content%2Fuploads%2F2022%2F09%2FCloud-Computing.jpg&f=1&nofb=1&ipt=fd5f03eff2ffa14016beddf625ff00f89c22aefeee4e1c0881bea0079457d009",
  },
];

export default data;
