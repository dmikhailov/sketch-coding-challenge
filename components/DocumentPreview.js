import styled from 'styled-components';

const StyledDocumentPreview = styled.div`
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 5px 0px;
    border-radius: 3px;
    
    img {
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 1px;
    }
    p {
        padding: 1rem 1.25rem;
        margin: 0;
    }
`;

const DocumentPreview = props => {
    const {id, name} = props;
    return (
        <StyledDocumentPreview>
            <img src={props.src} alt={name || id}/>
            <p>{name || id}</p>
        </StyledDocumentPreview>
    );
};

export default DocumentPreview;