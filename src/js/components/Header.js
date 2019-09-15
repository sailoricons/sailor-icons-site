import React from 'react';

import { Box, Button, Heading } from 'grommet';

import { Github } from 'grommet-icons';

const Header = () => (
  <Box tag="header" justify="between" align="start" direction="row">
    <Box pad="medium">
      <Heading level={2} margin="none">
        sailor
      </Heading>
      <Heading level={2} margin="none">
        icons
      </Heading>
    </Box>
    <Box pad={{ vertical: 'medium', horizontal: 'small' }}>
      <Button
        a11yTitle="Go to sailor-icons on GitHub"
        target="_blank"
        href="https://github.com/sailor-icons/sailor"
        icon={<Github size="large" />}
      />
    </Box>
  </Box>
);

export default Header;
