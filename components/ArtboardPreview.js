import styled from 'styled-components';

const StyledArtboardPreview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    
    .img-container {
        width: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        overflow: hidden;
    }
    img {
        width: 100%;
        transition: transform 0.15s ease 0s;
    }
    
    &:hover img {
        transform: scale3d(1.1, 1.1, 0.1);
    }
`;

const ArtboardPreview = props => {
    const {name} = props;
    return (
        <StyledArtboardPreview>
            <div className="img-container">
                <img src={props.src} alt={name}/>
            </div>
            <p>{name}</p>
        </StyledArtboardPreview>
    );
};

export default ArtboardPreview;