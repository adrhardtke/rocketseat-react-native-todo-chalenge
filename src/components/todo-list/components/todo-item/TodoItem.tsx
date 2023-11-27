import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import RadioButton from '../../../radio-button/RadioButton'

type Props = {
    title: string, 
    done: boolean, 
    onRemove: (todoName: string) => void, 
    onToggleDone: (todoName: string) => void
}

export default function TodoItem({title, done, onRemove, onToggleDone}: Props) {
  return (
    <TouchableOpacity onPress={() => onToggleDone(title)}>
        <View style={styles.container}>
            <RadioButton check={done} />
            <Text style={[styles.title, done && styles.checkTitle]}>{title}</Text>
            <FontAwesome style={styles.icon} name="trash-o" size={18} color="#808080" onPress={() => onRemove(title)} />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#333',
        backgroundColor: '#262626',
        boxShadow: '0 2 8 0 rgba(0, 0, 0, 0.06)',
        padding: 12
    },
    title: {
        color: '#F2F2F2',
        fontSize: 14,
        lineHeight: 20,
        flex: 1
    },
    checkTitle: {
        textDecorationLine: 'line-through',
        color: '#808080'
    },
    icon: {
        padding: 8
    }
})