import React from 'react';
import { Link, Flex, Image, Spacer } from '@chakra-ui/react';

// import siteSettings from 'src/config/siteSettings';
// import header from './componentsStyle/header';
const legosIcon = '/public/legos.png'
// const {
//     images: { legosIcon },
// } = siteSettings;

const Header = ({ logo }) => {

    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' h={24} bgColor="white"
                p={{ base: 'layout.base', xl: 'layout.xl' }}>
                <Spacer />
                <Link>
                    <Image src={logo} w={71} h={12} alt="Logo" mr={0} />
                </Link>
            </Flex>
        </>
    );
};

export default React.memo(Header);
