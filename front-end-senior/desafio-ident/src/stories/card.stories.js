import React from 'react';
import { storiesOf } from '@storybook/react';
import {Card} from 'components';
import centered from '@storybook/addon-centered/react';

storiesOf('Cards', module).addDecorator(centered).add('Card basic', () => <Card / > );