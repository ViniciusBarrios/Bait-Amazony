import { RefObject } from "react";

import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import setError from "./setError";

type Data = {
  name: string;
  whatsapp: string;
  email: string;
};

export default async (data: Data, formRef: RefObject<FormHandles>) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required("Por favor, preencha o campo com seu nome completo.")
        .matches(/^(\w+\s){1,}\w+$/, "Por favor, informe seu nome completo."),
      whatsapp: Yup.string()
        .matches(
          /^\([1-9]{2}\) [9]{0,1}[0-9]{4}-[0-9]{4}$/,
          "Por favor, informe um número de WhatsApp válido.",
        )
        .required("Por favor, preencha o campo com seu whatsapp."),
      email: Yup.string()
        .email("Por favor, informe um email válido.")
        .required("Por favor, preencha o campo com seu email."),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    formRef.current?.setErrors({});

    return true;
  } catch (err) {
    if (err instanceof Yup.ValidationError) return setError(err, formRef);
  }
};
