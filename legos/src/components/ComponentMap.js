import dynamic from 'next/dynamic';

const dynamicImports = {
    Footer: dynamic(() => import('./Footer')),
    Header: dynamic(() => import('./Header')),
    Layout: dynamic(() => import('./Layout')),
    Card: dynamic(() => import('./Card')),
    Editors: dynamic(()=> import('./Editors'))
};

export const {
    Footer,
    Header,
    Layout,
    Card,
    Editors
} = dynamicImports;
