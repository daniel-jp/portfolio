import { ArrowSquareOut } from '@phosphor-icons/react';


export default function PortfolioProps(){
  
  const portfolioProps =[
    { id: 1,
      titlec: 'FD-GROUP',
      textc: 'created with React, Nodejs and MongoDB',
      iconc: ArrowSquareOut ,
      imgc:"../../assets/cardImg/Card1.png",
      href:"https://www.fdgroup.company/"
    },
    { id: 2,
      titlec: 'ACHAHADA',
      textc: 'created with React, Nodejs and MongoDB',
      iconc: ArrowSquareOut,
      imgc:"../../assets/cardImg/Card2.jpeg",
      href:"https://achahada-ubt.vercel.app/"
    }
    ,
    { id: 3,
      titlec: 'HOUSE RENTAL',
      textc: 'created with React, Nodejs and MongoDB',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/Card3.png",
      href:"https://meulugar.vercel.app/"
    }, 
    { id: 4,
      titlec: 'SERIES & MOVIES',
      textc: 'created with js + Vite, Html and Css,  ',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/Card4.jpg",  
      href:"https://daniel-jp.github.io/Links-Aggregator/"
    },
    { id: 5,
      titlec: 'CRUD',
      textc: 'created with Angular, SpringBoot and Mysql',
      iconc:ArrowSquareOut, 
      imgc:"../../assets/cardImg/Card5.png",
      href:"https://github.com/daniel-jp/angular-springBoot"
    }
    ,
    { id: 6,
      titlec: 'REST-API & DTO',
      textc: 'created with SpringBoot, Mysql and POSTMAN',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/cardApi.jpeg",
      href:"https://github.com/daniel-jp/SpringREST_API"
    }
  ]
  return portfolioProps;
}