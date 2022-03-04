// @flow 
import React from 'react';
import * as S from './styled'
type Props ={
    name: string, 
    linkToRepo: string, 
    fullName: string
}
const RepositoryItem:React.FC<Props> = ({name, linkToRepo, fullName}) => {
    return (
        <S.Container>
            <S.Title>{name}</S.Title>
            <S.FullName>Nome:</S.FullName>
            <S.Link href={linkToRepo} target="_blank" rel="noreferrer">
                {fullName}
            </S.Link>
        </S.Container>
    );
};

export default RepositoryItem