/** @flow */

import createPrefixer from "inline-style-prefixer/static/createPrefixer"

import staticData from "./static";

const prefixAll = createPrefixer(staticData);

export default prefixAll;

export const prefixInlineStyles = (style: Object) => {
  const prefixedStyles = prefixAll(style);

  // React@15 removed undocumented support for fallback values in
  // inline-styles. Revert array values to the standard CSS value
  Object.keys(prefixedStyles).forEach((prop) => {
    const value = prefixedStyles[prop];
    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });

  return prefixedStyles;
};
