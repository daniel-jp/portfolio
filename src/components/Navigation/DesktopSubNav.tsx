import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react';

interface NavItem {
  name: string;
  subName?: string;
  path?: string;
}
const DesktopSubNav = ({ name,subName, path }: NavItem) => {
  return (
    <Box
      as="a" href={path}
      role={'group'} p={2}
      display={'block'}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.100', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {name}
          </Text>
          <Text fontSize={'sm'}>{subName}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}
export default DesktopSubNav