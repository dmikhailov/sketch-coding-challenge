import { useRouter } from 'next/router'
import {useQuery} from "@apollo/react-hooks";
import {DOCUMENT_QUERY} from "./index";
import styled from "styled-components";
import {DocumentEntity} from "../../../model/DocumentEntity";

const StyledArtboard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }  
`;

const Artboard = () => {
    const router = useRouter()
    const { id, artboard } = router.query;

    const {loading, error, data} = useQuery(DOCUMENT_QUERY, {
        variables: {id}
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const doc = new DocumentEntity(data.share);
    const board = doc.getBoardById(artboard);

    return (
        <StyledArtboard>
            <img src={board.file.url} />
        </StyledArtboard>
    )
};

export default Artboard