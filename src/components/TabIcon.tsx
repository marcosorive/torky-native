import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type TabIconProps = {
    name: string,
    focused: boolean
}

export class TabIcon extends React.Component<TabIconProps> {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? "blue" : "grey"}
      />
    );
  }
}
