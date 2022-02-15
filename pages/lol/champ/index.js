import Image from 'next/image'
import { fetchApi  } from '../../../utils/fetchApi';
import { Flex, Link, Grid, GridItem, Container, Box, Skeleton, Heading, Text } from '@chakra-ui/react';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { useState, useEffect } from 'react'

export default function Champions() {

    const url = `http://localhost:3000/api/champ`;
    const [match, setMatch] = useState(null);
    
    let content = <Skeleton height='50px'>loading...</Skeleton>;

    useEffect(() => {
        fetchApi(url)
        .then(res => setMatch(Object.keys(res.champion)))
    }, [url])

 
    console.log(match);

    if(match){
      content = 
    <>
      <Header />
        <Container
        maxW={'4xl'} 
        mb="20px"
        w={'full'}
        p={6}
        textAlign={'center'}
        borderBottom="1px" 
        borderColor="gray.500"
        >
          <Flex
            textAlign={'left'}
            maxW={'4xl'} 
            flexDirection={'column'}
            >
            <Heading mb='10px'>League Champions</Heading>
            <Text>Discover all champion builds and runes</Text>
          </Flex>
        </Container>
        <Container 
          maxW={'4xl'} 
          mb="20px"
          w={'full'}
          bg={'gray.900'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          >
          <Grid templateColumns='repeat(8, 1fr)' gap={6}>
              {match.map((champ) => 
              <GridItem key={champ}>
                <Link href={`/lol/champ/${champ}`}>
                    <Flex flexDirection="column" align="center">
                      <Box>
                      <Image src={`/data/img/champion/${champ}.png`} width={'70'} height={'70'} alt={champ} />
                      </Box>
                      {champ}
                    </Flex>
                </Link>
              </GridItem>
              )}
            </Grid>
        </Container>
      <Footer />
    </>
  }

  return (
    <>
        {content}
    </>
  );
}

export async function getServerSideProps() {
  
    const data = await fetchApi(`http://localhost:3000/api/champ`);
   
    // Pass data to the page via props
    return { props: { data } }
  }