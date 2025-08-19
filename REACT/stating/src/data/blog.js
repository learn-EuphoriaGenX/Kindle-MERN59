let blogs = [
    {
        "id": 1,
        "name": "tech-trends-2025",
        "title": "Top 10 Tech Trends to Watch in 2025",
        "description": "Explore the most anticipated technology trends that are expected to reshape industries in 2025.",
        "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        "author": "Rounak Sharma",
        "tags": ["Technology", "Future", "Trends"],
        "category": "Technology",
        "likes": 102,
        "comments": [
            {
                "user": "tech_guru",
                "message": "AI is definitely going to lead the way!",
                "date": "2025-07-20T14:22:00"
            }
        ],
        "published": true,
        "views": 1902,
        "reading_time": "6 min",
        "date": "2025-07-20",
        "updated": "2025-07-22"
    },
    {
        "id": 2,
        "name": "beginner-react-guide",
        "title": "A Beginner's Guide to React.js in 2025",
        "description": "Kickstart your React journey with this updated 2025 guide for absolute beginners.",
        "image": "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4",
        "author": "Ankita Verma",
        "tags": ["React", "JavaScript", "Frontend"],
        "category": "Web Development",
        "likes": 89,
        "comments": [],
        "published": true,
        "views": 1540,
        "reading_time": "7 min",
        "date": "2025-07-18",
        "updated": "2025-07-19"
    },
    {
        "id": 3,
        "name": "kubernetes-devops-essentials",
        "title": "Kubernetes Essentials for DevOps Engineers",
        "description": "Master the basics of Kubernetes and container orchestration for DevOps.",
        "image": "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060",
        "author": "Ravi Iyer",
        "tags": ["DevOps", "Kubernetes", "Containers"],
        "category": "DevOps",
        "likes": 72,
        "comments": [
            {
                "user": "cloud_ninja",
                "message": "Very helpful breakdown of pods vs deployments.",
                "date": "2025-07-21T10:10:00"
            }
        ],
        "published": true,
        "views": 998,
        "reading_time": "8 min",
        "date": "2025-07-19",
        "updated": "2025-07-21"
    },
    {
        "id": 4,
        "name": "mental-health-productivity",
        "title": "Mental Health Tips for Developers",
        "description": "Struggling to stay focused? Here are science-backed ways to improve your mental wellness as a coder.",
        "image": "https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff",
        "author": "Priya Nair",
        "tags": ["Productivity", "Health", "Lifestyle"],
        "category": "Lifestyle",
        "likes": 203,
        "comments": [],
        "published": true,
        "views": 2045,
        "reading_time": "5 min",
        "date": "2025-07-15",
        "updated": "2025-07-16"
    },
    {
        "id": 5,
        "name": "ai-vs-humans",
        "title": "Can AI Replace Humans? A 2025 Perspective",
        "description": "With AI reaching new heights, here's what the experts are saying about its role in society and employment.",
        "image": "https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9",
        "author": "Dr. Naveen Kapoor",
        "tags": ["AI", "Future", "Jobs"],
        "category": "Artificial Intelligence",
        "likes": 300,
        "comments": [
            {
                "user": "ml_fan",
                "message": "Balanced and well-researched article!",
                "date": "2025-07-22T08:50:00"
            }
        ],
        "published": true,
        "views": 3210,
        "reading_time": "10 min",
        "date": "2025-07-12",
        "updated": "2025-07-14"
    },
    {
        "id": 6,
        "name": "build-portfolio-mern",
        "title": "Build a Portfolio Website Using the MERN Stack",
        "description": "Learn to create a stunning and responsive portfolio site using MongoDB, Express, React, and Node.js.",
        "image": "https://plus.unsplash.com/premium_photo-1705491760501-e4dad40a1287",
        "author": "Rounak Sharma",
        "tags": ["MERN", "Web Dev", "Portfolio"],
        "category": "Full Stack Development",
        "likes": 160,
        "comments": [],
        "published": true,
        "views": 1785,
        "reading_time": "9 min",
        "date": "2025-07-17",
        "updated": "2025-07-17"
    },
    {
        "id": 7,
        "name": "open-source-journey",
        "title": "How I Started My Open Source Journey",
        "description": "A personal journey into the world of open source—tools, communities, and how to begin.",
        "image": "https://plus.unsplash.com/premium_photo-1690164680142-701cf794a832",
        "author": "Simran Kaur",
        "tags": ["Open Source", "GitHub", "Contributions"],
        "category": "Career",
        "likes": 88,
        "comments": [
            {
                "user": "codeboy",
                "message": "This inspired me to finally open my first PR!",
                "date": "2025-07-23T13:37:00"
            }
        ],
        "published": true,
        "views": 1301,
        "reading_time": "7 min",
        "date": "2025-07-16",
        "updated": "2025-07-18"
    },
    {
        "id": 8,
        "name": "nodejs-error-handling",
        "title": "Node.js Error Handling Best Practices",
        "description": "Avoid the common pitfalls in Node.js error handling and learn professional practices.",
        "image": "https://images.unsplash.com/photo-1592609931041-40265b692757",
        "author": "Kunal Mishra",
        "tags": ["Node.js", "Backend", "Errors"],
        "category": "Backend Development",
        "likes": 99,
        "comments": [],
        "published": true,
        "views": 1170,
        "reading_time": "6 min",
        "date": "2025-07-14",
        "updated": "2025-07-14"
    },
    {
        "id": 9,
        "name": "freelance-vs-job",
        "title": "Freelancing vs Full-time Jobs: What's Better in 2025?",
        "description": "A comparative guide to freelancing and full-time jobs with pros, cons, and insights for developers.",
        "image": "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
        "author": "Megha Arora",
        "tags": ["Career", "Freelance", "Jobs"],
        "category": "Career",
        "likes": 145,
        "comments": [],
        "published": true,
        "views": 1752,
        "reading_time": "8 min",
        "date": "2025-07-10",
        "updated": "2025-07-13"
    },
    {
        "id": 10,
        "name": "mastering-sql-queries",
        "title": "Mastering SQL Queries with Real World Examples",
        "description": "From basic to advanced SQL queries, learn how to manipulate and retrieve data efficiently.",
        "image": "https://images.unsplash.com/photo-1662027044921-6febc57a0c53",
        "author": "Devansh Agarwal",
        "tags": ["SQL", "Database", "Data Science"],
        "category": "Database",
        "likes": 178,
        "comments": [],
        "published": true,
        "views": 1890,
        "reading_time": "9 min",
        "date": "2025-07-11",
        "updated": "2025-07-12"
    }
]

export default blogs;
