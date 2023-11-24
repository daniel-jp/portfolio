import { Box, Flex, Heading, Image, keyframes, Stack, Text } from '@chakra-ui/react';

'use client'

const testimonials = [
  {
    name: 'Daniel Joaquim Paulino',
    title: 'Hi! it‘s me',
    content:
      'And I’m a Software and Data Engineer',
    avatar:'/public/assets/image/avatar.png',
  },

]



interface TestimonialCardProps {
  name: string
  title: string
  content: string
  avatar: string
  index: number
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, title, content, avatar } = props

  const size = '200px'
  
  const color = 'white'

  const pulseRing = keyframes`
  0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
  
  `
  return (
    <Flex direction={{ base: 'column-reverse', md: 'row' }} 
      justifyContent={'space-between'} align={"center"} >

      <Flex  w="full" direction={'column'} textAlign={'left'} >
        <Heading bgGradient='linear(to-l, #8222AF,#9B19D9, #9B19D9, #386283)' 
                  bgClip='text'>
          <Text fontFamily={'Inter'} fontWeight={'medium'}>
          {title}
          </Text>
          
          </Heading>
        <Text p={2} fontFamily={"'Inter', sans-serif"} fontWeight={"bold"}
        fontSize={['2xl', '2xl', '2xl', '3xl']} pt={{base:2, md:10}} 
        pl={{sm:3, md: 12, lg:16}} as={'span'}  color={"pink.400"}>
          {name}
        </Text>

        <Text as={'span'} fontSize={['1xl', '2xl', '2xl', '3xl']} fontFamily={'Inter'} fontWeight={'medium'}>
          {content}
        </Text>
      </Flex>
      

    <Stack  
      align={"center"} 
      overflow="hidden" w="full" p={4}>

    <Flex
      justify={"center"} h={250}
      w="full" 
      overflow="hidden" m={-4}>
      <Box
        as="div" 
        position="relative" 
        w={size} p={3}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-98%',
          marginTop: '-86%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Image
        src={avatar}
        rounded={"50%"}
        maxH={190}  w={190}  position="absolute" top={"30px"} />
      </Box>
    </Flex>

     
      </Stack>

    </Flex>
  )
}

export default function GridBlurredBackdrop() {



  return (
    <Flex
      textAlign={'center'}
      pt={10} 
      justifyContent={'center'}justifyItems={"center"}
      direction={'column'}
      overflow={'hidden'}>
      
      <Stack w={"full"} spacing={'20'} mt={16} mb={16} mx={'auto'}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </Stack>
     
    </Flex>
  )
}
