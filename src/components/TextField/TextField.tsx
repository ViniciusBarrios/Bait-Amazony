import React, { useState } from "react";

import { Montserrat } from "@next/font/google";

import { Container, Wrapper, Input, Label, Helper } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type TextFieldProps = React.ComponentProps<typeof Input> & {
  label: string;
  name: string;
  placeholder?: string;
  type?: HTMLInputElement["type"];
  css?: React.ComponentProps<typeof Container>["css"];
  helper?: string;
};

export default ({
  label,
  name,
  placeholder = "Digite aqui...",
  type = "text",
  css,
  maxLength,
  helper,
  ...props
}: TextFieldProps) => {
  const [error, setError] = useState("");

  const { height = "55px", ...restCSS } = { ...css };

  return (
    <Container css={{ width: "100%", ...restCSS }}>
      <Wrapper css={{ height: "55px" }}>
        <Input
          name={name}
          type={type}
          autoComplete="off"
          placeholder={placeholder}
          className={montserrat.className}
          css={{
            ...(error && {
              color: "$textField-error !important",
              borderColor: "$textField-error !important",

              caretColor: "$textField-error !important",

              "&::-webkit-input-placeholder": {
                color: "$textField-error !important",
              },

              "&:-moz-placeholder": { color: "$textField-error !important" },
            }),
          }}
          setError={setError}
          maxLength={maxLength}
          {...props}
        />

        <Label
          htmlFor={name}
          id="label"
          css={{
            ...(error && {
              color: "$textField-error !important",
            }),
          }}
          className={montserrat.className}
        >
          {label}
        </Label>
      </Wrapper>

      {helper || error ? (
        <Helper
          className={montserrat.className}
          css={{
            ...(error && {
              color: "$textField-error !important",
            }),
          }}
        >
          {error ? error : helper}
        </Helper>
      ) : null}
    </Container>
  );
};
