import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from '../components/icon';
const Home = () => {
    return(
        <View style={styles.container}>

            {/*===SLIDER START===*/}
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay 
                    activeDotColor="#22D4FF"
                    autoplayTimeout={2}
                >
                    <View style={styles.item}>
                        <Image 
                         source={require('../../assets/images/laptop.png')}
                           
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.item}>
                        <Image 
                            source={require('../../assets/images/laptop1.png')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.item}>
                        <Image 
                            source={require('../../assets/images/laptop2.png')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.item}>
                        <Image 
                            source={require('../../assets/images/laptop.png')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.item}>
                        <Image 
                            source={require('../../assets/images/laptop5.png')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                </Swiper>
            </View>

             {/*===SLIDER END===*/}
            
            {/*==== ICONS START====*/}
            <View style={styles.iconsContainer}>
                <Icon name="cellphone-iphone" iconText="iPhone"/>
                <Icon name="android" iconText="Samsung"/>
                <Icon name="laptop" iconText="Laptop"/>

            </View>
            <View style={styles.iconsContainer}>
                <Icon name="tablet" iconText="Tablet"/>
                <Icon name="mouse" iconText="Mouse"/>
                <Icon name="keyboard-outline" iconText="Keyboard"/>

            </View>
             {/*==== ICONS END====*/}


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    sliderContainer: {
        width: '90%',
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8
    },

    imgItem: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },

    item: {
        flex: 1,
        justifyContent: 'center'
    },

    iconsContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        marginTop: 35,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },



});

export default Home;