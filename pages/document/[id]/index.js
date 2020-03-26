import {useRouter} from 'next/router'
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import Grid from "../../../components/Grid";
import ArtboardPreview from "../../../components/ArtboardPreview";
import Link from "next/link";
import {DocumentEntity} from "../../../model/DocumentEntity";


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
    const {id} = router.query;

    const {loading, error, data} = useQuery(DOCUMENT_QUERY, {
        variables: {id}
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const doc = new DocumentEntity(data.share);
    const boards = doc.artboards;
    console.log(data.share);
    return (
        <div>
            <p>Document page {id}</p>
            <Grid>
                {boards.map(board => {
                    const thumbnail = board.thumbnail;
                    return board.isArtboard
                        ? <Link href="/document/[id]/[artboard]" as={`/document/${id}/${board.id}`} key={board.id}>
                            <a>
                                <ArtboardPreview name={board.name} src={thumbnail.url}/>
                            </a>
                        </Link>
                        : <ArtboardPreview name={board.name} src={thumbnail.url}/>
                })}
            </Grid>
        </div>
    )
};

export default Document;