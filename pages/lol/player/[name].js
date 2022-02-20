import Image from 'next/image'
import { fetchApi  } from '../../../utils/fetchApi';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Matchinfo from '../../../components/MatchInfo'

import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Flex
  } from '@chakra-ui/react';


export default function Summoner({dataPlayer, dataRanked}) {
    const data1 = dataPlayer.names;
    const rank = dataRanked.ranked;
   
    console.log(data1);
  return (
    <>
        <Header />
        {data1.id == null && <h1>Player not found</h1>}
        {data1.id &&
        <Center py={6}>
            <Box
                maxW={'700px'}
                w={'full'}
                bg={'gray.900'}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                size={'xl'}
                src={`/data/img/profileicon/${data1.profileIconId}.png`}
                alt={'Avatar Alt'}
                mb={4}
                pos={'relative'}
                _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                {data1.name}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                Level: {data1.summonerLevel}
                {<RankedInfo rank={rank}/>}
                </Text>
                
                <Matchinfo name={data1.name} />
            </Box>
            </Center>
}
        <Footer />
    </>
  )
}

const RankedInfo = (rank) => {
  let data = rank.rank;
  let content = 'Unranked';

  const ranked = data.find(element => {
    var queueType = element.queueType; 
    
    if(queueType === 'RANKED_SOLO_5x5'){
        return element;
    }
  })

  if(ranked){
    content =
      <Flex>
        {ranked.tier}.
        {ranked.rank}.
        {Math.round(ranked.wins/(ranked.wins+ranked.losses)*100)}%
      </Flex>
  }
  return(
    <>
      {content}
    </>
  );
}

// This gets called on every request
export async function getServerSideProps({params: { name }}) {
  
  const dataPlayer = await fetchApi(`http://localhost:3000/api/player/${name}`);
  const dataRanked = await fetchApi(`http://localhost:3000/api/ranked/${name}`);
 
  // Pass data to the page via props
  return { props: {
                dataPlayer,
                dataRanked
            },
        };
}