import styled from "styled-components";

const StyledDocumentPreview = styled.div`
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 5px 0px;
    border-radius: 3px;

    .img-container {
        width: 100%;
        padding-top: 56.25%;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 1px;
        overflow: hidden;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform 0.15s ease 0s;
    }

    &:hover img {
        transform: scale3d(2, 2, 0.1);
    }
    p {
        padding: 1rem 1.25rem;
        margin: 0;
    }
`;

const DocumentPreview = (props) => {
    const { id, name } = props;
    return (
        <StyledDocumentPreview>
            <div className="img-container">
                <img src={props.src} alt={name || id} />
            </div>
            <p>{name || id}</p>
        </StyledDocumentPreview>
    );
};

export default DocumentPreview;
