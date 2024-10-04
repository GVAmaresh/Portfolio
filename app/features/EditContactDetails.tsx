import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useColor } from "../ColorContext";
import { RootState } from "@/redux/store";
import { iconMapping } from "@/components/Others/IconType";
import { addContactMap } from "@/redux/redux/contactDetails";

export default function EditContactDetails() {
  const { theme } = useColor();
  const { map: reduxMap } = useSelector((state: RootState) => state.contact);
  const [mapEntries, setMapEntries] = useState<string>("");

  useEffect(() => {
    setMapEntries(reduxMap);
  }, [reduxMap]);

  const handleEntryChange = (value: string) => {
    setMapEntries(value);
  };
  const [saveData, setSaveData] = useState<boolean>(false);
  const handleSaveClick = () => {
    setSaveData(true);
    setTimeout(() => {
      setSaveData(false);
    }, 3000);
  };
  const IconComponent = iconMapping["save"];
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(saveData);
    if (saveData) {
      console.log(mapEntries);
      dispatch(addContactMap(mapEntries));
    }
  }, [saveData, dispatch]);

  return (
    <div className="p-4">
      <div className="flex gap-3">
        <div
          className="font-bold text-base md:text-2xl mt-3"
          style={{ color: theme.heading }}
        >
          Contact
        </div>
        <div
          className={`p-4 w-fit rounded-lg flex gap-2 cursor-pointer`}
          style={{
            boxShadow: theme.boxShadow,
            backgroundColor: saveData ? "green" : "transparent"
          }}
          onClick={handleSaveClick}
        >
          <div className="" style={{ color: theme.subContent }}>
            Save
          </div>
          <div className="mt-1">
            <IconComponent color={theme.logo} size={20} />
          </div>
        </div>
      </div>
      <div className="ml-3 mt-2">
        {" "}
        <div className="mb-3" style={{ color: theme.subContent }}>
          Map
        </div>
        <div className="w-full md:w-1/2">
          <TextField
            value={mapEntries}
            onChange={(e) => handleEntryChange(e.target.value)}
            variant="outlined"
            label="Map"
            className="mb-2"
            fullWidth
            multiline
          />
        </div>
      </div>
    </div>
  );
}
