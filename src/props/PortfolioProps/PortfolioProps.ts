import { ArrowSquareOut, Cake, Code, GlobeHemisphereEast, MapPinLine, RedditLogo } from 'phosphor-react';


export default function PortfolioProps(){
  
  const portfolioProps =[
    { id: 1,
      titlec: 'FD-GROUP',
      textc: 'created with React, Nodejs and MongoDB',
      iconc: ArrowSquareOut ,
      imgc:"../../assets/cardImg/Card1.png",
    },
    { id: 2,
      titlec: 'ACHAHADA',
      textc: 'created with React, Nodejs and MongoDB',
      iconc: ArrowSquareOut,
      imgc:"../../assets/cardImg/Card2.jpeg",
    }
    ,
    { id: 3,
      titlec: 'HOUSE RENTAL',
      textc: 'created with React, Nodejs and MongoDB',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/Card3.png",
    }, 
    { id: 4,
      titlec: 'SERIES & MOVIES',
      textc: 'created with Vite, Html and Css,  ',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/Card4.png",
    },
    { id: 5,
      titlec: 'CRUD',
      textc: 'created with Angular, SpringBoot and Mysql',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/Card5.png",
    }
    ,
    { id: 6,
      titlec: 'REST-API & DTO',
      textc: 'created with SpringBoot, Mysql and POSTMAN',
      iconc:ArrowSquareOut,
      imgc:"../../assets/cardImg/cardApi.jpeg",
    }
  ]
  return portfolioProps;
}