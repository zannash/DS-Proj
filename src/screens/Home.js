import React from 'react';
import { View, Text, StyleSheet, Button, Image,FlatList,TouchableOpacity,ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from '../components/icon';
import data from '../data/data.json';
import Item from '../components/Item';
class Home extends React.Component  {
    constructor(){
        super();
        this.state = {
            products:[],
        }
    }

    //Pasi qe komponenta behet insert ne tree (DOM)
    componentDidMount(){
        this.setState({
            products: data
        })
    }
    render(){
        return(
            <ScrollView>
                 <View style={styles.container}>
    
    {/*===SLIDER Section START===*/}
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

     {/*===SLIDER Section END===*/}
    
    {/*==== ICONS Section START====*/}
    <View style={styles.iconsContainer}>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Ios')}>
                            <Icon name="cellphone-iphone" iconText="iOS"/>
                            </TouchableOpacity>
        <Icon name="android" iconText="Samsung"/>
        <Icon name="laptop" iconText="Laptop"/>

    </View>
    <View style={styles.iconsContainer}>
        <Icon name="tablet" iconText="Tablet"/>
        <Icon name="mouse" iconText="Mouse"/>
        <Icon name="keyboard-outline" iconText="Keyboard"/>

    </View>
     {/*==== ICONS Section END====*/}

         {/*==== Products Section START====*/}
         <View style={styles.productsContainer}>
            <Text style={styles.title}>Most popular products</Text>
            <FlatList 
                data={this.state.products.popularproducts}
                renderItem = {({item}) => (
                    <View>
                        <Item item={item} />
                    </View>
                )}
            />
            <TouchableOpacity style={styles.btn} >
                <Text style={styles.btnText}>View More</Text>
            </TouchableOpacity>
        </View>
           {/*==== Products Section END====*/}



</View>
            </ScrollView>
           
        );
    }
    
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
    productsContainer: {
        marginHorizontal: 20,
    },

    btn: {
        backgroundColor: '#22D4FF',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        marginBottom: 20
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
    textStyle: {
        fontSize: 15,
        marginBottom: 20
    }



});

export default Home;