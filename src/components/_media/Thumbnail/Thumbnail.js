import React from 'react';
import styled from 'styled-components';

const ThumbnailWrapper = styled.div`
  
`;

function Thumbnail(props) {
	return <ThumbnailWrapper {...props}>{props.children}</ThumbnailWrapper>;
}

export default Thumbnail;
