import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ImageBackground, Pressable } from 'react-native'
import cafeimg from '@/assets/images/cafe_preto.jpg'
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={cafeimg}
      resizeMode="cover"
      style = {styles.image}
      >
        <Text style={styles.text}> Coffe Shop </Text>
        <Link href="/contact" style={ {marginHorizontal: 'auto'} } asChild>
          <Pressable style = {styles.button}>
            <Text style = {styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>

        <Link href="/menu" style={ {marginHorizontal: 'auto'} } asChild>
          <Pressable style = {styles.buttonMenu}>
              <Text style = {styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  text:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 120,
  },    

  link:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },   
  
  button:{
    height:50,
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: 6,
    marginBottom: 20,
  },

  buttonMenu:{
    height:50,
    width:100,
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: 10,
  },

  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },

  image:{
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
})