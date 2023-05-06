import { useRef, useState, useCallback, useEffect } from "react";

import Router from "next/router";

import { Montserrat, Spectral } from "@next/font/google";

import Head from "@infra/Head";

import { notify } from "@libs/notify";

import Questions from "@data/questions.json";

import {
  Container,
  Wrapper,
  Header,
  Title,
  SubTitle,
  Content,
  Counter,
  Question,
  Options,
  Radio,
  Option,
  Button,
  Footer,
  Copyright,
} from "@styles/pages/quiz";

const montserrat = Montserrat({ subsets: ["latin"] });
const spectral = Spectral({ subsets: ["latin"], weight: "600" });

export default () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const total_questions = Questions.length;

  const nextQuestion = useCallback(() => {
    if (selectedOptions.length === 0)
      return notify("Para prosseguir, selecione pelo menos uma opção!");

    localStorage.setItem(
      Questions[currentQuestion].id,
      JSON.stringify(
        selectedOptions.map(
          selectedOption =>
            Questions[currentQuestion].answerOptions[selectedOption].answer,
        ),
      ),
    );

    console.log({
      [Questions[currentQuestion].id]: selectedOptions.map(
        selectedOption =>
          Questions[currentQuestion].answerOptions[selectedOption].answer,
      ),
    });

    if (currentQuestion + 1 !== total_questions) {
      setCurrentQuestion(currentQuestion + 1);

      setSelectedOptions([]);
    } else {
      Router.push("/tips");
    }
  }, [currentQuestion, selectedOptions, total_questions]);

  const isOptionSelected = (index: number) => selectedOptions.includes(index);

  const toggleOption = (index: number) => {
    const isSelected = isOptionSelected(index);
    const answerOptions = Questions[currentQuestion].answerOptions;

    if (answerOptions[index].disableOthers) {
      setSelectedOptions([index]);
    } else if (Questions[currentQuestion].multiple) {
      const updatedSelectedOptions = [...selectedOptions];

      if (isSelected) {
        const indexToRemove = selectedOptions.indexOf(index);

        updatedSelectedOptions.splice(indexToRemove, 1);
      } else {
        for (let i = 0; i < selectedOptions.length; i++) {
          const selectedOptionIndex = selectedOptions[i];
          if (
            answerOptions[selectedOptionIndex].disableOthers &&
            selectedOptionIndex !== index
          ) {
            updatedSelectedOptions.splice(i, 1);
          }
        }

        updatedSelectedOptions.push(index);
      }

      setSelectedOptions(updatedSelectedOptions);
    } else {
      setSelectedOptions([index]);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const { clientHeight } = container.children[0];

    const screenHeight = window.innerHeight;

    if (clientHeight > screenHeight) {
      container.style.alignItems = "flex-start";
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <Head
        title={`Antes de prosseguir responda essas ${total_questions} perguntinhas!`}
      />

      <Wrapper>
        <Header>
          <Title className={montserrat.className}>Antes Responda</Title>

          <SubTitle className={montserrat.className}>
            Para prosseguir responta {total_questions} perguntas
          </SubTitle>
        </Header>

        <Content>
          <Counter className={montserrat.className}>
            Pergunta {currentQuestion + 1} de {total_questions}
          </Counter>

          <Question className={spectral.className}>
            {Questions[currentQuestion].question}
          </Question>

          <Options>
            {Questions[currentQuestion].answerOptions.map(
              ({ answer }, index) => (
                <Option
                  css={{
                    "*": {
                      color: isOptionSelected(index) ? "#71C7D8" : "#9399a0",
                    },
                    borderColor: isOptionSelected(index)
                      ? "#71C7D8"
                      : "#9399a0",
                    background: isOptionSelected(index)
                      ? "#71c7d830"
                      : "transparent",
                  }}
                  key={index}
                  onClick={() => toggleOption(index)}
                >
                  <Radio
                    css={{
                      borderColor: isOptionSelected(index)
                        ? "#71C7D8"
                        : "#9399a0",
                      background: isOptionSelected(index)
                        ? "#71c7d852"
                        : "transparent",
                    }}
                    className={montserrat.className}
                  />

                  <span className={montserrat.className}>{answer}</span>
                </Option>
              ),
            )}
          </Options>

          <Button onClick={nextQuestion} className={montserrat.className}>
            {currentQuestion + 1 !== total_questions ? "Próxima" : "Concluir"}
          </Button>
        </Content>

        <Footer>
          <Copyright className={montserrat.className}>
            &copy; {new Date().getFullYear()} Termos de uso e Políticas de
            Privacidade - Todos os direitos reservados. Este site não faz parte
            nem é endossado pelo Facebook. Facebook é uma marca comerceial da
            Facebook, Inc.
          </Copyright>
        </Footer>
      </Wrapper>
    </Container>
  );
};
