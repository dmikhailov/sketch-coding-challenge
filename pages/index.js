import Link from "next/link";
import DocumentPreview from "../components/DocumentPreview";

import styled from 'styled-components';

const StyledDocument= styled.div`
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

const Documents = props => (

    <StyledDocument>
        <Link href="/document/[id]" as="/document/Y8wDM">
            <a>
                <DocumentPreview id="Y8wDM" name="First document" src="https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.l.png?Expires=1585011600&Signature=n4GUao~kTdvylJYYQ2oNsufudEFj2~zerN7W7UPY2U4GBdayv-~Z2ErLZSvs6sEiMKFc6X0MmzBPsj6s0xGtidGRFm3ytBT7CHiYXFgXAf6AAAscsR640vdPs451AfctQMMwMohcDeWEhrsmTC5A1Jp~IEN4t63Ei5LynuQYlfA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"/>
            </a>
        </Link>

        <Link href="/document/[id]" as="/document/Y8wDM">
            <a>
                <DocumentPreview id="4W43q" src="https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.l.png?Expires=1585011600&Signature=n4GUao~kTdvylJYYQ2oNsufudEFj2~zerN7W7UPY2U4GBdayv-~Z2ErLZSvs6sEiMKFc6X0MmzBPsj6s0xGtidGRFm3ytBT7CHiYXFgXAf6AAAscsR640vdPs451AfctQMMwMohcDeWEhrsmTC5A1Jp~IEN4t63Ei5LynuQYlfA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"/>
            </a>
        </Link>
        <Link href="/document/[id]" as="/document/Y8wDM">
            <a>
                <DocumentPreview id="Y8wDM" src="https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.l.png?Expires=1585011600&Signature=n4GUao~kTdvylJYYQ2oNsufudEFj2~zerN7W7UPY2U4GBdayv-~Z2ErLZSvs6sEiMKFc6X0MmzBPsj6s0xGtidGRFm3ytBT7CHiYXFgXAf6AAAscsR640vdPs451AfctQMMwMohcDeWEhrsmTC5A1Jp~IEN4t63Ei5LynuQYlfA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"/>
            </a>
        </Link>
        <Link href="/document/[id]" as="/document/Y8wDM">
            <a>
                <DocumentPreview id="Y8wDM" src="https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.l.png?Expires=1585011600&Signature=n4GUao~kTdvylJYYQ2oNsufudEFj2~zerN7W7UPY2U4GBdayv-~Z2ErLZSvs6sEiMKFc6X0MmzBPsj6s0xGtidGRFm3ytBT7CHiYXFgXAf6AAAscsR640vdPs451AfctQMMwMohcDeWEhrsmTC5A1Jp~IEN4t63Ei5LynuQYlfA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"/>
            </a>
        </Link>
        <Link href="/document/[id]" as="/document/Y8wDM">
            <a>
                <DocumentPreview id="Y8wDM" src="https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.l.png?Expires=1585011600&Signature=n4GUao~kTdvylJYYQ2oNsufudEFj2~zerN7W7UPY2U4GBdayv-~Z2ErLZSvs6sEiMKFc6X0MmzBPsj6s0xGtidGRFm3ytBT7CHiYXFgXAf6AAAscsR640vdPs451AfctQMMwMohcDeWEhrsmTC5A1Jp~IEN4t63Ei5LynuQYlfA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"/>
            </a>
        </Link>
        <Link href="/document/[id]" as="/document/Y8wDM">
            <a>
                <DocumentPreview id="Y8wDM" src="https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.l.png?Expires=1585011600&Signature=n4GUao~kTdvylJYYQ2oNsufudEFj2~zerN7W7UPY2U4GBdayv-~Z2ErLZSvs6sEiMKFc6X0MmzBPsj6s0xGtidGRFm3ytBT7CHiYXFgXAf6AAAscsR640vdPs451AfctQMMwMohcDeWEhrsmTC5A1Jp~IEN4t63Ei5LynuQYlfA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"/>
            </a>
        </Link>
        <Link href="/document/[id]" as="/document/Y8wDM">
            <a>
                <DocumentPreview id="Y8wDM" src="https://resources-live.sketch.cloud/files/d57fe1fd-c38e-4c1c-b349-4db14afe2685.l.png?Expires=1585011600&Signature=n4GUao~kTdvylJYYQ2oNsufudEFj2~zerN7W7UPY2U4GBdayv-~Z2ErLZSvs6sEiMKFc6X0MmzBPsj6s0xGtidGRFm3ytBT7CHiYXFgXAf6AAAscsR640vdPs451AfctQMMwMohcDeWEhrsmTC5A1Jp~IEN4t63Ei5LynuQYlfA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"/>
            </a>
        </Link>

    </StyledDocument>
);

export default Documents;