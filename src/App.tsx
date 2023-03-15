import {Flex} from '@chakra-ui/react';
import { extendTheme, ChakraBaseProvider } from '@chakra-ui/react'
import ChatWindow from './ChatWindow';

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bgColor: '#B3E1DB'
      }
    })
  },
})

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Flex h="95vh" w="100vw" alignItems="center" justifyContent="center">
        <span>1</span>
        <ChatWindow userId="1" />
      </Flex>
    </ChakraBaseProvider>
  )
}

export default App;