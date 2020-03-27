import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Grid from "../components/Grid";
import PageContent from "../components/PageContent";
import DocumentPreview from "../components/DocumentPreview";
import { DocumentEntity } from "../model/DocumentEntity";
import Header from "../components/Header";

const ALL_ITEMS_QUERY = gql`
    query {
        first: share(shortId: "Y8wDM") {
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
        second: share(shortId: "4W43q") {
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
    const { loading, error, data } = useQuery(ALL_ITEMS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <Header />
            <PageContent>
                <Grid>
                    {Object.keys(data).map((key) => {
                        const doc = new DocumentEntity(data[key]);
                        return (
                            <Link href="/document/[id]" as={"/document/" + doc.id} key={doc.id}>
                                <a>
                                    <DocumentPreview id={doc.id} name={doc.name} src={doc.thumbnail.url} />
                                </a>
                            </Link>
                        );
                    })}
                </Grid>
            </PageContent>
        </>
    );
};

export default Documents;
