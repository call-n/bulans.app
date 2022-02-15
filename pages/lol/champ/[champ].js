import {
    Container,
    Image,
    Flex,
    Heading,
    Text,
    Spacer
  } from '@chakra-ui/react';

import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { fetchApi  } from '../../../utils/fetchApi';
import { useRouter } from 'next/router'

export default function Champ(data) {

    const router = useRouter()
    const { champ } = router.query
    const data1 = data.data.champion.data[champ];

  return (
    <>
      <Header />
        <Container 
          maxW={'4xl'} 
          mb="20px"
          w={'full'}
          bg={'gray.900'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          mt="20px"
          >
        <Flex>
        <Flex>
            <Image
            rounded={'xl'}
            alt={'feature image'}
            src={`/data/img/champion/${champ}.png`}
            width="115px"
            height="115px"
            />
        </Flex>
        <Flex flexDirection="column" ml="10px">
            <Flex justify="center" align="end">
              <Heading fontSize="30px" mr="10px">{data1.id}</Heading>
              <Text fontSize="20px">{data1.title}</Text>
            </Flex>
            <Spacer />
            <Flex>
            <Image src={`/data/img/passive/${champ}_Passive.png`} width="45px" height="45px" rounded={'lg'} m='2px' alt="Item" border="1px" borderColor="gray.800" />
            <Image src={`/data/img/spell/${champ}Q.png`} width="45px" height="45px" rounded={'lg'} m='2px' alt="Item" border="1px" borderColor="gray.800"/>
            <Image src={`/data/img/spell/${champ}W.png`} width="45px" height="45px" rounded={'lg'} m='2px' alt="Item" border="1px" borderColor="gray.800"/>
            <Image src={`/data/img/spell/${champ}E.png`} width="45px" height="45px" rounded={'lg'} m='2px' alt="Item" border="1px" borderColor="gray.800"/>
            <Image src={`/data/img/spell/${champ}R.png`} width="45px" height="45px" rounded={'lg'} m='2px' alt="Item" border="1px" borderColor="gray.800"/>
            </Flex>
        </Flex>
        </Flex>
    </Container>
    <Footer />
    </>
  )
}

// This gets called on every request
export async function getServerSideProps({params: { champ }}) {
  
  const data = await fetchApi(`http://localhost:3000/api/champ/${champ}`);
 
  // Pass data to the page via props
  return { props: { data } }
}