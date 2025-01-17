import { useUserStore } from '@/src/store/useUserStore';
import { router } from 'expo-router';
import { replace } from 'expo-router/build/global-state/routing';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen() {
  const [user, setUser] = useState({
    email:"",
    password:""
  });
  const {users, login, isLogged}=useUserStore()

useEffect(()=>{
  if(isLogged) router.replace('/home')

},[isLogged])
  const handleLogin = () => {
    if (user.email === '' || user.password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else {
      login(user)
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="e-mail"
        value={user.email}
        onChangeText={(value)=>setUser({...user, email:value})}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={user.password}
        onChangeText={(value)=>setUser({...user, password:value})}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {router.push("/sign-up")}}
        style={styles.linkButton}
      >
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkButton: {
    marginTop: 20,
  },
  linkText: {
    color: '#007bff',
    fontSize: 14,
  },
});
