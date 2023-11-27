import { StatusBar } from 'expo-status-bar';
import Todos from './src/pages/Todos/Todos';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Todos />
    </>
  );
}