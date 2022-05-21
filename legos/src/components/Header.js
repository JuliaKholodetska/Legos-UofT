import React from 'react';
import { Link, Flex, Image } from '@chakra-ui/react';

// import siteSettings from 'src/config/siteSettings';
import header from './componentsStyle/header';
const legosIcon = '/public/legos.png'
// const {
//     images: { legosIcon },
// } = siteSettings;

const Header = ({ children }) => {

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <Flex
                        alignItems="center"
                        justify="space-between"
                        bgColor="white"
                        p={{ base: 'layout.base', xl: 'layout.xl' }}>
                        <Link>
                            <Image src={legosIcon} w={71} h={32} alt="Logo" />
                        </Link>
                    </Flex>
                    <div className="header-bottom-container">{children}</div>
                </div>
            </header>
            <style jsx>{header}</style>
        </>
    );
};

export default React.memo(Header);
