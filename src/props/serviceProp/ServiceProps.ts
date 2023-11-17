import { Code, Laptop, PenNib } from '@phosphor-icons/react';

export default function ServiceProps() {

  const serviceProp=[
    {
      id:1,
      icon:Code,
      title:"Front-End Developer",
      text:"I develop web applications using JavaScript language, with React and Angular frameworks.",
      button:"Read more"
    
  }, {
    id:2,
    icon:Laptop,
    title:"Back-End Developer",
    text:"I develop web services or REST APIs with java using SpringBoot and testing with Postman and Insomnia.",
    button:"Read more"
  
}, {
  id:3,
  icon:PenNib,
  title:"Designer UI/UX",
  text:"I develop interfaces for web and mobile applications using the Figma tool, implementing them with renowned frameworks such as Tailwind CSS, Chakra UI, and Material-UI.",
  button:"Read more"

}]
   return serviceProp;
 
}

