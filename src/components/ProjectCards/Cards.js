import * as React from "react";
import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../App";

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.text,
  textTransform: "none",
  borderRadius: "8px",
  display: "flex",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    cursor: "pointer",
    transition: "all 0.25s ease",
  },
  "&:hover .heading": {
    color: theme.palette.primary.highlight,
  },
}));
const Utils = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffb803b1",
  color: theme.palette.primary.light,
  padding: "0.5rem 1rem 0.5rem 1rem",
  margin: "0.25rem",
  borderRadius: "8px",
}));

export default React.forwardRef(function Cards(props, ref) {
  const [hovered, setHovered] = React.useState();
  // props = {heading, desc, stack, link};
  return (
    <motion.div
      style={{ zIndex: 0 }}
      key={props.key}
      initial={{ scale: "90%" }}
      animate={{ scale: "100%" }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.75,
        delay: props.timing * 0.1,
        type: "spring",
        bounce: 0.25,
      }}
    >
      <ProjectCard
        ref={ref}
        sx={{
          margin: {
            lg: "0rem 7.5rem 1rem 5rem",
            md: "1rem 1rem 1rem 0rem",
            xs: "1rem 0rem 1rem 0rem",
          },
          padding: { lg: "0 1rem 0 0", md: 0, xs: 0 },
          flexDirection: { lg: "initial", md: "column", xs: "column" },
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        elevation={hovered ? 5 : 0}
      >
        <Box>
          <CardContent>
            <Typography className="heading" fontWeight={600} variant="h6">
              {props.heading}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">{props.desc}</Typography>
          </CardContent>
          <CardContent sx={{ display: "flex", flexWrap: "wrap" }}>
            {props.stack.map((tool, i) => (
              <Utils key={i}>
                <Typography
                  fontSize={12}
                  fontWeight={600}
                  textTransform="uppercase"
                  // color={hovered ? theme.palette.primary.highlight : "white"}
                  color={"#fff1cd"}
                >
                  {tool}
                </Typography>
              </Utils>
            ))}
          </CardContent>
        </Box>
        <CardMedia
          sx={{
            alignItems: { lg: "center", md: "start", xs: "start" },

            display: "flex",
            marginLeft: { lg: "auto", md: "1rem", xs: "1rem" },
          }}
        >
          <img
            style={{
              borderRadius: "8px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "150px",
              width: "250px",
            }}
            src={props.src}
            alt="/"
          />
        </CardMedia>
      </ProjectCard>
    </motion.div>
  );
});
