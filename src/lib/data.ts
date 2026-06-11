export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
  image: string;
  features?: string[];
};

export const projects: Project[] = [
  {
    slug: "video-call-app",
    title: "Video Call Application",
    description:
      "A real-time video calling platform enabling seamless audio and video communication between users.",
    longDescription:
      "This project is a real-time video calling web application built to provide secure and high-quality peer-to-peer communication. It allows users to join virtual rooms, initiate video and audio calls, and communicate with low latency. The application uses WebRTC for media streaming and Socket.IO for signaling and real-time communication. It features camera and microphone controls, responsive UI design, and efficient handling of user connections and disconnections for a smooth calling experience across devices.",

    tags: [
      "React.js",
      "Tailwind Css",
      "WebRTC",
      "Socket.IO",
      "Node.js",
      "Express.js",
      "Jwt",
      "Mongodb",
    ],
    links: {
      demo: "https://virtualcall.netlify.app",
      github:
        "https://github.com/himan-10/VCALL-Real-Time-Video-Conferencing-Web-Application.git",
    },
    image: "/videocall.png",
    features: [
      "Real-time peer-to-peer video and audio communication",
      "WebRTC media streaming with Socket.IO signaling",
      "Camera and microphone toggle controls",
      "Responsive user interface across mobile and desktop devices",
      "Efficient handling of user connections and room entries",
    ],
  },

  {
    slug: "block-stay",
    title: "Block Stay - Room & PG Finder Platform",
    description:
      "A full-stack room and PG finder platform with role-based dashboards, secure authentication, online payments, and property management",
    longDescription:
      "Block Stay is a comprehensive room and PG finder platform developed using the MERN stack. The application provides dedicated dashboards for Admin, Owners, and Users, enabling seamless management of property listings, bookings, and user activities. It features secure authentication using JWT and Firebase Authentication, role-based authorization, online payments through Razorpay, and automated email notifications using Nodemailer. The backend is built with Node.js and Express.js, while MongoDB manages data for users, bookings, and room or PG listings. The platform offers a responsive and user-friendly experience for discovering, comparing, and booking rooms and PG accommodations",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      " Razorpay",
      "JWT",
      "Node.js",
      "Express.js",
    ],
    links: {
      demo: "https://block-stay-1.vercel.app",
      github: "https://github.com/himan-10/Block-Stay.git",
    },
    image: "/BlockStay.png",
    features: [
      "Role-based dashboards for Admin, Owners, and Users",
      "Secure authentication with Firebase and JWT",
      "Room and PG listing management system",
      "Online booking and payment integration using Razorpay",
      "Email notifications and alerts using Nodemailer",
    ],
  },
  {
    slug: "stayindia-booking",
    title: "StayIndia - Hotel Booking Platform",
    description:
      "A production-level MERN stack hotel and apartment booking platform with JWT authentication, role-based access control, booking management, and a responsive user interface.",

    longDescription:
      "StayIndia is a full-stack hotel and apartment booking application built using the MERN stack. The platform allows users to search, explore, and reserve luxury apartments and hotels across India. It includes secure JWT authentication, role-based access control, booking management, admin dashboards, and a modern responsive UI built with React, Vite, and Tailwind CSS. The application follows production-level security practices including password hashing, Helmet, Rate Limiting, and CORS protection.",

    tags: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    links: {
      demo: "https://stayindiahp.netlify.app/",
      github:
        "https://github.com/himan-10/Stayindia-booking-mern-HOTEL-BOOKING-.git",
    },

    image: "/StayIndia.png",

    features: [
      "Secure JWT Authentication and Authorization",
      "Hotel and Apartment Search with Filtering",
      "Role-Based Admin Dashboard",
      "Booking Request and Management System",
      "Responsive UI with Tailwind CSS and Vite",
    ],
  },
];
