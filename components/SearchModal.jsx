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
    Spacer
  } from '@chakra-ui/react';

import { BiSearchAlt2 } from 'react-icons/bi';
import { useState } from 'react';

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
                    </ModalBody>
                    </ModalContent>
                </Modal>
        </>
    );
}