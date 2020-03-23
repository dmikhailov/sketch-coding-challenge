import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

function createClient() {
    return new ApolloClient({
        uri: 'https://graphql.sketch.cloud/api'
    });
}

export default withApollo(createClient);

//
// o = {
//     "data": {
//         "share": {
//             "__typename": "Share",
//             "belongsToTeam": true,
//             "commentsEnabled": true,
//             "createdAt": "2020-02-18T16:33:35.000000Z",
//             "downloadEnabled": true,
//             "id": "26343997-bb48-43ff-a2f7-bd6bc7ef976c",
//             "inspectorEnabled": true,
//             "isPrivate": false,
//             "libraryEnabled": false,
//             "name": "fe-code-test",
//             "owner": {
//                 "__typename": "PublicOrganization",
//                 "id": "d8452268-90d0-414d-b3db-c132adac268f",
//                 "name": "Sketch QA",
//                 "shortId": "NxW6",
//                 "viewerIsMember": false
//             },
//             "previewFiles": [{
//                 "__typename": "File",
//                 "height": 1024,
//                 "id": "d57fe1fd-c38e-4c1c-b349-4db14afe2685",
//                 "thumbnails": [{
//                     "__typename": "Thumbnail",
//                     "height": 178,
//                     "type": "M",
//                     "url": "https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.m.png?Expires=1585011600&Signature=Ki~YXuB7PW2SGgppy-nY5BIwIg8l7mVWabOaeUQhcYsLGkZmInl68DPUvWA0UBMuCGPuHLl2HntxGjbLVtaKlH5faje2L6QQ3VMG4RqoI8eS1YyflgJCQQwJUUlvAQGRTI-3gRXHWstgHjQlfzO97qLjCLfW3bdZ~22LDIuWMZk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
//                     "width": 250
//                 }, {
//                     "__typename": "Thumbnail",
//                     "height": 534,
//                     "type": "L",
//                     "url": "https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.l.png?Expires=1585011600&Signature=n4GUao~kTdvylJYYQ2oNsufudEFj2~zerN7W7UPY2U4GBdayv-~Z2ErLZSvs6sEiMKFc6X0MmzBPsj6s0xGtidGRFm3ytBT7CHiYXFgXAf6AAAscsR640vdPs451AfctQMMwMohcDeWEhrsmTC5A1Jp~IEN4t63Ei5LynuQYlfA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
//                     "width": 750
//                 }, {
//                     "__typename": "Thumbnail",
//                     "height": 884,
//                     "type": "XL",
//                     "url": "https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.xl.png?Expires=1585011600&Signature=DAFXLlK4yeTGI6UFa9HnFG~giMTtZMFV-V3lgsYvtVdkaSJ9p8diGI82D-GozPEY9kqiAd3s40NsQpZseu1-cZNQn1RMR83US-Wg~3yKQTSOnwJAoP1I8QDmoQOLdpQsnmJeFoC1O-JxVChZIFxfAl6mIo4rN9KRPQzFP8-PtyU_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
//                     "width": 1242
//                 }],
//                 "url": "https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.png?Expires=1585011600&Signature=j7TirdRwImii5h6sooJmT6ss3HlCzr1mKxfUQkhxxI62WbUCr5IjyLaKhMcZyxdtJlwMvoAAwVXgA8YVdMS6pmUnp~YMmhfTl63i7~koS6hAMKF7P5yAYnijJI2B9jQK7k6bw7akHM5MRi7h1BfEd8mWp5FvKwy3xic-Zzlr9Wk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
//                 "width": 1440
//             }],
//             "project": {
//                 "__typename": "Project",
//                 "id": "373061d3-786e-4dd6-8869-adf92aebf436",
//                 "name": "Frontend Team",
//                 "shortId": "AWLm"
//             },
//             "shortId": "z3p4o",
//             "unreadCount": 0,
//             "updatedAt": "2020-03-05T16:03:35.000000Z",
//             "userCanContribute": false,
//             "version": {
//                 "__typename": "Version",
//                 "createdAt": "2020-03-05T16:03:12Z",
//                 "creator": {
//                     "__typename": "PublicUser",
//                     "id": "2597d0ef-266d-4f5f-bb7e-565c99c8228f",
//                     "name": "Ivan Malagon"
//                 },
//                 "document": {
//                     "__typename": "Document",
//                     "artboardCount": 16,
//                     "downloadAvailable": true,
//                     "downloadUnavailableError": null,
//                     "id": "61b5ea9a-623f-4f06-af32-92f65d0f3c14",
//                     "isPresent": true,
//                     "name": "fe-code-test",
//                     "pageCount": 2,
//                     "renderStatus": "FINISHED",
//                     "url": "https://client.sketch.cloud/v1/documents/61b5ea9a-623f-4f06-af32-92f65d0f3c14/download/fe-code-test.sketch?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudCI6IjYxYjVlYTlhLTYyM2YtNGYwNi1hZjMyLTkyZjY1ZDBmM2MxNCIsImF1ZCI6Ikpva2VuIiwiZXhwIjoxNTg0OTQ1NzUwLCJpYXQiOjE1ODQ5NDIxNTAsImlzcyI6Ikpva2VuIiwianRpIjoiMm52ZGd2OWFnMDg0Mmo5ajc4YW5oYnExIiwibmJmIjoxNTg0OTQyMTUwfQ.Cno4hFkVKcwyhFyC-JVDkkxKOLJYLD6i-zjnhbb__1A"
//                 },
//                 "id": "02cc3f5d-1861-42bf-b030-e43f0c0993eb",
//                 "shortId": "ka2KWr",
//                 "viewerIsCreator": false
//             },
//             "viewerCanAccessVersions": false,
//             "viewerCanAdminister": false,
//             "viewerCanContribute": false,
//             "viewerCanUpdate": false,
//             "viewerHasUnacceptedMembershipInvite": false,
//             "viewerIsMember": false,
//             "viewerIsOwner": false,
//             "viewerIsWatching": false
//         }
//     }