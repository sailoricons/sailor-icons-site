import React, { Component } from 'react';
import {
  Anchor,
  Box,
  Grid,
  Grommet,
  Heading,
  InfiniteScroll,
  Paragraph,
  Text,
} from 'grommet';
import { grommet } from 'grommet/themes';

import IconHero from './components/IconHero';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderFooter from './components/HeaderFooter';
import Gremlin from './components/Gremlin';
import * as Sailor from 'react-sailor-icons';

const openIssueAnchor = (
  <Anchor
    target="_blank"
    href="https://github.com/sailoricons/sailor/issues/new"
  >
    issue
  </Anchor>
);

const App = (props) => {
  const sailorIcons = Object.entries(Sailor)
    .map(([name, Icon]) => {
      const obj = {
        name,
        Icon,
        label: name
      }
      return obj
    })

  return (
    <Grommet theme={grommet}>
      <Box background="#1576ea">
        <Header />
        <IconHero />
        <HeaderFooter />
      </Box>
      <Box align="center" pad={{ horizontal: 'medium' }}>
        <Box align="center" pad={{ top: 'large', bottom: 'large' }}>
          <Heading textAlign="center">
            Looking for something in particular?
          </Heading>
        </Box>
        <Box width="xlarge" style={{ minHeight: '80vh' }}>
          {sailorIcons.length > 0 ? (
            <Grid columns="small" justifyContent="around">
              <InfiniteScroll items={sailorIcons}>
                {({ label, Icon, name }) => (
                  <Box
                    key={name}
                    animation="fadeIn"
                    justify="center"
                    align="center"
                    height="small"
                  >
                    <Icon size="70" color="#1576ea" />
                    <Text
                      textAlign="center"
                      margin="small"
                      style={{ wordBreak: 'break-all' }}
                    >
                      <span dangerouslySetInnerHTML={{ __html: label }} />
                    </Text>
                  </Box>
                )}
              </InfiniteScroll>
            </Grid>
          ) : (
            <Box align="center">
              <Heading level={3}>No icon, sorry!</Heading>
              <Paragraph textAlign="center" margin="small">
                If you believe this icon should exist in our library, please
                file an {openIssueAnchor} and we will look into it.
              </Paragraph>
              <Box pad={{ top: 'medium' }}>
                <Gremlin />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </Grommet>
  );
}

export default App 