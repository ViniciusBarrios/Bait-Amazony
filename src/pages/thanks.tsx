import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Montserrat } from "@next/font/google";

import Head from "@infra/Head";

import { formatUncomfortableToText } from "@utils/formatUncomfortableToText";

import Biography from "@components/Biography";
import Bonus from "@components/Bonus";

import { Warning, Container, Title, Text, CTA } from "@styles/pages/thanks";

const montserrat = Montserrat({ subsets: ["latin"] });

type InformationsType = {
  firstName: string;
  email: string;
  uncomfortable?: string[];
};

export default () => {
  const [informations, setInformations] = useState<InformationsType | null>(
    null,
  );

  const {
    query: { name, email },
  } = useRouter();

  useEffect(() => {
    const uncomfortable = localStorage.getItem("uncomfortable");

    if (typeof name === "string" && typeof email === "string") {
      setInformations({
        firstName: `${name.split(" ")[0].charAt(0).toUpperCase()}${name
          .split(" ")[0]
          .toLowerCase()
          .slice(1)}`,
        email,
        uncomfortable:
          uncomfortable && JSON.parse(uncomfortable) instanceof Array
            ? JSON.parse(uncomfortable)
            : null,
      });
    }
  }, [email, name]);

  return (
    <>
      <Head
        title={`${
          informations?.firstName || "Atenção"
        }, não feche ou atualize essa página! (Você pode perder uma oportunidade única)`}
      />

      <Warning>
        <p className={montserrat.className}>
          {informations?.firstName || "Atenção"}, não feche ou atualize essa
          página! (Você pode perder uma oportunidade única)
        </p>
      </Warning>

      <Container>
        <Title className={montserrat.className}>
          Parabéns! Seu livro já está esperando por você, mas antes...
        </Title>

        <Text
          css={{ marginTop: "10px", fontSize: "20px", textAlign: "center" }}
          className={montserrat.className}
        >
          Tenho um recado rapido e importante...
        </Text>

        <Text
          css={{ marginTop: "10px", fontSize: "20px", textAlign: "center" }}
          className={montserrat.className}
        >
          Leia a baixo...
        </Text>

        <Text
          css={{ marginTop: "15px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Antes de tudo quero parabenizar você por adquirir meu livro com “Os 6
          segredos de cuidados com a pele do antigo Egito”...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Também espero que você tenha gostado das 3 dicas que leu!
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Você tomou uma decisão inteligente em querer aprender mais sobre
          cuidados com a pele de forma caseira...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          E acredito que você escolheu adquirir meu livro porque tem algo em
          você que te incomoda…
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Como você tinha me falado antes,{" "}
          {informations?.uncomfortable &&
            formatUncomfortableToText(informations.uncomfortable)}{" "}
          são um incômodo para você...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          E por isso eu gostaria de te perguntar...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Você gostaria de ter uma pele linda sem{" "}
          {informations?.uncomfortable &&
            formatUncomfortableToText(informations.uncomfortable)}{" "}
          em 90 dias ou menos?
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          E lógico sem gastar dinheiro com tratamentos caríssimos...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Bom, se sua resposta foi &quot;Sim&quot; então fique aqui comigo que
          eu quero explicar melhor sobre o que estou falando…
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Junto ao lançamento das 3 dicas para cuidados com a pele que você leu,
          também estou oferecendo uma oportunidade única para as pessoas que
          decidiram adquirir meu livro digital...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Eu Dra. Clara Souza e minha querida amiga Dra. Anjali Mahto...
        </Text>

        <Biography
          name="Dra. Anjali Mahto"
          src="/assets/imgs/anjali-mahto.png"
          biography={[
            "Uma conceituada dermatologista britânica com anos de experiência no Serviço Nacional de Saúde e em clínicas privadas.",
            "Ela escreve regularmente para o Huffington Post, The Guardian e para inúmeras revistas...",
            "É porta-voz da British Skin Foundation e conselheira da Vichy (Empresa de cosméticos) no Reino Unido e na Irlanda...",
            "A Dra. Mahto é uma médica formada em Medicina pela University College London e concluiu sua formação em dermatologia no prestigiado… ",
            "St. John's Institute of Dermatology, no Reino Unido.",
          ]}
        />

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Lançamos a 3 meses atrás um sérum totalmente diferente do que é
          encontrado aqui no Brasil...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Da elaboração até o resultado final foram 18 meses... Fizemos testes
          clínicos e dermatológicos (Não testamos em animais)
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Eu e minha querida amiga Dra. Mahto formulamos o sérum e fizemos uma
          parceria junto...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Com a empresa Amazony (Empresa de cosméticos Francesa) com
          reconhecimento Mundial em tecnologia, líder no segmento de cosméticos
          europeu, com excelência de manipulação e ativos selecionados...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Para a criação do sérum Rosa Amazônica...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          E quero deixar claro para você que esta oferta NÃO é para todos!
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Estou disponibilizando apenas para você...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Porque você provou ser uma pessoa que tem interesse em cuidar de sua
          pele quando adquiriu meu livro com “Os 6 segredos de cuidados com a
          pele do antigo Egito”...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Então, vou lhe fazer uma oferta especial, única e exclusiva que está
          disponível apenas aqui e agora.
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          O que vou compartilhar com você agora irá ajudá-la a ter uma pele sem{" "}
          {informations?.uncomfortable &&
            formatUncomfortableToText(informations.uncomfortable)}
          ...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Pela metade ou menos do tempo que você levaria usando as dicas e os
          segredos que eu te passei...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          E também é claro, você não precisará lembrar todos os dias de fazer e
          usar as dicas que passei...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          E vai por mim como médica, muitas das minhas clientes falam que amam
          minhas dicas, mas é muito difícil de fazer todos os dias...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Porque às vezes não tem os ingredientes em casa...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Ou se esquecem de fazer...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          E foi com esse intuito que decidimos criar o sérum Rosa Amazônica...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Eu não tenho tempo para explicar tudo oque está dentro do sérum em
          detalhes, porque poderíamos ficar aqui por horas...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Mas quero falar de 2 coisas dentro do sérum que vai lhe dar os
          resultados que você procura RAPIDAMENTE...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Primeira: Fórmula feita com 4 ingredientes de altíssima qualidade
          (Rosa Mosqueta, Colágeno Verisol, Ácido Hialurônico e Retinol).
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Segunda: O sérum Rosa Amazônica utiliza nano tecnologia europeia.
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Deixe-me explicar o que são essas 2 coisas...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Utilizamos uma combinação de 4 ingredientes poderosíssimos para o
          rejuvenescimento da pele e para potencializar a absorção de cada
          ingrediente utilizamos nano tecnologia europeia...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Isso é, quebramos todas as partículas do sérum em partículas
          minúsculas para a melhor absorção possível do sérum em seu rosto...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Você também poderá ver os benefícios de cada ingrediente com detalhes
          na página de vendas do sérum Rosa Amazônica...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Mas antes quero te fazer outra pergunta...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Você consegue imaginar como será sua vida quando tiver uma pele linda
          sem{" "}
          {informations?.uncomfortable &&
            formatUncomfortableToText(informations.uncomfortable)}{" "}
          que tanto lhe incomodam?
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Então se você quiser adquirir algum kit do sérum Rosa Amazônica com
          50, 60 ou até 70% de desconto e com frete grátis para todo Brasil...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          E também irei disponibilizar apenas nessa página uma oferta única...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Comprando qualquer kit do sérum Rosa Amazônica você ganhará mais 1
          frasco <strong>GRATUITAMENTE</strong>...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Então, clique no botão abaixo agora mesmo e faça o seu pedido!
        </Text>

        <CTA
          href={process.env.NEXT_PUBLIC_FIRST_OTO_LINK}
          css={{ marginTop: "30px" }}
          className={montserrat.className}
        >
          Eu quero restaurar minha pele!
        </CTA>

        <Text
          css={{ marginTop: "30px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Eu garanto a você que em 90 dias ou menos você não terá mais{" "}
          {informations?.uncomfortable &&
            formatUncomfortableToText(informations.uncomfortable)}{" "}
          em sua pele...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Ou eu mesmo devolverei seu dinheiro sem perguntas ou pegadinhas, essa
          é a prova real que eu confio no que estou oferecendo a você!
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Se você agir agora, também receberá um bônus no valor de R$ 520{" "}
          <strong>GRATUITAMENTE</strong>...
        </Text>

        <Bonus />

        <Text
          css={{ marginTop: "50px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Bom, agora você tem 2 opções...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          A primeira é adquirir o sérum e levar para sua casa com até 70% de
          desconto e com frete grátis...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          E na compra de qualquer kit você ganhará mais 1 frasco totalmente{" "}
          <strong>GRATUITO</strong>... juntamente com um bônus{" "}
          <strong>EXCLUSIVO</strong>, o livro da Dra. Mahto...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Ou a segunda opção que é não adquirir o sérum hoje e talvez comprar em
          outro momento, mas infelizmente eu não poderei te garantir todos esses
          benefícios que você terá comprando hoje...
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Pois como te expliquei, é uma oferta única para essa página que você
          se encontra!
        </Text>

        <Text
          css={{ marginTop: "25px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Não perca a chance de adquirir seu kit o mais rápido e mais fácil do
          que nunca. Clique no botão abaixo agora mesmo!
        </Text>

        <CTA
          href={process.env.NEXT_PUBLIC_FIRST_OTO_LINK}
          css={{ marginTop: "30px" }}
          className={montserrat.className}
        >
          Eu quero restaurar minha pele!
        </CTA>

        <Text
          css={{ marginTop: "30px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Não confie apenas em minha palavra, dê uma olhada no que nossos
          clientes estão dizendo...
        </Text>

        <Biography
          name="Maria"
          src="/assets/imgs/customers/01.png"
          biography={[
            "“Estou simplesmente amando o Sérum Rosa Amazônica!",
            "Eu tenho 52 anos e nunca senti minha pele tão hidratada e revitalizada.",
            "Desde que comecei a usar, tenho notado uma melhora significativa nas linhas finas e manchas, além de sentir minha pele mais firme e macia.",
            "Não consigo imaginar minha rotina de cuidados sem ele agora. Recomendo muito!”",
            "- Maria, 52 anos",
          ]}
        />

        <Biography
          name="Juliana"
          src="/assets/imgs/customers/03.png"
          biography={[
            "“Eu amei o sérum, e quero agradecer a toda equipe pelo atendimento incrivel que recebi!",
            "Eu sempre tive problemas com linhas de expressão na testa, mas depois de usar este produto, minha pele melhorou muito.",
            "Agora eu sinto que pareço mais jovem e confiante do que nunca!”",
            "- Juliana, 38 anos",
          ]}
        />

        <Biography
          name="Ana Lúcia"
          src="/assets/imgs/customers/02.png"
          biography={[
            "“Eu sempre cuidei muito da minha pele, mas com o passar dos anos, comecei a perceber algumas mudanças que me incomodavam bastante, como a perda de firmeza e as manchas de sol.",
            "Foi então que decidi experimentar o Sérum Firmador que eu havia ouvido falar tanto, e posso dizer que estou muito satisfeita com o resultado!",
            "Minha pele está visivelmente mais firme e uniforme, e sinto que recuperei um pouco da juventude perdida.",
            "Além disso, o produto é muito fácil de aplicar e tem um cheirinho delicioso.",
            " Com certeza vou continuar usando e recomendando para minhas amigas da mesma idade!”",
            "- Ana Lúcia, 63 anos",
          ]}
        />

        <Biography
          name="Marissa"
          src="/assets/imgs/customers/06.mp4"
          biography={[
            "“Minha autoestima melhorou porque meu melasma está sob controle...",
            "Está tudo sub controle!",
            "Consigo continuar não usando maquiagem...”",
            "- Marissa, 51 anos",
            "Clique no vídeo acima para assistir o depoimento incrivel da Marissa de 51 anos de idade!",
          ]}
        />

        <Biography
          name="Carla"
          src="/assets/imgs/customers/04.png"
          biography={[
            "“Eu estava começando a perceber o surgimento do temido bigode chinês em meu rosto, e fiquei bastante preocupada.",
            "Foi quando uma amiga me indicou o Sérum Rosa Amazonica, e eu resolvi experimentar. E não é que funcionou mesmo?",
            "Em poucas semanas, eu já comecei a notar uma melhora significativa nas linhas de expressão em torno da minha boca, e o aspecto geral do meu rosto ficou mais luminoso e jovial.",
            "Estou muito satisfeita com os resultados e recomendo o produto para todas as mulheres que desejam manter a pele saudável e bonita!”",
            "- Carla, 30 anos",
          ]}
        />

        <Biography
          name="Carla"
          src="/assets/imgs/customers/05.png"
          biography={[
            "“Eu sempre tive marcas ao redor dos olhos e já tentei de tudo para melhorá-las, mas nada parecia funcionar.",
            "Então, decidi experimentar o Sérum Rosa Amazonica e estou impressionada com os resultados!",
            "As marcas ao redor dos meus olhos estão quase imperceptíveis agora. Além disso, minha pele está muito mais hidratada e saudável. Recomendo muito esse produto!”",
            "- Maria, 44 anos",
          ]}
        />

        <Text
          css={{ marginTop: "30px", fontSize: "18px" }}
          className={montserrat.className}
        >
          Espero de coração que a sua foto e seu relato de transformação estejam
          aqui junto a essas mulheres incriveis daqui alguns meses!
        </Text>

        <CTA
          href={process.env.NEXT_PUBLIC_FIRST_OTO_LINK}
          css={{ marginTop: "30px" }}
          className={montserrat.className}
        >
          Eu quero restaurar minha pele!
        </CTA>
      </Container>
    </>
  );
};
