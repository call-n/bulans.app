import {
    Box,
    Flex,
    Text,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Input,
    Kbd,
    Spacer,
    VStack,
    Link,
  } from '@chakra-ui/react';

import Image from 'next/image'
import { BiSearchAlt2 } from 'react-icons/bi';
import { useState } from 'react';
import { champsForSearch } from '../data/dataForSearch';

export default function WithSubnavigation() {
    const { isOpen, onToggle, onOpen, onClose} = useDisclosure();
    const [summoner, setSummoner] = useState("");

    return (
        <>
            <Flex w="56%" pr="10px" pl="10px">
                    <Button 
                        width='100%' 
                        bg={'red'} 
                        d={'flex'} 
                        background={'gray.700'}
                        boxShadow='base'
                        color={'gray.400'}
                        justifyContent={'flex-start'}
                        onClick={onOpen}
                        >
                        <BiSearchAlt2 />
                        <Box ml="10px">
                            <Text>Search for...</Text>
                        </Box>
                        <Spacer />
                        <Flex>
                            <Kbd>⌘</Kbd><Kbd>K</Kbd>
                        </Flex>
                    </Button>
            </Flex>
                <Modal onClose={onClose} isOpen={isOpen} size={'xl'}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalBody>
                        <Flex align={'center'}>
                            <BiSearchAlt2 />
                            <Input 
                                variant='unstyled' 
                                size="lg" 
                                py={{ base: 1 }} 
                                px={{ base: 2 }} 
                                placeholder='Search for...' 
                                value={summoner} 
                                onChange={(e) => setSummoner(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        window.location.href = `/lol/player/${summoner}`    
                                    }
                                }}
                                />
                        </Flex>
                        <Flex pt="5px" pb="5px">
                            <VStack
                            spacing={2}
                            align='stretch'
                            w="100%"
                            >
                            <Flex>
                                {summoner.length > 0 && 
                                <Flex>
                                    <Text bg="cyan.400" pr="5px" pl="5px" borderRadius="2px" fontWeight="bold">
                                        EUNE
                                    </Text>
                                    <Box pl="5px">
                                        {summoner}
                                    </Box> 
                                </Flex>
                                }
                            </Flex>
                            {
                                summoner.length > 0 && 
                                champsForSearch.filter(
                                    champ => champ.id.toLowerCase().includes(summoner)
                                ).map(champ => 
                                    <Link key={champ.id} href={`/lol/champ/${champ.id}`}>
                                        <Flex height="40px" flexDirection="row" p="5px">
                                            <Box mr="5px">
                                                <Image src={`/data/img/champion/${champ.id}.png`} width={'30'} height={'30'} alt={champ.id} />
                                            </Box>
                                            {champ.id}
                                        </Flex>
                                    </Link>
                                    )
                                }
                            </VStack>
                        </Flex>
                    </ModalBody>
                    </ModalContent>
                </Modal>
        </>
    );
}