import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";
import Head from "next/head";
import React from "react";

const StyledHeader = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    padding: 0.5rem;
    z-index: 1;

    & > * {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .logo {
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .extra {
        margin-left: auto;
        margin-right: auto;
    }
`;

const StyledSeparator = styled.div`
    height: 100%;
    width: 1px;
    opacity: 0.08;
    background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 10%,
        rgba(0, 0, 0, 0.65) 32%,
        rgb(0, 0, 0) 50%,
        rgba(0, 0, 0, 0.65) 68%,
        rgba(0, 0, 0, 0) 90%
    );
`;

const DEFAULT_TITLE = "Sketch frontend coding test";

const Header = (props) => (
    <StyledHeader>
        <Head>
            <title>
                {DEFAULT_TITLE} {props.breadcrumbs ? " / " : ""}{" "}
                {(props.breadcrumbs || []).map((bc) => bc.title).join(" / ")}
            </title>
        </Head>

        <Link href="/">
            <a className="logo">
                <Logo />
            </a>
        </Link>
        <StyledSeparator />

        <Link href="/">
            <a>All documents</a>
        </Link>
        {(props.breadcrumbs || []).map((bc) => (
            <React.Fragment key={bc.as}>
                {" "}
                /
                <Link href={bc.href} as={bc.as}>
                    <a>{bc.title}</a>
                </Link>
            </React.Fragment>
        ))}
    </StyledHeader>
);

export default Header;
