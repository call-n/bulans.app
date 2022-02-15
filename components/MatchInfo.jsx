import { useEffect, useState } from 'react';
import { fetchApi  } from '../utils/fetchApi';

import {
    Box,
    Flex,
    Text,
    Image,
    Skeleton,
    Heading,
    Spacer
  } from '@chakra-ui/react';

export default function Matchinfo({name}) {
    const theName = encodeURIComponent(name);
    
    const url = `http://localhost:3000/api/match/${theName}`;
    const [match, setMatch] = useState(null);
    let i = 0;
    
    let content = <Skeleton height='50px'>loading...</Skeleton>;

    useEffect(() => {
        fetchApi(url)
        .then(res => setMatch(res))
    }, [url])

    console.log(match);

    if(match){
        content = <>
        {match.matches.map(data => <Lol key="lol" data={data}/>)}
        
     </>   
    }

    return (
        <>
            {content}
        </>
    );
}

const Lol = (data) => {
    const data1 = data.data;
    return(
        <>
        <Flex flexDirection="column" align="center" justify="center" id="lmfao" mb="10px">
            <Flex 
                align="center" 
                justify="center" 
                background={'gray.700'} 
                p='10px'
                rounded={'lg'}
            >
                <Image src={`/data/img/champion/${data1.champInfo[0]}.png`} width={'70px'} height={'70px'} rounded={'lg'} m='2px' border="1px" borderColor="gray.800" alt="Champion"/>

                <Box d="flex" flexDirection="column" ml="5px">
                    <Heading as='h5' size='sm' textAlign="left">
                        {data1.gamemode[1] ? 'Victory' : 'Defeat'}
                    </Heading>
                    <Text fontSize={'xs'} color={'gray.400'} textAlign="left" mb="4px">
                        {data1.gamemode[0]}
                    </Text>
                    <Box d="flex" align="center" justify="center">
                        {data1.summonersId.map(sum => <Image key={sum} src={`/data/img/sumspells/${sum}.png`} width={'25px'} height={'25px'} rounded={'lg'} alt="Summoner spell" border="1px" borderColor="gray.800"/> )}
                    </Box>
                </Box>
                <Flex flexDirection="column" width="100px">
                    <Text letterSpacing="2px">
                        {data1.kda[0]}/
                        {data1.kda[1]}/
                        {data1.kda[2]}
                    </Text>
                    <Flex justify="center">
                        {Math.round((data1.kda[0]+data1.kda[2])/data1.kda[1] * 100) /100}
                        <Box pl="3px">KDA</Box>
                    </Flex>
                </Flex>
                <Flex flexDirection="column">
                    <Flex width="100%">
                        {data1.items.map(item => <Image key={item} src={`/data/img/item/${item}.png`} width={'40px'} height={'40px'} rounded={'lg'} m='2px' alt="Item" border="1px" borderColor="gray.800" /> )}
                    </Flex>
                    <Flex mt="5px">
                        <Flex>
                            <Image key={data1.runePage[0]} src={`/data/img/runes/${data1.runePage[0]}.png`} width={'35px'} height={'35px'} rounded={'lg'} p='2px' alt="Main rune category" />
                            {data1.runePage[1].map(rune => <Image key={rune.perk} src={`/data/img/runes/${rune.perk}.png`} width={'35px'} height={'35px'} rounded={'lg'} p='2px' alt="First Rune" /> )}
                        </Flex>
                        <Spacer />
                        <Flex flexDirection="column">
                            <Flex>
                                <Image key={data1.runePage[2]} src={`/data/img/runes/${data1.runePage[2]}.png`} width={'35px'} height={'35px'} rounded={'lg'} p='2px' alt="Secondary rune category"/>
                                {data1.runePage[3].map(rune => <Image key={rune.perk} src={`/data/img/runes/${rune.perk}.png`} width={'35px'} height={'35px'} rounded={'lg'} p='2px' alt="Second Rune" /> )}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>   
        </Flex>
        </>
    )
}

/*
<Flex flexDirection="column" align="center" justify="center" id="lmfao" mb="10px">
            <Flex 
                align="center" 
                justify="center" 
                background={'gray.700'} 
                p='10px'
                rounded={'lg'}
            >
                <Image src={`/data/img/champion/${match.matches[i].champInfo[0]}.png`} width={'70px'} height={'70px'} rounded={'lg'} m='2px' border="1px" borderColor="gray.800" alt="Champion"/>

                <Box d="flex" flexDirection="column" ml="5px">
                    <Heading as='h5' size='sm' textAlign="left">
                        {match.matches[i].gamemode[1] ? 'Victory' : 'Defeat'}
                    </Heading>
                    <Text fontSize={'xs'} color={'gray.400'} textAlign="left" mb="4px">
                        {match.matches[i].gamemode[0]}
                    </Text>
                    <Box d="flex" align="center" justify="center">
                        {match.matches[i].summonersId.map(sum => <Image key={sum} src={`/data/img/sumspells/${sum}.png`} width={'25px'} height={'25px'} rounded={'lg'} alt="Summoner spell" border="1px" borderColor="gray.800"/> )}
                    </Box>
                </Box>
                <Flex flexDirection="column" width="100px">
                    <Text letterSpacing="2px">
                        {match.matches[i].kda[0]}/
                        {match.matches[i].kda[1]}/
                        {match.matches[i].kda[2]}
                    </Text>
                    <Flex justify="center">
                        {Math.round((match.matches[i].kda[0]+match.matches[i].kda[2])/match.matches[i].kda[1] * 100) /100}
                        <Box pl="3px">KDA</Box>
                    </Flex>
                </Flex>
                <Flex flexDirection="column">
                    <Flex width="100%">
                        {match.matches[i].items.map(item => <Image key={item} src={`/data/img/item/${item}.png`} width={'40px'} height={'40px'} rounded={'lg'} m='2px' alt="Item" border="1px" borderColor="gray.800" /> )}
                    </Flex>
                    <Flex mt="5px">
                        <Flex>
                            <Image key={match.matches[i].runePage[0]} src={`/data/img/runes/${match.matches[i].runePage[0]}.png`} width={'35px'} height={'35px'} rounded={'lg'} p='2px' alt="Main rune category" />
                            {match.matches[i].runePage[1].map(rune => <Image key={rune.perk} src={`/data/img/runes/${rune.perk}.png`} width={'35px'} height={'35px'} rounded={'lg'} p='2px' alt="First Rune" /> )}
                        </Flex>
                        <Spacer />
                        <Flex flexDirection="column">
                            <Flex>
                                <Image key={match.matches[i].runePage[2]} src={`/data/img/runes/${match.matches[i].runePage[2]}.png`} width={'35px'} height={'35px'} rounded={'lg'} p='2px' alt="Secondary rune category"/>
                                {match.matches[i].runePage[3].map(rune => <Image key={rune.perk} src={`/data/img/runes/${rune.perk}.png`} width={'35px'} height={'35px'} rounded={'lg'} p='2px' alt="Second Rune" /> )}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>   
        </Flex>
*/