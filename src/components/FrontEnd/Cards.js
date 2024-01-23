import * as React from "react";
import Cards, { ProjectDivider } from "../ProjectCards/Cards";
import portfolio from "../../images/portfolio-homepage.png";
import slick from "../../images/slicknspan.png";
import takeover from "../../images/Takeover.png";
import { AnimatePresence } from "framer-motion";
import Showcase from "../3D Modeling/Showcase";
import { Grid } from "@mui/material";

export default function FrontEnd() {
  return (
    <>
      <Showcase />
      <ProjectDivider contents="Projects" />
      <AnimatePresence>
        <Grid container spacing={1} p={0}>
          <Cards
            key={1}
            timing={0}
            heading="Portfolio v1"
            desc="Interactive web experience using Three.js, Blender 3D modeling, GSAP Scroll Triggers, and much more. Previous version of this portfolio."
            stack={[
              "Node",
              "JavaScript",
              "Three.js",
              "WebGL",
              "Next.js",
              "Blender 3D",
            ]}
            src={portfolio}
          />

          <Cards
            key={2}
            timing={1}
            heading="Takeover Pods Blog and Podcasting Application"
            desc="Web app connected to Spotify web API. Allows users to connect to their personal Spotify account and listen to podcasts by 'Takeover Pods' while maneuvering the site. Additionally, users without a premium Spotify account will have access to episode excerpts. "
            stack={[
              "Node",
              "JavaScript",
              "React",
              "MaterialUI",
              "ExpressJS",
              "Figma",
              "RESTful",
              "CRUD",
            ]}
            src={takeover}
          />

          {/* <ProjectDivider contents="School Projects" /> */}

          <Cards
            key={3}
            timing={2}
            heading="Mobile Detailing Service FrontEnd"
            desc="Frontend design and development for Mobile Detailing Service. Bootstrap, Figma, Adobe Photoshop/Express, and GSAP Scroll Triggers."
            stack={[
              "JavaScript",
              "React",
              "Bootstrap",
              "Adobe Photoshop",
              "Framer-Motion",
            ]}
            src={slick}
          />
        </Grid>
      </AnimatePresence>
    </>
  );
}
