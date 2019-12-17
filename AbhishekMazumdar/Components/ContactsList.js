import React from 'react';
import {SectionList, Text} from 'react-native';
import PropTypes from 'prop-types';
import Row from './Row';

const renderItem = ({item}) => <Row name={item.name} phone={item.phone} />
const renderSectionHeader = obj =>  <Text style={{color: 'white', fontSize: 32}}>{obj.section.title}</Text>

const ContactList = (props) => {
  // logic to write the function to populate the data
  
  return (
       <SectionList
          renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
              sections = {[{
                  title: 'A',
                  data: props.data
                }]}

             />
       ) }

           ContactList.propTypes = {
               data: PropTypes.array
           }

           export default ContactList;