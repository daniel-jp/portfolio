import { ArrowSquareOut } from '@phosphor-icons/react';


export default function PortfolioProps(){
  
  const portfolioProps =[
    { id: 1,
      titlec: 'FD-GROUP',
      textc: 'created with React, Nodejs and MongoDB',
      iconc: ArrowSquareOut ,
      imgc:"../../assets/cardImg/Card1.png",
      href:"../../pages/404/Error.tsx"
    },
    { id: 2,
      titlec: 'ACHAHADA',
      textc: 'created with React, Nodejs and MongoDB',
      iconc: ArrowSquareOut,
      imgc:"../../assets/cardImg/Card2.jpeg",
      href:"../../pages/404/Error.tsx"
    }
    ,
    { id: 3,
      titlec: 'HOUSE RENTAL',
      textc: 'created with React, Nodejs and MongoDB',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/Card3.png",
      href:"../../pages/404/Error.tsx"
    }, 
    { id: 4,
      titlec: 'SERIES & MOVIES',
      textc: 'created with Vite, Html and Css,  ',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/Card4.png",
      href:"../../pages/404/Error.tsx"
    },
    { id: 5,
      titlec: 'CRUD',
      textc: 'created with Angular, SpringBoot and Mysql',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/Card5.png",
      href:"../../pages/404/Error.tsx"
    }
    ,
    { id: 6,
      titlec: 'REST-API & DTO',
      textc: 'created with SpringBoot, Mysql and POSTMAN',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/cardApi.jpeg",
       href:"../../pages/404/Error.tsx"
    }
  ]
  return portfolioProps;
}