const ProjectsData = [
  {
  id: 1,
  title: "Role-Based Event Management System",

  shortDescription:
    "A secure full-stack event management platform with role-based access control, built using Spring Boot and React.",

  overview: `
The Role-Based Event Management System is a full-stack web application designed
to simplify event creation, management, and booking for colleges and organizations.
It provides a centralized system where administrators can manage events efficiently,
while users can securely browse and register for events.

The system ensures secure authentication using JWT and implements strict
role-based authorization to control access between Admin and User roles.
  `,

  myRole: `
I independently designed and developed the complete backend and frontend
architecture of the system. I implemented secure authentication,
role-based authorization, event management APIs, and integrated the frontend
with RESTful backend services.

I structured the backend using a layered architecture (Controller → Service → Repository)
and ensured proper exception handling and validation mechanisms.
  `,

  architecture: `
The backend follows a clean layered architecture:
- Controller Layer: Handles HTTP requests and responses
- Service Layer: Contains business logic
- Repository Layer: Handles database interaction using JPA

Authentication is handled using JWT tokens to maintain stateless sessions.
The frontend communicates with backend REST APIs using secure token-based requests.
  `,

  image: "/images/eventmanagement-3.png",

  gallery: [
    "/images/eventmanagement-1.png",
    "/images/eventmanagement-2.png",
    "/images/eventcontroller.png"
  ],

  features: [
    "JWT-based authentication system",
    "Role-based access control (Admin / User)",
    "Admin dashboard for event management",
    "Event booking functionality",
    "Secure REST APIs",
    "CRUD operations for events and users",
    "Database normalization using MySQL"
  ],

  tech: [
    "React.js",
    "JavaScript",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "MySQL"
  ],

  liveUrl: "https://your-live-demo-link.com",
  githubUrl: "https://github.com/yourusername/event-management-system",

  videoDemo: "", // optional later
}
,
  {
    id: 2,
    title: "Employee Payroll Management System",
    description:
      "Backend-focused payroll system with employee salary processing and CRUD operations.",
    image: "/images/eventcontroller.png",
     gallery: [
      "/images/eventmanagement-1.png",
      "/images/eventmanagement-2.png",
      "/images/eventcontroller.png",
    ],
    features: [
      "Salary calculation",
      "CRUD operations",
      "Database normalization",
    ],
    tech: ["Spring Boot", "Hibernate", "MySQL"],
  },
  {
    id: 3,
    title: "E-Commerce Application",
    description:
      "Full-stack e-commerce platform with authentication, cart system and order management.",
    image: "/images/ecom-1.png",
    gallery: ["/images/ecom-1.png", "/images/ecom-2.png"],
    features: [
      "User authentication",
      "Cart & order management",
      "REST API integration",
    ],
    tech: ["React.js", "Spring Boot", "MySQL"],
  },
  {
  id: 4,
    title: "Portfolio Wesite",
    description:
      "Full-stack e-commerce platform with authentication, cart system and order management.",
    image: "/images/portfilo-1.png",
    gallery: ["/images/portfilo-1.png", 
        "/images/portfilo-2.png",
        "/images/portfilo-3.png",
    ],
    features: [
      "UI&UX",
      "Cart & order management",
      "REST API integration",
    ],
    tech: ["React.js", "Tailwind"],
  },
];

export default ProjectsData;
