import React, { useState } from 'react'
import Logo from '../../../assets/Logo'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import AddIcon from '../../../assets/Add'
import TodoList from '../../components/todo-list/TodoList'

export default function Todos() {
    const [borderColor, setBorderColor] = useState('#262626')
    const [todoName, setTodoName] = useState('')
    const [todos, setTodos] = useState<{ title: string, done: boolean}[]>([{
        done: false,
        title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.'
    }, {
        done: true,
        title: 'Integers urna interdum massa libero auctor neque turpis turpis semper.'
    }])

    const addTodo = () => {
        if(todos.map(todo => todo.title).includes(todoName)) {
            return Alert.alert('Tarefa já existente', 'Esta tarefa já existe', [
                {
                    text: 'Ok',
                    style: 'destructive'
                }
            ])
        }
        setTodos(prevState => [{title: todoName, done: false}, ...prevState])
        setTodoName('')
    }

    const handleRemove = (removeName: string) => {
        Alert.alert('Remover item', `Tem certeza que deseja remover este item ?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTodos(prevState => [...prevState].filter(todo => todo.title !== removeName))
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    const handleToggleDone = (todoName: string) => {
        setTodos(prevState => [...prevState].map(todo => {
            if(todo.title === todoName) {
                return ({
                    ...todo,
                    done: !todo.done
                })
            }
            return todo
        }))
    }

  return (
    <View style={styles.background}>
        <View style={styles.Header}>
            <View style={styles.HeaderContent}>
                <Logo />
                <View style={styles.inputWrapper}>
                    <TextInput 
                        style={[styles.input, { borderColor }]} 
                        placeholder='Adicione uma nova tarefa' 
                        placeholderTextColor={'#808080'}
                        value={todoName}
                        onBlur={ () => setBorderColor('#262626') }
                        onFocus={ () => setBorderColor('#5E60CE') } 
                        onChangeText={text => setTodoName(text)}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={addTodo} disabled={todoName.length === 0}>
                        <AddIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <TodoList list={todos} onRemove={handleRemove} onToggleDone={handleToggleDone} />
    </View>
  )
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#0D0D0D',
        height: 173,
        padding: 24,
    },
    HeaderContent: {
        marginTop: 45,
        height: '100%',
        alignItems: 'center',
    },
    background: {        
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    inputWrapper: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 44,
        alignItems: 'center',
        gap: 4
    },
    input: {
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#262626',
        flex: 1,
        padding: 16,
        fontSize: 16,
        height: 54,
        color: '#F2F2F2'
    },
    addButton: {
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 54,
        borderRadius: 6
    }
})