import { Montserrat } from "@next/font/google";

import Author from "./components/Author";
import Tips from "./components/Tips/Tips";
import { Container, Title, SubTitle, Text } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
  <Container>
    <Title className={montserrat.className}>3 Dicas caseiras para...</Title>

    <SubTitle className={montserrat.className}>
      Ajudar você a cuidar de sua pele!
    </SubTitle>

    <Text className={montserrat.className}>
      Já pensou em preparar seus próprios remédios caseiros e produtos de beleza
      sem desperdício? Aqui está uma lista de 3 segredinhos antienvelhecimento à
      base de plantas, orgânicos e naturais que são uma alternativa para os
      cremes anti-rugas.
    </Text>

    <Author />

    <Tips
      title="1. Lave seu rosto com mel"
      content={{
        "": [
          "Sim, isso mesmo, você não leu errado - “lave seu rosto com mel” eu disse.",
          "Mas doutora porque lavar o rosto com mel ajudaria a melhorar as rugas e linha finas do meu rosto? Siga os benefícios abaixo!",
        ],

        "Benefícios:": [
          "Hidratação: O mel é um umectante natural, o que significa que ajuda a reter a umidade na pele, mantendo-a hidratada e macia.",
          "Propriedades antioxidantes: O mel contém antioxidantes, que ajudam a proteger a pele dos danos causados pelos radicais livres, responsáveis pelo envelhecimento precoce da pele.",
          "Ação antibacteriana: O mel tem propriedades antibacterianas e antifúngicas, o que pode ajudar a prevenir ou tratar acne e outras infecções da pele.",
          "Suavização da pele: O mel pode ajudar a suavizar a pele, melhorando sua textura e reduzindo a aparência de rugas finas.",
        ],

        "Modo de uso:": [
          "1. Comece lavando as mãos com água e sabão para evitar a transferência de sujeira e bactérias para o rosto.",
          "2. Escolha um mel puro e orgânico, sem aditivos ou conservantes adicionados, para obter os benefícios máximos para a pele. Certifique-se de que o mel esteja em uma consistência líquida o suficiente para aplicá-lo no rosto.",
          "3. Umedeça o rosto com água morna para abrir os poros e facilitar a limpeza.",
          "4. Aplique uma quantidade generosa de mel nas mãos e espalhe suavemente sobre o rosto, evitando a área dos olhos.",
          "5. Massageie o mel em movimentos circulares suaves por cerca de 1 a 2 minutos, para que os nutrientes penetrem na pele e o mel ajude a remover a sujeira e o excesso de oleosidade.",
          "6. Deixe o mel na pele por mais 1 a 2 minutos para que os antioxidantes possam agir na pele.",
          "7. Enxágue o rosto com água morna, garantindo que todo o mel seja removido.",
          "8. Seque o rosto suavemente com uma toalha limpa e macia.",
          "9. Siga com o seu hidratante e protetor solar habituais para manter a pele saudável e protegida.",
        ],

        "Cuidados:": [
          "Lembre-se de que, embora o mel possa trazer todos esses benefícios para a pele, pode não ser adequado para todos os tipos de pele.",
          "É sempre uma boa ideia testar em uma pequena área da pele antes de usar o mel em todo o rosto.",
          "Se você tiver alguma reação adversa, interrompa o uso imediatamente.",
        ],

        "Curiosidade:": [
          "Até mesmo a Cleópatra, a lendária rainha do Egito, utilizava banhos de leite e mel para se ter todos os benefícios que o mel pode proporcionar para a pele.",
        ],
      }}
    />

    <Tips
      title="2. Bálsamo de Hórus"
      content={{
        "": [
          "Há muito tempo, no antigo Egito, acreditava-se que os deuses estavam presentes em todas as coisas, desde o sol escaldante até as águas tranquilas do Rio Nilo, os faraós, como governantes divinos, eram responsáveis por manter a ordem e a prosperidade do reino, mas também eram obrigados a cuidar do bem-estar de seu povo.",
          "Isso incluía a saúde e a beleza da pele, algo considerado extremamente importante na época.",
          "Conta a lenda que o próprio deus Hórus teria concedido a receita de uma mistura mágica aos faraós do Egito antigo, capaz de curar doenças de pele, reduzir rugas e manchas, e deixar a pele com uma aparência radiante e jovem.",
          "Essa mistura era conhecida como 'Bálsamo de Hórus' e era feita com ingredientes naturais, como café, leite, mel e açafrão em pó.",
          "Ainda hoje, muitas pessoas se interessam por essa antiga receita egípcia e procuram criar seu próprio 'Bálsamo de Hórus' para cuidar da pele de forma natural e eficaz.",
          "Ainda que não possamos provar a existência dessa lenda, muitos acreditam que os segredos de beleza e saúde dos antigos egípcios podem nos ensinar muito sobre cuidados com a pele e bem-estar em geral.",
        ],

        "Benefícios:": [
          "Café: pode ajudar a melhorar a aparência da pele, reduzindo olheiras e inchaço, e também possui propriedades antioxidantes que podem ajudar a prevenir o envelhecimento precoce.",
          "Leite: pode ajudar a hidratar a pele e reduzir a aparência de manchas escuras, além de conter ácido lático, que ajuda a remover células mortas da pele.",
          "Mel: é conhecido por suas propriedades antibacterianas e antioxidantes, podendo ajudar a reduzir a inflamação e prevenir danos celulares.",
          "Açafrão em pó: contém curcumina, um antioxidante que pode ajudar a prevenir danos celulares e reduzir a inflamação, além de ajudar a melhorar a aparência geral da pele.",
        ],

        "Ingredientes:": [
          "1 colher de sopa de pó de café",
          "1 colher de sopa de leite",
          "1 colher de sopa de mel",
          "1/4 colher de chá de açafrão em pó",
        ],

        "Modo de uso:": [
          "1. Misture o pó de café, o leite, o mel e o açafrão em pó em uma tigela pequena até obter uma mistura homogênea.",
          "2. Deixe a mistura descansar por alguns minutos para que os ingredientes se combinem.",
          "3. Enquanto espera, lave o rosto com água morna e seque-o suavemente com uma toalha.",
          "4. Aplique a mistura na pele do rosto, massageando suavemente em movimentos circulares por cerca de 2-3 minutos.",
          "5. Deixe a mistura na pele por mais 10-15 minutos para que os ingredientes possam penetrar na pele e oferecer seus benefícios.",
          "6. Depois de 15 minutos, enxágue bem o rosto com água morna e seque-o suavemente.",
          "Recomenda-se usar essa mistura de 1 a 2 vezes por semana para obter melhores resultados. Lembre-se de fazer um teste de sensibilidade em uma pequena área antes de aplicar a mistura em todo o rosto.",
        ],
      }}
    />

    <Tips
      title="3. Desenvolva um vício em chá verde"
      content={{
        "": [
          "Todo mundo e sua mãe sabem que o chá verde é cheio de antioxidantes, mas o que nem todo mundo sabe é que beber uma xícara de chá verde duas vezes ao dia durante seis meses pode realmente reverter os danos do sol em sua pele.",
          "O chá verde tem altas concentrações de catequina, um antioxidante conhecido por seu efeito antienvelhecimento. Protege a sua pele contra a radiação UV, ajudando assim a prevenir o crescimento de verrugas e manchas da idade. A catequina também tem alguns poderes anti-inflamatórios que ajudam a retardar o aparecimento de rugas.",
          "Se você não gosta do sabor do chá verde, está com sorte, porque pode aplicá-lo topicamente (diretamente na pele) e ainda obter os mesmos benefícios antienvelhecimento!",
        ],
      }}
    />
  </Container>
);
