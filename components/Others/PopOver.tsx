import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

import { IoIosWarning } from "react-icons/io";
import { useColor } from "@/app/ColorContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24
};

export const PopOver = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState<string>("Ohh, Not Here!!");
  const { theme } = useColor();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        setOpen(true);
        setText("You cannot save this page! -- Please use the appropriate methods to store your content.");
    }
    if (event.ctrlKey && event.key === "d") {
        event.preventDefault();
        setOpen(true);
        setText("Bookmarking is disabled! -- Try adding this page to your favorites manually.");
    }
    if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
        setOpen(true);
        setText("Printing is not allowed! -- If you need a copy, consider taking a screenshot.");
    }
    if (event.ctrlKey && event.key === "a") {
        event.preventDefault();
        setOpen(true);
        setText("Select All is disabled! -- You cannot copy content manually or using keyboard");
    }
    if (event.ctrlKey && event.key === "z") {
        event.preventDefault();
        setOpen(true);
        setText("Undo action is disabled! -- Please perform actions carefully.");
    }
    if (event.ctrlKey && event.key === "x") {
        event.preventDefault();
        setOpen(true);
        setText("Cut functionality is disabled! -- You can only copy content manually.");
    }
    if (event.ctrlKey && event.key === "c") {
        event.preventDefault();
        setOpen(true);
        setText("Copying is restricted! -- Please use the context menu for copying.");
    }
    if (event.ctrlKey && event.key === "t") {
        event.preventDefault();
        setOpen(true);
        setText("Opening new tabs is disabled! -- Please navigate using existing links.");
    }
    if (event.ctrlKey && event.key === "y") {
        event.preventDefault();
        setOpen(true);
        setText("Redo action is restricted! -- You may need to redo actions manually.");
    }
    if (event.ctrlKey && event.key === "f") {
        event.preventDefault();
        setOpen(true);
        setText("Search functionality is restricted! -- Please navigate using the available links.");
    }
};

  const handleClose = () => setOpen(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className="">
            <div className=" bg-red-400 flex justify-center w-full py-4">
              <IoIosWarning size={50} />
            </div>
            <div className="text-center font-bold text-2xl py-4">Warning!</div>
            <div className=" mx-10 pb-4 text-center" style={{ color: theme.subContent }}>
              {text.split("--").map((subText, index) => (
                <div key={index}>{subText}</div> 
              ))}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
