import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const About = ({navigation})=>{
    return (
        <View style={styles.container}>
            <Text>Welcome to the About Screen</Text>
        </View>
    );
}

const styles =StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})
export default About;