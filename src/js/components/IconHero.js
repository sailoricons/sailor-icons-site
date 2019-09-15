import React, { Component } from 'react';

import { Box, Heading, ResponsiveContext } from 'grommet';

import * as Sailor from 'react-sailor-icons';

import { groupArr } from '../utils'

const slides = groupArr(Object.values(Sailor),3).map((icons, id) => {
  return {icons, id}
})


class IconHero extends Component {
  state = {
    message: slides[0],
  };

  componentDidMount() {
    this.changeMessageInterval = setInterval(() => {
      const { message } = this.state;

      const possibleMessages = slides.filter(m => m.id !== message.id);
      const newMessage =
        possibleMessages[Math.floor(Math.random() * possibleMessages.length)];
      newMessage.key = new Date();
      this.setState({ message: newMessage });
    }, 5000); // 5 seconds
  }

  componentWillUnmount() {
    if (this.changeMessageInterval) {
      clearTimeout(this.changeMessageInterval);
      this.changeMessageInterval = undefined;
    }
  }

  render() {
    const { message: {icons, key} } = this.state;

    return (
      <ResponsiveContext.Consumer>
        {responsive => {
          const size = responsive === 'large' ? '140' : '96';
          return (
            <Box align="center" justify="start" pad="large">
              <Box
                justify="center"
                direction="row"
                wrap
                pad={{ bottom: 'large' }}
              >
                {icons.map((Icon, idx) => (
                  <Box margin="small">
                    <Icon key={`${idx}_${key}`} color="#fff" className="spin" size={size} />
                  </Box>
                ))}
              </Box>
              <Heading level={3} margin="small">
                Nice SVG icons
              </Heading>
            </Box>
          );
        }}
      </ResponsiveContext.Consumer>
    );
  }
}

export default IconHero;
