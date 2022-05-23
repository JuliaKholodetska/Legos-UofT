import dynamic from 'next/dynamic';

const dynamicImports = {
    Footer: dynamic(() => import('./Footer')),
    Header: dynamic(() => import('./Header')),
    Layout: dynamic(() => import('./Layout')),
    Card: dynamic(() => import('./Card')),
    Editors: dynamic(() => import('./Editors')),
    OptionsBar: dynamic(() => import('./OptionsBar')),
    RadioOption: dynamic(() => import('./RadioOption')),
    InputOption: dynamic(() => import('./InputOption')),
};

export const {
    Footer,
    Header,
    Layout,
    Card,
    Editors,
    OptionsBar,
    RadioOption,
    InputOption
} = dynamicImports;
