import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComp = ({ lesson }) => {

  return (
    <>
      <Accordion
        sx={{
          width: "800px",
          margin: "auto !important",
          backgroundColor: "#6b6f7e33",
          boxShadow: '0px 2px 1px -1px #ffa22d24, 0px 1px 1px 0px #ffa22d24, 0px 1px 3px 0px #ffa22d24'
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "#ffa22d" }}>מה נלמד בשיעור {lesson.lesson}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{
              width: "100%",
              maxWidth: 800,
              bgcolor: "transparent",
              margin: "auto",
            }}
          >
            {lesson.bullets.map((bullet, index) => {
              return (
                <li
                  style={{
                    listStyle: "disc",
                    marginRight: "2rem",
                    color: "#FFF",
                  }}
                  key={index}
                >
                  {bullet}
                </li>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionComp;
