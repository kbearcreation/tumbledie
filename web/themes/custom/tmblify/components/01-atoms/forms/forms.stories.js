import React from 'react';

import checkbox from './checkbox/checkbox.twig';
import webformcheckbox from './webform-checkbox/webform-checkbox.twig';
import radio from './radio/radio.twig';
import select from './select/select.twig';
import textfields from './textfields/textfields.twig';

import checkboxData from './checkbox/checkbox.yml';
import webformcheckboxData from './webform-checkbox/webform-checkbox.yml';
import radioData from './radio/radio.yml';
import selectOptionsData from './select/select.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Forms' };

export const checkboxes = () => (
  <div dangerouslySetInnerHTML={{ __html: checkbox(checkboxData) }} />
);
export const webformCheckboxes = () => (
  <div
    dangerouslySetInnerHTML={{ __html: webformcheckbox(webformcheckboxData) }}
  />
);
export const radioButtons = () => (
  <div dangerouslySetInnerHTML={{ __html: radio(radioData) }} />
);
export const selectDropdowns = () => (
  <div dangerouslySetInnerHTML={{ __html: select(selectOptionsData) }} />
);
export const textfieldsExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: textfields({}) }} />
);
