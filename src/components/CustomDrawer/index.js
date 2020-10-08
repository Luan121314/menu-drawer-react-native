import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import imageUsr from '../../assets/user.png'

function CustomDrawer({ ...props }) {
    return (
        <View style={styles.container}>
            <View style={styles.userArea}  >
                <Image source={imageUsr} style={styles.user} />
                <Text style={styles.name} >Luan Correia</Text>
                <Text style={styles.email} >luan.staner@gmail.com</Text>
            </View>
            <DrawerNavigatorItems {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    }, userArea: {
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 10
    }, user: {
        width: 55,
        height: 55
    }, name: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold'
    }, email: {
        fontSize: 15
    }
})

export default CustomDrawer;