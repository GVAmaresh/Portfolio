import { IUserDetails } from "@/redux/Interface";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { MdDelete } from "react-icons/md";
import { useColor } from "@/app/ColorContext";

export const Basic_Details = () => {
  const {
    userName,
    birthDate,
    email,
    field,
    github_url,
    leetcode_url,
    linkedin_url,
    location,
    photo,
    phoneNumber
  } = useSelector((state: RootState) => state.user);
  const{theme}=useColor()

  const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);

  useEffect(() => {
    setUserDetails({
      userName,
      birthDate,
      email,
      field,
      github_url,
      leetcode_url,
      location,
      photo,
      linkedin_url,
      phoneNumber
    });
  }, [
    userName,
    birthDate,
    email,
    field,
    github_url,
    leetcode_url,
    location,
    linkedin_url,
    photo,
    phoneNumber
  ]);

  const handleInputChange = (field: keyof IUserDetails, value: string) => {
    setUserDetails((prevDetails) =>
      prevDetails ? { ...prevDetails, [field]: value } : null
    );
  };

  const handleFieldOfInterestChange = (index: number, value: string) => {
    const updatedFields = [...(userDetails?.field || [])];
    updatedFields[index] = value;
    setUserDetails((prevDetails) =>
      prevDetails ? { ...prevDetails, field: updatedFields } : null
    );
  };

  const handleAddField = () => {
    setUserDetails((prevDetails) =>
      prevDetails ? { ...prevDetails, field: [...prevDetails.field, ""] } : null
    );
  };

  const handleRemoveField = (index: number) => {
    const updatedFields = [...(userDetails?.field || [])];
    updatedFields.splice(index, 1);
    setUserDetails((prevDetails) =>
      prevDetails ? { ...prevDetails, field: updatedFields } : null
    );
  };

  const handleSave = () => {
    console.log("Saved User Details: ", userDetails);
  };

  return (
    <div className="p-4">
      {userDetails && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            <div className="w-52">
            <TextField
              label="User Name"
              variant="outlined"
              fullWidth
              value={userDetails.userName}
              onChange={(e) => handleInputChange("userName", e.target.value)}
            />
            </div>
            <div className="w-52">
            <TextField
              label="Email"
              variant="outlined"
              multiline
              fullWidth
              value={userDetails.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            </div>
            <div className="w-52">
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={userDetails.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />
            </div>
            <div className="w-52">
            <TextField
              label="Birth Date"
              variant="outlined"
              fullWidth
              value={userDetails.birthDate}
              onChange={(e) => handleInputChange("birthDate", e.target.value)}
            />
            </div>
            <div className="w-52"><TextField
              label="Location"
              variant="outlined"
              multiline
              fullWidth
              value={userDetails.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
            /></div>
            <div className="w-52">
            <TextField
              label="GitHub URL"
              variant="outlined"
              multiline
              fullWidth
              value={userDetails.github_url}
              onChange={(e) => handleInputChange("github_url", e.target.value)}
            />
            </div>
            <div className="w-52">
            <TextField
              label="Leetcode URL"
              variant="outlined"
              multiline
              fullWidth
              value={userDetails.leetcode_url}
              onChange={(e) =>
                handleInputChange("leetcode_url", e.target.value)
              }
            />
            </div>
          </div>

          <div>
            <div style={{color:theme.subContent}} className="mb-2">Fields of Interest</div>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {userDetails.field.map((fieldValue, index) => (
                <div key={index} className="flex items-center gap-2 w-52">
                  <TextField
                    label={`Field ${index + 1}`}
                    variant="outlined"
                    fullWidth
                    value={fieldValue}
                    onChange={(e) =>
                      handleFieldOfInterestChange(index, e.target.value)
                    }
                  />
                  <IconButton
                    onClick={() => handleRemoveField(index)}
                    color="error"
                  >
                    <MdDelete color="black" size={20} />
                  </IconButton>
                </div>
              ))}

            <IconButton onClick={handleAddField} size="small" color="primary">
              <AddIcon />
            </IconButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
