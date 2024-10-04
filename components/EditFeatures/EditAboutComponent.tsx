import { useColor } from "@/app/ColorContext";
import { RootState } from "@/redux/store";
import { IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { ITestimonials, IWhatIamDoing } from "@/redux/Interface";

import { MdDelete } from "react-icons/md";
import { addIntroduction, addTestimonials, addWhatIamDoing, addWhatIKnow } from "@/redux/redux/aboutDetails";

export const EditTestimonials = ({saveData}:{saveData:boolean}) => {
  const { theme } = useColor();
  const { testimonials: reduxTestimonials } = useSelector(
    (state: RootState) => state.about
  );
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);

  useEffect(() => {
    setTestimonials(reduxTestimonials || []);
  }, [reduxTestimonials]);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(saveData)
    if (saveData) {
      console.log(testimonials)
      dispatch(addTestimonials(testimonials));
    }
  }, [saveData, dispatch]);

  const handleTestimonialChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index] = {
      ...updatedTestimonials[index],
      [field]: value
    };
    setTestimonials(updatedTestimonials);
  };

  const handleAddTestimonial = () => {
    setTestimonials([
      ...testimonials,
      { photo: "", name: "", company: "", position: "", description: "" }
    ]);
  };

  const handleDeleteTestimonial = (index: number) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };

  return (
    <div className="">
      <div className="mt-6">
        <div
          className="font-semibold text-base mb-2"
          style={{ color: theme.subContent }}
        >
          Testimonials
        </div>
        <div className="flex flex-wrap gap-4">
          {testimonials.map((testimonial, index) => (
            <div className="flex" key={index}>
              <div
                className="flex items-center mb-2 w"
                style={{ boxShadow: theme.boxShadow }}
              >
                <div className="flex-grow">
                  <div className="">
                    <TextField
                      label={`Name`}
                      value={testimonial.name}
                      fullWidth
                      variant="standard"
                      onChange={(e) =>
                        handleTestimonialChange(index, "name", e.target.value)
                      }
                      className="mb-2"
                    />
                  </div>
                  <div className="">
                    <TextField
                      label={`Photo`}
                      value={testimonial.photo}
                      multiline
                      fullWidth
                      variant="standard"
                      onChange={(e) =>
                        handleTestimonialChange(index, "photo", e.target.value)
                      }
                      className="mb-2"
                    />
                  </div>
                  <div className="">
                    <TextField
                      label={`Company`}
                      fullWidth
                      value={testimonial.company}
                      variant="standard"
                      onChange={(e) =>
                        handleTestimonialChange(
                          index,
                          "company",
                          e.target.value
                        )
                      }
                      className="mb-2"
                    />
                  </div>
                  <div className="">
                    <TextField
                      label={`Position`}
                      value={testimonial.position}
                      variant="standard"
                      fullWidth
                      onChange={(e) =>
                        handleTestimonialChange(
                          index,
                          "position",
                          e.target.value
                        )
                      }
                      className="mb-2"
                    />
                  </div>
                  <div className="">
                    <TextField
                      label={`Description`}
                      value={testimonial.description}
                      variant="standard"
                      fullWidth
                      multiline
                      maxRows={12}
                      onChange={(e) =>
                        handleTestimonialChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      className="w-full mb-2"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <IconButton onClick={() => handleDeleteTestimonial(index)}>
                  <MdDelete size={30} color="black" />
                </IconButton>
              </div>
            </div>
          ))}
          <IconButton onClick={handleAddTestimonial} className="" size="small">
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export const EditIntroduction = ({saveData}:{saveData:boolean}) => {
  const { theme } = useColor();
  const { introduction: reduxIntroduction, } = useSelector(
    (state: RootState) => state.about
  );
  
  const [introduction, setIntroduction] = useState<string[]>([]);
  
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(saveData)
    if (saveData) {
      console.log(introduction)
      dispatch(addIntroduction(introduction));
    }
  }, [saveData, dispatch]);

  useEffect(() => {
    setIntroduction(reduxIntroduction);
  }, [reduxIntroduction]);

  const handleAddIntroduction = () => {
    if (
      introduction.length === 0 ||
      introduction[introduction.length - 1].trim() !== ""
    ) {
      setIntroduction([...introduction, ""]);
    }
  };

  const handleIntroductionChange = (index: number, value: string) => {
    const updatedIntroduction = [...introduction];
    updatedIntroduction[index] = value;
    setIntroduction(updatedIntroduction);
  };

  const handleDeleteIntroduction = (index: number) => {
    const updatedIntroduction = introduction.filter((_, i) => i !== index);
    setIntroduction(updatedIntroduction);
  };

  return (
    <div className="">
      <div className="mt-6">
        <div
          className="font-semibold text-base mb-2"
          style={{ color: theme.subContent }}
        >
          Introduction
        </div>
        <div className="flex flex-wrap gap-4">
          {introduction.map((data, index) => (
            <div className="w-full lg:w-1/3 flex items-start" key={index}>
              <TextField
                id={`outlined-multiline-${index}`}
                fullWidth
                multiline
                label={`Para - ${index + 1}`}
                maxRows={12}
                value={data}
                onChange={(e) =>
                  handleIntroductionChange(index, e.target.value)
                }
                className="flex-grow"
              />
              <IconButton
                onClick={() => handleDeleteIntroduction(index)}
                aria-label={`Delete Para ${index + 1}`}
              >
                <MdDelete color="black" />
              </IconButton>
            </div>
          ))}
          <IconButton onClick={handleAddIntroduction}>
            <AddIcon style={{ color: theme.color }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export const EditWhatIKnow = ({saveData}:{saveData:boolean}) => {
  const { theme } = useColor();
  const { whatIKnow: reduxWhatIKnow } = useSelector(
    (state: RootState) => state.about
  );
  const [whatIKnow, setWhatIKnow] = useState<string[]>([]);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(saveData)
    if (saveData) {
      console.log(whatIKnow)
      dispatch(addWhatIKnow(whatIKnow))
    }
  }, [saveData, dispatch]);

  useEffect(() => {
    setWhatIKnow(reduxWhatIKnow || []);
  }, [reduxWhatIKnow]);

  const handleWhatIKnowChange = (index: number, value: string) => {
    const updatedWhatIKnow = [...whatIKnow];
    updatedWhatIKnow[index] = value;
    setWhatIKnow(updatedWhatIKnow);
  };

  const handleAddWhatIKnow = () => {
    setWhatIKnow([...whatIKnow, ""]);
  };

  const handleDeleteWhatIKnow = (index: number) => {
    const updatedWhatIKnow = whatIKnow.filter((_, i) => i !== index);
    setWhatIKnow(updatedWhatIKnow);
  };

  return (
    <div className="mt-6">
      <div
        className="font-semibold text-base mb-2"
        style={{ color: theme.subContent }}
      >
        What I Know
      </div>
      <div className="flex flex-wrap gap-4">
        {whatIKnow.map((item, index) => (
          <div key={index} className="flex items-center mb-2 w-32">
            <TextField
              label={`Item ${index + 1}`}
              value={item}
              variant="standard"
              onChange={(e) => handleWhatIKnowChange(index, e.target.value)}
              className="w-full"
            />
            <div className="">
              <IconButton
                onClick={() => handleDeleteWhatIKnow(index)}
                size="small"
              >
                <MdDelete color="black" size={20} />
              </IconButton>
            </div>
          </div>
        ))}
        <IconButton onClick={handleAddWhatIKnow} size="small" color="primary">
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};



export const EditWhatIamDoing = ({saveData}:{saveData:boolean}) => {
  const { theme } = useColor();
  const { whatIamDoing: reduxWhatIamDoing } = useSelector(
    (state: RootState) => state.about
  );

  const [whatIamDoing, setWhatIamDoing] = useState<IWhatIamDoing[]>([]);

  useEffect(() => {
    setWhatIamDoing(reduxWhatIamDoing || []);
  }, [reduxWhatIamDoing]);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(saveData)
    if (saveData) {
      console.log(whatIamDoing)
      dispatch(addWhatIamDoing(whatIamDoing));
    }
  }, [saveData, dispatch]);

  const handleWhatIamDoingChange = (
    index: number,
    field: keyof IWhatIamDoing,
    value: string
  ) => {
    const updatedItems = [...(whatIamDoing || [])];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    setWhatIamDoing(updatedItems);
  };

  const handleAddWhatIamDoing = () => {
    setWhatIamDoing([
      ...(whatIamDoing || []),
      { logo: "", title: "", description: "" }
    ]);
  };

  const handleDeleteWhatIamDoing = (index: number) => {
    const updatedItems = whatIamDoing?.filter((_, i) => i !== index) || [];
    setWhatIamDoing(updatedItems);
  };

  return (
    <div className="">
      <div className="mt-6">
        <div
          className="font-semibold text-base mb-2"
          style={{ color: theme.subContent }}
        >
          What I Am Doing
        </div>
        <div className="flex flex-wrap gap-4">
          {whatIamDoing?.map((item, index) => (
            <div className="flex" key={index}>
              <div
                className="flex items-center mb-2 w-56"
                style={{ boxShadow: theme.boxShadow }}
              >
                <div className="flex-grow">
                  <TextField
                    label={`Logo URL`}
                    value={item.logo}
                    fullWidth
                    variant="standard"
                    onChange={(e) =>
                      handleWhatIamDoingChange(index, "logo", e.target.value)
                    }
                    className=" mb-2"
                  />
                  <TextField
                    label={`Title`}
                    fullWidth
                    value={item.title}
                    variant="standard"
                    onChange={(e) =>
                      handleWhatIamDoingChange(index, "title", e.target.value)
                    }
                    className=" mb-2"
                  />
                  <TextField
                    label={`Description`}
                    value={item.description}
                    variant="standard"
                    fullWidth
                    multiline
                    maxRows={12}
                    onChange={(e) =>
                      handleWhatIamDoingChange(index, "description", e.target.value)
                    }
                    className="w-full mb-2"
                  />
                </div>
              </div>
              <IconButton onClick={() => handleDeleteWhatIamDoing(index)} size="small">
                <MdDelete color="black"/>
              </IconButton>
            </div>
          ))}
          <IconButton onClick={handleAddWhatIamDoing} size="small">
            <AddIcon style={{ color: theme.color }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
