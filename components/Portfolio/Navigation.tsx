import { useColor } from "@/app/ColorContext";
import { IPortfolioComponents } from "@/redux/Interface";
import { RootState } from "@/redux/store";
import clsx from "clsx";
import { styled, css, useMediaQuery } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import { CardMedia, Grid } from "@mui/material";
import Image from "next/image";
import { title } from "process";
import React, { useState } from "react";
import { useSelector } from "react-redux";
// import Navigation from "swiper";
// import EffectCards from "swiper";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
// import Pagination from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/effect-cards";

const Portfolio = ({
  title,
  technologies,
  priority,
  photo,
  liveSite,
  github,
  description,
  category
}: IPortfolioComponents) => {
  const { theme } = useColor();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="mt-4">
        <TriggerButton type="button" onClick={handleOpen}>
          <div className="w-72 h-1/2 md:w-80 lg:w-80 cursor-pointer">
            <CardMedia
              component="img"
              src={photo[1]}
              alt={title}
              height={50}
              className="rounded-xl md:rounded-2xl"
              width={200}
            />
          </div>
        </TriggerButton>
        <div className="pl-4 pt-2">
          <div className="font-bold" style={{ color: theme.heading }}>
            {title}
          </div>
          <div
            className="font-medium text-sm w-72 h-1/2 md:w-80 lg:w-80 line-clamp-2"
            style={{ color: theme.subContent }}
          >
            {description}
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
        keepMounted
      >
        <ModalContent
          sx={{
            width: isMobile ? "90%" : "90%",
            height:"auto",
  
            backgroundColor: "transparent"
          }}
          className="bg-transparent"
        >
          <div className="bg-gray-800 rounded-3xl p-6">
            <div>
              <Swiper
                effect="cards"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={isMobile ? 1 : 3}
                pagination={{ clickable: false }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={10}
                modules={[EffectCards, Pagination]}
                cardsEffect={{
                  perSlideOffset: 4,
                  perSlideRotate: 4,
                  rotate: true,
                  slideShadows: true
                }}
              >
                {photo.map((link, index) => (
                  <SwiperSlide key={index}>
                    <div className="card">
                      <img
                        src={link}
                        alt={`Slide ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "10px"
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex gap-6 mt-4 pl-1 md:pl-6 lg:pl-12">
              <div
                className="text-white font-bold"
                style={{ color: theme.heading }}
              >
                {title}
                <div className="flex flex-col">
                  <div
                    className="text-sm font-normal"
                    style={{ color: theme.subContent }}
                  >
                    {description}
                  </div>
                  <div className=" flex flex-wrap gap-3 mt-3">
                    {category.map((data, index) => (
                      <div
                        className=" mt-1 text-sm font-medium"
                        key={index}
                        style={{ color: theme.subContent }}
                      >
                        <a href={data}>{data}</a>
                      </div>
                    ))}
                  </div>
                  <div className=" flex flex-wrap gap-3 mt-3">
                    {github.map((data, index) => (
                      <div
                        className=" mt-1 text-sm font-bold cursor-pointer"
                        key={index}
                        style={{ color: theme.subContent }}
                      >
                        <span className="inline-block w-2 h-2 bg-slate-500 rounded-full mr-1"></span>
                        <a href={data}>{data}</a>
                      </div>
                    ))}
                  </div>
                  <div className=" flex flex-wrap gap-3 mt-3">
                    {liveSite.map((data, index) => (
                      <div
                        className=" mt-1 text-sm font-bold cursor-pointer"
                        key={index}
                        style={{ color: theme.subContent }}
                      >
                        <span className="inline-block w-2 h-2 bg-slate-500 rounded-full mr-1"></span>
                        <a href={data}>{data}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default function CustomBottomNavigation() {
  const { groups, my_projects } = useSelector(
    (state: RootState) => state.project
  );
  const [groupNumber, setGroupNumber] = useState<number>(0);
  const handleChange = (value: number) => {
    setGroupNumber(value);
  };
  const { theme } = useColor();
  return (
    <div>
      <div className="max-h-full mt-6">
        <div className="flex gap-4" style={{ color: theme.subContent }}>
          {groups.map((data, index) => (
            <div
              className="text-xs md:text-lg cursor-pointer"
              key={index}
              style={{ fontWeight: index === groupNumber ? 800 : 500 }}
              onClick={() => handleChange(index)}
            >
              {data}
            </div>
          ))}
        </div>
        <div className="flex justify-evenly flex-wrap">
          {my_projects.map((data, index) => {
            const isCategoryMatch =
              groupNumber === 0 || data.category.includes(groups[groupNumber]);
            return (
              isCategoryMatch && (
                <Grid key={index} item xs={8} sm={6} md={6} lg={6}>
                  <Portfolio
                    title={data.title}
                    technologies={data.technologies}
                    priority={data.priority}
                    photo={data.photo}
                    liveSite={data.liveSite}
                    github={data.github}
                    description={data.description}
                    category={data.category}
                  />
                </Grid>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC"
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025"
};

const Modal = styled(BaseModal)(`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &.base-Modal-hidden {
    visibility: hidden;
  }
`);

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow: hidden;
    background-color: transparent
    border-radius: 32px;
    padding-top:32px;
    margin-top:-72px;
    border: 0px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};

      ${
        theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"
      };
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const TriggerButton = styled("button")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? grey[900] : "transparent"};
    border: 0px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      //   background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      //   border-color: ${theme.palette.mode === "dark"
        ? grey[600]
        : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px
        ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
      outline: none;
    }
  `
);
