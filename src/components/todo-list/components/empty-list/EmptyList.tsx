import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Clipboard from '../../../../../assets/Clipboard'

export default function EmptyList() {
  return (
    <View style={styles.empty}>
        <Clipboard />
        <Text style={styles.emptyText1}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptyText2}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    empty: {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: '#333',
        borderTopWidth: 1,
        borderStyle: 'solid',
        paddingTop: 48
    },
    emptyText1: {
        color: '#808080',
        fontWeight: 'bold',
        marginTop: 16
    },
    emptyText2: {
        color: '#808080',
    }
})