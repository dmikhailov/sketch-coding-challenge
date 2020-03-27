import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Grid from "../../../components/Grid";
import ArtboardPreview from "../../../components/ArtboardPreview";
import Link from "next/link";
import { DocumentEntity } from "../../../model/DocumentEntity";
import PageContent from "../../../components/PageContent";
import Header from "../../../components/Header";

export const DOCUMENT_QUERY = gql`
    query getShare($id: String!) {
        share(shortId: $id) {
            version {
                document {
                    name
                    artboards {
                        entries {
                            id
                            name
                            isArtboard
                            files {
                                url
                                height
                                width
                                scale
                                thumbnails {
                                    url
                                    height
                                    width
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Document = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery(DOCUMENT_QUERY, {
        variables: { id }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const doc = new DocumentEntity(data.share);
    const boards = doc.artboards;

    return (
        <>
            <Header
                breadcrumbs={[
                    {
                        href: "/document/[id]",
                        as: `/document/${id}`,
                        title: doc.name
                    }
                ]}
            />
            <PageContent>
                <Grid>
                    {boards.map((board) => {
                        const thumbnail = board.thumbnail;
                        return board.isArtboard ? (
                            <Link href="/document/[id]/[artboard]" as={`/document/${id}/${board.id}`} key={board.id}>
                                <a>
                                    <ArtboardPreview name={board.name} src={thumbnail.url} />
                                </a>
                            </Link>
                        ) : (
                            <ArtboardPreview name={board.name} src={thumbnail.url} />
                        );
                    })}
                </Grid>
            </PageContent>
        </>
    );
};

export default Document;
