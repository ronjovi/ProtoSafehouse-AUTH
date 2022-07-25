import * as React from 'react';
import { Text, View, StyleSheet, Button, Modal, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment';

export default function CustomDatePicker (props) {
    const { textStyle, defaultDate } = props;
    
    const [date, setDate] = React.useState(defaultDate);
    const [show, setShow] = React.useState(false);
    
    const onChange = (e, selectedDate) => {
      setDate(moment(selectedDate));
    }
    
    const onCancel = () => {
      setDate(moment(defaultDate));
      setShow(false);
    }
    const onDone = () => {
      props.onDateChange(date)
      setShow(false);
    }
    
    return(
      <TouchableOpacity
        style = {{
          width: 125,
          height: 40,
          borderRadius: 5,
          borderColor: 'transparent',
          borderWidth: 1,
          backgroundColor: '#EBEBEB',
          position: 'absolute',
          marginTop: 480,
          right: 175,
        }}
        activeOpacity={0}
        onPress={() => setShow(true)}>
          <Image source={require('../assets/ant-design_calendar-filled.png')} style={{position: 'absolute', left: 95, top: 7}}/>
    
        <View>
          <Text style = {textStyle}> {date.format('YYYY-MM-DD')} </Text>
    
          <Modal
            transparent = {true}
            animationType = "slide"
            visible = {show}
            supportedOrientations={['portrait']}
            onRequestClose={ () => setShow(false) }>
    
            <View style = {{flex:1}}>
    
              <TouchableOpacity
                  style = {{
                    flex: 1,
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                  }}
                  activeOpacity={1}
                  visible = {show}
                  onPress={() => setShow(false)}>
    
                  <TouchableOpacity
                    underlayColor={'#FFFFFF'}
                    style = {{
                      flex:1,
                      borderTopColor: '#E9E9E9',
                      borderTopWidth: 1,
                    }}
                    onPress={() => console.log("datepicker clicked")}>
    
                      <View style = {{
                        backgroundColor: "#FFFFFF",
                        height: 256,
                        overflow: 'hidden',
                      }}>
                       
                        <View style = {{ marginTop: 20 }}>
                          <DateTimePicker
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            timeZoneOffsetInMinutes = {0}
                            value = {new Date(date)}
                            mode = "date"
                            minimumDate = {new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))}
                            maximumDate = {new Date(moment().add(1, 'years').format('YYYY-MM-DD'))}
                            onChange = {onChange}
                          />
                        </View>
    
                        <TouchableOpacity
                          underlayColor={'transparent'}
                          onPress = {onCancel}
                          style = {[styles.btnText, styles.btnCancel]}>
                          <Text> Cancel </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          underlayColor={'transparent'}
                          onPress = {onDone}
                          style = {[styles.btnText, styles.btnDone]}>                  
                          <Text> Done </Text>
                        </TouchableOpacity>
    
                      </View>
    
                  </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </Modal>   
        </View>
      </TouchableOpacity>
    )
   }
    
   CustomDatePicker.defaultProps = {
    textStyle: [],
    defaultDate: moment(),
    onDateChange: () => {},
   }

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ECF0F1',
      padding: 8,
    },
    btnText: {
      position: 'absolute',
      top: 0,
      height: 42,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnCancel: {
      left: 0,
    },
    btnDone: {
      right: 0,
    }
  });  