import { View, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

export default function RadioButton({check = false}: {check?: boolean}) {
  return (
    <View style={[styles.radio, check && styles.check]}>
        {check &&<AntDesign name="check" size={14} color="white" />}
    </View>
  )
}

const styles = StyleSheet.create({
    radio: {
        width: 20,
        height: 20,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#4EA8DE',
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center'
    },
    check: {
        backgroundColor: '#5E60CE',
        borderWidth: 0,
    }
})