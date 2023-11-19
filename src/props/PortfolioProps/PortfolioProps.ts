import { ArrowSquareOut } from '@phosphor-icons/react';


export default function PortfolioProps(){
  
  const portfolioProps =[
    { id: 1,
      titlec: 'FD-GROUP',
      textc: 'Created with React + TypeScript + Vite + Chakra-ui',
      iconc: ArrowSquareOut ,
      imgc:"../../assets/cardImg/Card1.png",
      href:"https://www.fdgroup.company/"
    },
    { id: 2,
      titlec: 'ACHAHADA',
      textc: 'Created with Html5 + CSS3 + javaScript',
      iconc: ArrowSquareOut,
      imgc:"../../assets/cardImg/Card2.jpeg",
      href:"https://achahada-ubt.vercel.app/"
    }
    ,
    { id: 3,
      titlec: 'HOUSE RENTAL',
      textc: 'Created with React + TS, Chakra-Ui Nodejs and MongoDB',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/Card3.png",
      href:"https://meulugar.vercel.app/"
    }, 
    { id: 4,
      titlec: 'GAME STREAMS & CHANNELS',
      textc: 'Created with js + Vite + Html5 + Css3,  ',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/Card4.jpg",  
      href:"https://daniel-jp.github.io/Links-Aggregator/"
    },
    { id: 5,
      titlec: 'CRUD',
      textc: 'Created with Angular + SpringBoot + Mysql',
      iconc:ArrowSquareOut, 
      imgc:"../../assets/cardImg/Card5.png",
      href:"https://github.com/daniel-jp/angular-springBoot"
    }
    ,
    { id: 6,
      titlec: 'REST-API & DTO',
      textc: 'Created with SpringBoot + Mysql + POSTMAN',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/cardApi.jpeg",
      href:"https://github.com/daniel-jp/SpringREST_API"
    }
  ]
  return portfolioProps;
}