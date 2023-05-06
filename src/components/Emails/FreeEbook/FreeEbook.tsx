type FreeEbookProps = {
  firstName: string;
  whatsapp: string;
};

export default ({ firstName = "Vinicius", whatsapp }: FreeEbookProps) => (
  <html>
    {/* eslint-disable-next-line @next/next/no-head-element */}
    <head>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </head>

    <body
      style={{
        fontFamily: "Montserrat, sans-serif",

        color: "#333333",
      }}
    >
      <div style={{ padding: "20px", maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "25px",
            fontWeight: 500,
            color: "#71C7D8",
          }}
        >
          Olá {firstName}…
        </h1>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Aqui é a Dra. Clara Souza e gostaria de parabenizá-la por adquirir meu
          livro digital com os 6 segredos de cuidados com a pele do antigo
          Egito…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Espero que você goste e que aproveite ao máximo as dicas valiosas que
          preparei com carinho para você…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Gostaria de aproveitar este momento para compartilhar um pouco da
          minha história e da minha paixão pela dermatologia e cosmetologia…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Há 15 anos, ingressei na faculdade de dermatologia e fiz
          especialização em cosmetologia…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Desde então, venho me dedicando ao estudo e à pesquisa de produtos e
          técnicas que ajudem as pessoas a cuidar da pele de forma saudável e
          natural…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Durante minha juventude, enfrentei alguns problemas com acnes, o que
          me levou a buscar alternativas naturais e eficazes para cuidar da
          minha pele...
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Acredito que foi essa experiência pessoal que me levou a me apaixonar
          ainda mais pela cosmetologia e a buscar novas soluções para cuidar da
          pele…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Sei que muitas pessoas também passam por dificuldades em relação à
          autoestima e ao cuidado com a pele…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          E é por isso que faço questão de compartilhar meu conhecimento
          gratuitamente…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Afinal, minha missão é ajudar as pessoas a se sentirem mais bonitas e
          confiantes consigo mesmas…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Espero que as dicas do meu livro digital que você adquiri-o sejam
          úteis para você e que possam ajudá-la a cuidar da sua pele de forma
          mais saudável e natural…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Se tiver alguma dúvida ou sugestão, fique à vontade para entrar em
          contato comigo…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Agradeço novamente pela sua confiança e fico à disposição para
          ajudá-la no que for preciso…
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Você pode ter acesso ao livro clicando aqui:{" "}
          <a
            href={process.env.NEXT_PUBLIC_FREE_BOOK_LINK}
            style={{
              fontWeight: 600,
              color: "#71C7D8",
              textDecoration: "underline",
            }}
          >
            Clique Aqui
          </a>
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          Att, Dra. Clara Souza
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            marginTop: "15px",
          }}
        >
          P.S: Também entrarei em contato com você pelo seu WhatsApp{" "}
          <strong
            style={{
              fontWeight: 500,
              color: "#71C7D8",
            }}
          >
            {whatsapp}
          </strong>
          , até logo 😉
        </p>
      </div>
    </body>
  </html>
);
