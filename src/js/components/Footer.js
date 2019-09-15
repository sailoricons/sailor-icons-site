import React from 'react';

import { Box, Button, ResponsiveContext, Text } from 'grommet';

import { Github } from 'grommet-icons';

export default () => (
  <ResponsiveContext.Consumer>
    {responsive => (
      <Box
        tag="footer"
        pad="medium"
        border={{ color: 'light-4', side: 'top', size: 'medium' }}
        gap="medium"
        align="center"
      >
        <Box
          margin={{ vertical: 'small' }}
          align="center"
        >
          <Box direction="row">
            <Button
              a11yTitle="See Sailor Github"
              plain
              icon={<Github color="plain" />}
              target="_blank"
              href="https://github.com/sailoricons/sailor"
            />
          </Box>
          <Text textAlign={responsive === 'small' ? 'center' : undefined}>
            © 2019 Katalonne.
          </Text>
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
