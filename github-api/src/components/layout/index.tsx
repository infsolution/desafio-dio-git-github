import * as React from 'react';
import Header from '../header';
import { Container } from '../layout/styled';

const Layout:React.FC = ({children}) => {
    return (
        <Container>
            <Header/>
            {children}
        </Container>
    );
};

export default Layout