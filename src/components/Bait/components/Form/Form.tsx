import { useRef, useState } from "react";
import { CircleSpinner } from "react-spinners-kit";

import Router from "next/router";

import { Montserrat } from "@next/font/google";
import { SubmitHandler, FormHandles } from "@unform/core";
import axios from "axios";

import { notify } from "@libs/notify";

import whatsappMask from "@masks/whatsapp";

import baitFormValidation from "@validations/bait";

import TextField from "@components/TextField";

import {
  Container,
  Column,
  Mockup,
  Title,
  SubTitle,
  Flex,
  Button,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type BaitFormData = {
  name: string;
  whatsapp: string;
  email: string;
};

type FormProps = {
  country: string;
  city: string;
};

export default ({ country, city }: FormProps) => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<BaitFormData> = async (
    formData,
    { reset },
  ) => {
    setLoading(true);

    const valid = await baitFormValidation(formData, formRef);

    if (!valid) return setLoading(false);

    try {
      const uncomfortable = localStorage.getItem("uncomfortable");
      const used_solutions = localStorage.getItem("used_solutions");

      await axios.post("/api/submit", {
        name: formData.name,
        whatsapp: formData.whatsapp,
        email: formData.email,
        country,
        city,
        uncomfortable:
          uncomfortable && JSON.parse(uncomfortable) instanceof Array
            ? JSON.parse(uncomfortable)
                .join(", ")
                .replace(/,([^,]*)$/, " e$1")
            : null,
        used_solutions:
          used_solutions && JSON.parse(used_solutions) instanceof Array
            ? JSON.parse(used_solutions)
                .join(", ")
                .replace(/,([^,]*)$/, " e$1")
            : null,
      });

      notify("Obrigada! Seu livro já está em seu e-mail!", { type: "info" });

      Router.push(
        `/thanks?name=${formData.name.split(" ")[0]}&email=${
          formData.email
        }&whatsapp=${formData.whatsapp}`,
      );

      reset();
    } catch (err: any) {
      notify(err.message || "Algo deu errado");
    }

    setLoading(false);
  };

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      <Column
        css={{
          width: "35%",

          "@bp800": {
            display: "none",
          },
        }}
      >
        <Mockup alt="Livro Digital" src="/assets/imgs/free-book.png" />
      </Column>

      <Column css={{ width: "65%" }}>
        <Title className={montserrat.className}>
          Preencha abaixo para receber seu livro grátis...
        </Title>

        <SubTitle className={montserrat.className}>
          Com os 6 segredos de cuidados com a pele do antigo Egito pouco
          conhecidos para ter uma pele mais saudável e radiante!
        </SubTitle>

        <Flex>
          <TextField
            name="name"
            label="Nome"
            helper="Digite seu nome completo."
          />

          <TextField
            css={{
              width: "85%",
              marginLeft: "15px",

              "@bp500": {
                width: "100%",

                marginTop: "20px",

                marginLeft: 0,
              },
            }}
            name="whatsapp"
            label="Whatsapp"
            helper="Digite seu whatsapp."
            onChange={e => (e.target.value = whatsappMask(e.target.value))}
            maxLength={15}
          />
        </Flex>

        <TextField
          css={{ marginTop: "20px" }}
          name="email"
          label="E-mail"
          helper="Digite seu email."
        />

        <Button
          className={montserrat.className}
          css={{
            ...(loading && {
              opacity: 0.8,

              pointerEvents: "none",
            }),
          }}
        >
          {!loading ? (
            "RECEBER MEU LIVRO"
          ) : (
            <CircleSpinner size={22} color="#ffffff" loading={loading} />
          )}
        </Button>
      </Column>
    </Container>
  );
};
