import { TouchableHighlight, View, Text, Modal, DateTimePicker, Date, StyleSheet, moment } from 'react-native';

const CustomDatePicker = (props) => {
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
      <TouchableHighlight
        activeOpacity={0}
        onPress={() => setShow(true)}>
    
        <View>
          <Text style = {textStyle}> {date.format('YYYY-MM-DD')} </Text>
    
          <Modal
            transparent = {true}
            animationType = "slide"
            visible = {show}
            supportedOrientations={['portrait']}
            onRequestClose={ () => setShow(false) }>
    
            <View style = {{flex:1}}>
    
              <TouchableHighlight
                  style = {{
                    flex: 1,
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                  }}
                  activeOpacity={1}
                  visible = {show}
                  onPress={() => setShow(false)}>
    
                  <TouchableHighlight
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
    
                        <TouchableHighlight
                          underlayColor={'transparent'}
                          onPress = {onCancel}
                          style = {[styles.btnText, styles.btnCancel]}>
                          <Text> Cancel </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                          underlayColor={'transparent'}
                          onPress = {onDone}
                          style = {[styles.btnText, styles.btnDone]}>                  
                          <Text> Done </Text>
                        </TouchableHighlight>
    
                      </View>
    
                  </TouchableHighlight>
              </TouchableHighlight>
            </View>
          </Modal>   
        </View>
      </TouchableHighlight>
    )
   }
    
   CustomDatePicker.defaultProps = {
    textStyle: [],
    defaultDate: moment(),
    onDateChange: () => {},
   }