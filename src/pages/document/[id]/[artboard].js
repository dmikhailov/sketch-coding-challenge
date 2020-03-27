import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { DOCUMENT_QUERY } from "./index";
import styled from "styled-components";
import { DocumentEntity } from "../../../model/DocumentEntity";
import PageContent from "../../../components/PageContent";
import Header from "../../../components/Header";
import ArtboardNav from "../../../components/ArtboardNav";
import { useRef } from "react";

const StyledArtboard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    &.loading {
        .loader {
            display: block;
        }
        img {
            display: none;
        }
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .loader {
        display: none;
        font-size: 10px;
        margin: 50px auto;
        text-indent: -9999em;
        width: 11em;
        height: 11em;
        border-radius: 50%;
        background: #fdad00;
        background: linear-gradient(to right, #fdad00 10%, rgba(253, 173, 0, 0) 42%);
        position: relative;
        animation: load3 1.4s infinite linear;
        transform: translateZ(0);
    }
    .loader:before {
        width: 50%;
        height: 50%;
        background: #fdad00;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: "";
    }

    .loader:after {
        background: #f9f9f9;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: "";
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    @keyframes load3 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Artboard = () => {
    const artboardEl = useRef(null);
    const onLoad = () => {
        artboardEl.current.classList.remove("loading");
    };

    const router = useRouter();
    const { id, artboard } = router.query;

    const { loading, error, data } = useQuery(DOCUMENT_QUERY, {
        variables: { id }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const doc = new DocumentEntity(data.share);
    const board = doc.getBoardById(artboard);

    return (
        <>
            <Header
                breadcrumbs={[
                    {
                        href: "/document/[id]",
                        as: `/document/${id}`,
                        title: doc.name
                    },
                    {
                        href: "/document/[id]/[artboard]",
                        as: `/document/${id}/${artboard}`,
                        title: board.name
                    }
                ]}
            ></Header>
            <ArtboardNav list={doc.artboards} current={board} />
            <PageContent>
                <StyledArtboard className="loading" ref={artboardEl} key={artboard}>
                    <div className="loader" />
                    <img onLoad={onLoad} src={board.file.url} />
                </StyledArtboard>
            </PageContent>
        </>
    );
};

export default Artboard;
