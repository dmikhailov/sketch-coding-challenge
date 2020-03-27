import styled from 'styled-components';
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";

const StyledArtboardNav = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    
    a {
        margin-left:  0.5rem;
        margin-right:  0.5rem;
        
        &[disabled] {
            opacity: 0.4;
            &:hover {
                 color: black;
            }
        }
    }
`;

const ArtboardNav = props => {
    const router = useRouter()
    const {id} = router.query;

    const {list, current} = props;
    const indexOf = list.indexOf(current);
    const prev = indexOf === 0
        ? <a disabled>&lt;</a>
        : <Link href="/document/[id]/[artboard]" as={`/document/${id}/${list[indexOf - 1].id}`}><a>&lt;</a></Link>
    const next = indexOf === list.length - 1
        ? <a disabled>&gt;</a>
        : <Link href="/document/[id]/[artboard]" as={`/document/${id}/${list[indexOf + 1].id}`}><a>&gt;</a></Link>
    return (
        <StyledArtboardNav>
            {prev}
            {indexOf + 1} / {list.length}
            {next}
        </StyledArtboardNav>
    );
};

export default ArtboardNav;