import {Provider} from 'react-redux'
import React from 'react';
import Store from './Store.tsx';
import ChakraWrapper from '../ChakraComponents/ChakraWrapper';

const ReduxWrapper = () => {
    return(
            <Provider store={Store} >
                <ChakraWrapper/>
            </Provider>
    )
};

export default ReduxWrapper;
