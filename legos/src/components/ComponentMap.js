import dynamic from 'next/dynamic';

const dynamicImports = {
   
    Footer: dynamic(() => import('./Footer')),
    Header: dynamic(() => import('./Header')),
    Layout: dynamic(() => import('./Layout')),
   
};

export const {
    Footer,
    Header,
    Layout,
} = dynamicImports;
