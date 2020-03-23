import Link from "next/link";
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import DocumentPreview from "../components/DocumentPreview";

import styled from 'styled-components';

const StyledDocument = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    
    & > a {
        margin-right: 32px;
        margin-bottom: 32px;
        
        transition: all 0.2s ease-in 0s;
        width: calc(16.6667%);
        
        @media (max-width: 1440px) {
            width: calc(20%);
        }
        @media (max-width: 1024px) {
            width: calc(25%);
        }
        @media (max-width: 768px) {
            width: calc(33.3333%);
        }   
        @media (max-width: 590px) {
            width: calc(50%);
        }
        @media (max-width: 375px) {
            width: calc(100%);
        }
    }
`;


const ALL_ITEMS_QUERY = gql`
    query {
        first : share(shortId: "Y8wDM") {
            shortId
            previewFiles {
                thumbnails {
                    url
                    height
                    width
                    type
                }
            }
            version {
                document {
                    name   
                }
            }
        }
        second : share(shortId: "4W43q") {
            shortId
            previewFiles {
                thumbnails {
                    url
                    height
                    width
                    type
                }
            }
            version {
                document {
                    name   
                }
            }
        }
    }
`;

const Documents = () => {
    const {loading, error, data} = useQuery(ALL_ITEMS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);

    return (
        <StyledDocument>
            {Object.keys(data).map(k => {
                const {shortId, previewFiles, version} = data[k];
                const {document: {name}} = version;
                const {thumbnails} = previewFiles[0];
                const thumbnail = thumbnails.find(t => t.type === "M")
                return (
                    <Link href="/document/[id]" as={"/document/" + shortId} key={shortId}>
                        <a>
                            <DocumentPreview id={shortId} name={name}
                                             src={thumbnail.url}/>
                        </a>
                    </Link>

                );
            })}
            <Link href="/document/[id]" as="/document/Y8wDM">
                <a>
                    <DocumentPreview id="Y8wDM" name="Fake document"
                                     src="https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.l.png?Expires=1585011600&Signature=n4GUao~kTdvylJYYQ2oNsufudEFj2~zerN7W7UPY2U4GBdayv-~Z2ErLZSvs6sEiMKFc6X0MmzBPsj6s0xGtidGRFm3ytBT7CHiYXFgXAf6AAAscsR640vdPs451AfctQMMwMohcDeWEhrsmTC5A1Jp~IEN4t63Ei5LynuQYlfA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"/>
                </a>
            </Link>


        </StyledDocument>);
};

export default Documents;