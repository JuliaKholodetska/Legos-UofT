import React from 'react';
import { Link, Flex, Image, Spacer } from '@chakra-ui/react';

import legosIcon from './../legos.png'

const Header = () => {

    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' h={24} bgColor="white"
                p={{ base: 'layout.base', xl: 'layout.xl' }}>
                <Spacer />
                <Link href='/compiler' >
                    <Image src={legosIcon} w={71} h={12} alt="Logo" mr={0} />
                </Link>
            </Flex>
        </>
    );
};

export default React.memo(Header);
