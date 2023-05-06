import { useState, useEffect } from "react";

import { Modal, ModalContent, ModalCloseButton } from "@components/Modal";

import Form from "./Form";

type LeavePageProps = {
  country: string;
  city: string;
};

export default ({ country, city }: LeavePageProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        setOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Modal open={open}>
      <ModalContent
        width={500}
        maintainDimentions={true}
        css={{
          borderRadius: "20",

          backgroundColor: "$form-bg",

          padding: "25px",

          overflow: "initial",
        }}
      >
        <ModalCloseButton
          onClick={() => setOpen(false)}
          css={{
            "*": {
              color: "#3ea8be",
            },

            "&:hover": {
              backgroundColor: "#bceaf3",
            },

            "&:focus": {
              boxShadow: "0px 0px 0px 2px #66ccdf",
            },
          }}
        />

        <Form country={country} city={city} setOpen={setOpen} />
      </ModalContent>
    </Modal>
  );
};
