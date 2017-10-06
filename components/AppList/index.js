import React from 'react';
import { Text, List } from 'native-base';
import { ListItem } from 'native-base';

const AppList = (props) => (
  <List>
    <ListItem itemDivider>
      <Text>A</Text>
    </ListItem>
    <ListItem >
      <Text>Aaron Bennet</Text>
    </ListItem>
    <ListItem>
      <Text>Ali Connors</Text>
    </ListItem>
    <ListItem itemDivider>
      <Text>B</Text>
    </ListItem>
    <ListItem>
      <Text>Bradley Horowitz</Text>
    </ListItem>
  </List>
);
export default AppList;
