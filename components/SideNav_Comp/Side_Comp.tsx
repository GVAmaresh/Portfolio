import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function Side_Comp() {
  return (
    <div className="flex-grow lg:flex-grow-0 h-11/12 lg:h-auto rounded-2xl overflow-hidden relative">
      <Accordion className="rounded-3xl overflow-hidden">
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          className="relative rounded-3xl"
        >
          {/* Expand icon positioned absolutely at the top right */}
          <ExpandMoreIcon
            className="absolute top-2 right-2"
            aria-controls="panel1-content"
            id="panel1-header"
          />

          <div className="flex items-center justify-start h-full w-full pl-1 md:pl-6 gap-3">
            <div className="bg-slate-500 h-24 md:h-36 w-32 md:w-32 rounded-2xl"></div>
            <div>
              <div>hyh</div>
              <div>hh</div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="">
            <div className=" border-b-2"></div>
            <div className="flex gap-4">
              <div className="">hh</div>
              <div className="">
                <div className="">hh</div>
                <div className="">hh</div>
              </div>
            </div>
            <div className=" border-b-2"></div>
            <div className="flex gap-3">
              <div className="">facebook</div>
              <div className="">insa</div>
              <div className="">twitter</div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
