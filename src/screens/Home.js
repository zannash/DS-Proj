import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const Home = ({navigation})=>{
    return (
        <View style={styles.container}>
            <Text>Welcome to the Home Screen</Text>
            <Button
                title="Go to About screen"
                onPress={()=>navigation.navigate("About")}>
            
            </Button>
            <Text>Drawer Navigation Button Functionality</Text>
            <Button
            title="Open Drawer"
            onPress={()=>navigation.openDrawer()}
            >

            </Button>
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
export default Home;