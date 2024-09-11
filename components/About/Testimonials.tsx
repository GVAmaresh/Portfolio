import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
const TestimonialsComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div className="">
        <TriggerButton type="button" onClick={handleOpen}>
          <div className="min-w-96 h-44 bg-gray-800 rounded-3xl p-4 relative overflow-visible">
            <div className="flex gap-6 relative">
              <div
                className="absolute ml-6 w-24 z-50 h-24 -mt-12 rounded-3xl bg-red-500"
                style={{ zIndex: 1000 }}
              ></div>
              <div className="text-white font-bold ml-32">Daniel Lewis</div>
            </div>
            <div className="text-white mt-12 line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              deserunt debitis necessitatibus laboriosam? Iure quos nulla
              recusandae, dolores nesciunt fuga sed assumenda repudiandae,
              architecto molestiae eos unde, nihil veritatis illo.
            </div>
          </div>
        </TriggerButton>
  
        {/* Modal */}
        <Modal
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
          open={open}
          onClose={handleClose}
          slots={{ backdrop: StyledBackdrop }}
          keepMounted
        >
          <ModalContent sx={{ width: 400, backgroundColor:"transparent" }} className=" bg-transparent">
            <div className="bg-gray-800 rounded-3xl p-6">
              <div className="flex gap-6">
                <div className="ml-6 w-24 h-24 -mt-12 rounded-3xl bg-red-500"></div>
                <div className="text-white font-bold">Daniel Lewis</div>
              </div>
              <div className="text-white mt-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                deserunt debitis necessitatibus laboriosam? Iure quos nulla
                recusandae, dolores nesciunt fuga sed assumenda repudiandae,
                architecto molestiae eos unde, nihil veritatis illo.
              </div>
            </div>
          </ModalContent>
        </Modal>
      </div>
    );
  };

export default function Testimonials() {
  return (
    <>
      <div className="">
        <div className=" text-3xl font-bold mt-4 mb-4">Testimonials</div>
      </div>
      <div className="w-full overflow-x-scroll flex gap-2 pt-12">
        {Object.values([1, 2, 3, 4]).map((data, index) => (
          <TestimonialsComponent />
        ))}
      </div>
    </>
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

      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
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
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 0px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
    //   background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    //   border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
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
