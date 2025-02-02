import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

export interface ComboboxInputWrapperProps {
  children: NonNullable<React.ReactNode>;
}

const ComboboxInputWrapper = React.forwardRef<HTMLDivElement, ComboboxInputWrapperProps>(
  ({children, ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} ref={ref} display="flex" position="relative" width="100%">
        {children}
      </Box>
    );
  }
);

ComboboxInputWrapper.displayName = 'ComboboxInputWrapper';

if (process.env.NODE_ENV === 'development') {
  ComboboxInputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
}

export {ComboboxInputWrapper};
