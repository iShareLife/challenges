import React from 'react';
import { storiesOf } from '@storybook/react';
import {Card} from 'components';
import centered from '@storybook/addon-centered/react';
import imageFile from '../assets/img1.png';

storiesOf('Cards', module).addDecorator(centered).add('Card basic', () => <Card img={imageFile} title="Nanotecnologia Aplicada a Implantodontia" / > );