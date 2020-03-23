import {useRouter} from 'next/router'
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";


const DOCUMENT_QUERY = gql`
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

    const {share: {version: {document: {artboards: {entries}}}}} = data;
    console.log(entries);

    return (
        <div>
        <p>Document page {id}</p>

        {entries.map(e => {
            const {id, name} = e;
            const thumbnails = [];
            e.files.forEach(f => Array.prototype.push.apply(thumbnails, f.thumbnails));
            console.log(thumbnails);
            return (
                <div key={id}>
                    <p>{name}</p>
                    <img src={thumbnails[0].url} />
                </div>
            );
        })}
        </div>
    )
};

export default Document;