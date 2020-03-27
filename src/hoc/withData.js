import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

function createClient() {
    return new ApolloClient({
        uri: "https://graphql.sketch.cloud/api"
    });
}

export default withApollo(createClient);
