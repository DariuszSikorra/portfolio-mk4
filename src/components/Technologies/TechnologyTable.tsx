import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";

const technologyData = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind/MUI",
      "jQuery",
      "Vite",
      "Zustand",
      "React-Router",
      "React-Select",
      "React-Hook-Form",
    ],
  },
  {
    category: "Backend",
    technologies: ["Django", "Python", "Node.js", "Nest.js", "Express.js"],
  },
  {
    category: "DevOps",
    technologies: [
      "Docker",
      "Kubernetes",
      "Azure",
      "AWS",
      "Datadog",
      "Swagger",
      "Puppeteer",
      "Webpack",
    ],
  },
  {
    category: "APIs & Middleware",
    technologies: ["REST", "GraphQL (Apollo)", "Socket.io", "WebSockets"],
  },
  { category: "Authentication", technologies: ["Keycloak", "RocketChat"] },
  { category: "State Management", technologies: ["Redux Toolkit", "Zustand"] },
  { category: "Testing & CI", technologies: ["Jest", "Cypress", "GitHub CI"] },
  {
    category: "Design & Collaboration",
    technologies: ["Figma", "Scrum (Agile)"],
  },
  {
    category: "Other",
    technologies: [
      "Microservices",
      "Web components",
      "External hosting solutions",
    ],
  },
];

const TechnologyTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 800, margin: "auto", mt: 4, borderRadius: 2 }}
    >
      <Typography variant="h6" align="center" sx={{ mt: 2, mb: 1 }}>
        Technologies I Work With
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Technologies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {technologyData.map((category, index) => (
            <TableRow key={index}>
              <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                {category.category}
              </TableCell>
              <TableCell>{category.technologies.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TechnologyTable;
