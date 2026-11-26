export const PORTFOLIO_PROJECTS = [
  {
    id: "school-mis",
    number: "01) MANAGEMENT SYSTEM",
    titleHighlight: "School MIS",
    titleRest: "Management System",
    featured: true,
    wallpaperKey: "schoolMis",
    alt: "School Management Information System 3D dashboard showcase",
    tech: ["React.js", "JavaScript", "Axios", "JSON Server", "CRUD"],
    description:
      "A modern School Management Information System built with React.js for managing students, courses, fees, certificates, enrollments, and administrative workflows through a responsive and interactive interface.",
    liveUrl: "https://mis-for-school.vercel.app/",
    githubUrl: "https://github.com/humayoonhaider/MIS-FOR-SCHOOL",
  },
  {
    id: "meridian-mdcat",
    number: "02) MEDICAL PREP PORTAL",
    titleHighlight: "Meridian MDCAT",
    titleRest: "Preparation Library",
    featured: false,
    wallpaperKey: "meridianMdcat",
    alt: "Meridian MDCAT medical entrance preparation portal 3D showcase",
    tech: ["React.js", "Cloudflare Workers", "MCQs Engine", "Timed Drills", "Responsive UI"],
    description:
      "Official Meridian MDCAT preparation portal featuring PMDC-aligned verified MCQs, clinical rationales, timed practice drills, structured subject libraries, and secure access-card validation.",
    liveUrl: "https://mdcat.zenvex.workers.dev/",
  },
  {
    id: "aurelia-grand-hotel",
    number: "03) LUXURY HOSPITALITY",
    titleHighlight: "Aurelia Grand",
    titleRest: "Hotel Islamabad",
    featured: false,
    wallpaperKey: "aureliaHotel",
    alt: "Aurelia Grand Hotel luxury hospitality showcase in Islamabad",
    tech: ["React.js", "Modern UI/UX", "Booking Flow", "Responsive Design"],
    description:
      "A refined luxury hotel booking experience in the heart of Islamabad, designed for calm, elegance, and seamless suite exploration with editorial typography and responsive reservation journeys.",
    liveUrl: "https://aureliagrandhotel.vercel.app/",
  },
  {
    id: "nova-robotics",
    number: "04) 3D AI ROBOTICS",
    titleHighlight: "NOVA",
    titleRest: "Cinematic 3D Robotics",
    featured: false,
    wallpaperKey: "novaRobotics",
    alt: "NOVA cinematic 3D AI humanoid robotics interface showcase",
    tech: ["Three.js", "React.js", "WebGL 3D", "Telemetry UI"],
    description:
      "Interactive cinematic 3D AI robotics showcase featuring humanoid autonomous systems, real-time neural telemetry visualization, and futuristic spatial product presentation.",
    liveUrl: "https://novarobots.vercel.app/",
  },
  {
    id: "zenvex-ai",
    number: "05) INTELLIGENT WORKSPACE",
    titleHighlight: "ZENVEX AI",
    titleRest: "Neural Workspace",
    featured: false,
    wallpaperKey: "zenvexAi",
    alt: "ZENVEX AI intelligent neural workspace 3D showcase",
    tech: ["React.js", "Multimodal AI", "Cloudflare Workers", "Live Vision", "Voice UI"],
    description:
      "Elite intelligent workspace powered by the ZENVEX AI Neural Core with fast multimodal reasoning, real-time live vision capabilities, voice synthesis, and persistent authentication.",
    liveUrl: "https://zenvexai.zenvex.workers.dev/",
  },
];

/**
 * Computes clamped 3D card tilt angles (in degrees) from relative pointer position.
 */
export function computeCardTilt(relX, relY, maxDeg = 6) {
  const clampedX = Math.max(0, Math.min(1, relX));
  const clampedY = Math.max(0, Math.min(1, relY));
  const rotateY = (clampedX - 0.5) * 2 * maxDeg;
  const rotateX = (0.5 - clampedY) * 2 * maxDeg;
  return {
    rotateX: Number(rotateX.toFixed(2)),
    rotateY: Number(rotateY.toFixed(2)),
  };
}
