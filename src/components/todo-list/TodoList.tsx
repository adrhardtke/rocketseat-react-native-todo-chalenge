import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import EmptyList from './components/empty-list/EmptyList'
import TodoItem from './components/todo-item/TodoItem'

type Props = {
    list: {
        title: string, 
        done: boolean
    }[], 
    onRemove: (todoName: string) => void
    onToggleDone: (todoName: string) => void
}

export default function TodoList({list, onRemove, onToggleDone}: Props) {
    const [info, setInfos] = useState({
        created: 0,
        done: 0
    })

    useEffect(() => {
        const done = list.reduce((previous, current) => {
            return previous += current.done ? 1 : 0;
        },0)
        setInfos({
            created: list.length - done,
            done
        })
    },[list])

  return (
    <View style={styles.container}>
        <View style={styles.infos}>
            <View style={styles.created}>
                <Text style={styles.createdText}>Criadas</Text>
                <Text style={styles.createdCount}>{info.created}</Text>
            </View>
            <View style={styles.done}>
                <Text style={styles.doneText}>Concluídas</Text>
                <Text style={styles.doneCount}>{info.done}</Text>
            </View>
        </View>
        <View style={styles.todoList}>
            {!list.length && <EmptyList />}
            {
                list.map(todo => (
                    <TodoItem key={todo.title} title={todo.title} done={todo.done} onRemove={onRemove} onToggleDone={onToggleDone} />
                ))
            }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 56,
        padding: 24,
    },
    infos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 20
    },
    created: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center'
    },
    createdText: {
        color: '#4EA8DE',
        fontWeight: 'bold',
    },
    createdCount: {
        color: '#fff',
        backgroundColor: '#333',
        borderRadius: 99,
        paddingVertical: 2,
        paddingHorizontal: 8
    },
    done: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center'
    },
    doneText: {
        color: '#8284FA',
        fontWeight: 'bold',
    },
    doneCount: {
        color: '#fff',
        backgroundColor: '#333',
        borderRadius: 99,
        paddingVertical: 2,
        paddingHorizontal: 8
    },
    todoList: {
        gap: 8
    }
})