import React from 'react';
//@@ Import the storybook libraries
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Media from './Media';


const stories = storiesOf('__Medias__')

stories.add('Generic Media', () => (
	<Media />
));