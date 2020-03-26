import Link from "next/link";
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import Grid from "../components/Grid";
import PageContent from "../components/PageContent";
import DocumentPreview from "../components/DocumentPreview";
import {DocumentEntity} from "../model/DocumentEntity";
import Header from "../components/Header";


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

    return (
        <>
            <Header />
            <PageContent>
                <Grid>
                    {Object.keys(data).map(key => {
                        const doc = new DocumentEntity(data[key]);
                        return (
                            <Link href="/document/[id]" as={"/document/" + doc.id} key={doc.id}>
                                <a>
                                    <DocumentPreview id={doc.id} name={doc.name}
                                                     src={doc.thumbnail.url}/>
                                </a>
                            </Link>

                        );
                    })}
                    <Link href="/document/[id]" as="/document/Y8wDM">
                        <a>
                            <DocumentPreview id="Y8wDM" name="Fake document"
                                             src="https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.l.png?Expires=1585270800&Signature=N~CU01PIz~ltcWb5Q2ZQkzzeT4CWgX5OnSiFmfwa-ghPj99gaysqneZyLAPCem1xEQIdyZjuLkBtrDSJDrPU--tDEQcAvoPE2qDY~9sgiomf-ZMIqbq8kKHwX90uAnDETiCUs~hEnyrChbx0sMLg1W62WwW28QhC55c9itWVM9U_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"/>
                        </a>
                    </Link>
                </Grid>
            </PageContent>
        </>);
};

export default Documents;