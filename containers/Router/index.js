import React, { PropTypes } from 'react';
import { Text } from 'native-base';

const Router = (props) => {
  return (
    <Text>
      This is where I'd put my {props.currentPage} component... IF I HAD ONE.
    </Text>
  );
};

Router.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Router;
