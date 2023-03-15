import {Flex} from '@chakra-ui/react';
import { extendTheme, ChakraBaseProvider } from '@chakra-ui/react'
import ChatWindow from './ChatWindow';
import cat from './assets/1.png';

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
        <ChatWindow userId="1" />
        <div className='cat' style={{ textAlign: "center"}}>
          <img src={cat} alt="" />
          <p> 谁是本群最可爱的女生 ？</p>
          <p> 啊, 原来是董</p>
        </div>
      </Flex>
    </ChakraBaseProvider>
  )
}

export default App;