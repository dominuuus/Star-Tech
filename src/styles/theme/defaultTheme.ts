export const defaultTheme = {
  colors: {
    primary: "#09152B", // Cor primária (elementos de destaque, menus)
    primaryHover: '#0D244E', //Hover primário
    secondary: "#213547", // Cor secundária (detalhes, textos secundários)
    tertiary: '#1a202c', // Cor terciária, dos botões de status de progresso dos projetos
    techLeader: "#F3A64B", // Cor de identificação do tech líder
    goldCoin: "#FFC300", // Cor dourada das moedas
    news: "#575D6D", // Cor da barra de notícias
    white: "#FFFFFF", //Branco
    black: "#000000", //Preto
    linkHover: '#646cff', //Hover dos links
    background: 'radial-gradient(circle at 30% 30%,  #07070b 0%,  #0c0d14 35%,  #11131d 55%,  #1b1e2b 100%)',
    mission: {
      achievementBlockMission: "rgba(0, 176, 252, 0.18)", //Cor azul para destaque de recompensas na página de missões
      missionCardHighlighted: "#575D6D", //Cores do card de missão destacado
      missionCardNotHighlighted: "rgba(87, 93, 109, 0.60)", //Cores do card de missão destacado
      coinMission: "#CF5502", //Cor laranja para destaque das moedas na página de missões
      achievementMission: "#613BA6", //Cor roxa para destaque das conquistas e mascotes das missões
    },
    gradients: {
      missionYellowAlert: "linear-gradient(180deg, #FFC300 0%, #B6BD39 100%)", //Card de alerta das missões amarelas na nave
      missionRedAlert: "linear-gradient(180deg, #FF0000 0%, #977171 100%)", //Card de alerta das missões vermelhas na nave
      missionGreenAlert:
        "linear-gradient(180deg, #1b7c0c 0%, #051e0d 100%)", //Card de alerta das missões verdes na nave
      tripulation: "linear-gradient(90deg, #193083 29%, #24b9ca 100%)",
      profileMenu: "linear-gradient(143deg,rgba(6, 27, 61, 1) 8%, rgba(10, 29, 74, 1) 43%, rgba(27, 33, 91, 1) 60%, rgba(31, 24, 77, 1) 75%, rgba(35, 25, 79, 1) 82%, rgba(42, 28, 87, 1) 89%, rgba(42, 28, 89, 1) 97%)",
      planet: "linear-gradient(90deg, #8674A6 0%, #063977 100%)",
      mascotCard: "linear-gradient(90deg, #193083 29%, #24b9ca 100%)",
      bgExplorePage:
        "linear-gradient(90deg, #000000 10%, #000000 22%, #010C1A 36%, #02162F 47%, #031B39 52%, #04244B 62%, #04244C 63%, #052C5C 71%, #053268 77%,  #063977 86%,  #063977 96%,  #063977 100%)",
      bgLoginIn: "radial-gradient(circle at 30% 30%,  #07070b 0%,  #0c0d14 35%,  #11131d 55%,  #1b1e2b 100%)",
    },
    planet: {
      scale1: "#8674A6", // Cor para exibição do planeta - escala 1
      scale2: "#063977", // Cor para exibição do planeta - escala 2
    },
    logo: {
      purple: "#822AE9", // Cor roxa de escala do logo
    },
    gray: {
      light: "#D9D9D9", // Escala de cinza 1 (borda, fundo mais escuro)
      lighter: "#EFEFEF", // Escala de cinza 2 (fundo ainda mais claro)
    },
    status: {
      red: "#DB2F2F", // Fora do prazo ou missão < 50%
      yellow: "#E0EF38", // Atenção, missão entre 50% e 79%
      green: "#38C541", // Missão > 79%
    },
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
  },
  fontSize: {
    small: "0.5rem",
    medium: "0.75rem",
    large: "1rem",
    extraLarge: "1.8rem"
  }
};
