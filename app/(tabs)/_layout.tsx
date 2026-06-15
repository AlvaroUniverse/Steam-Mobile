import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign'; // Icones Vetores de alguém de fora "AntDesign"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// Tudo abaixo é definir o estilo do Tab Navigator, que são as opções que aparecem em baixopara selecionar para ir para em outra página

// "<Tabs></Tabs>" é a "criação" do Tab Navigator

// "screenOptions" é auto-explicativo

// "<Tab.Screen/>" é cada opção individualmente, sendo o "name" é o nome do arquivo que ele vai seguir para ir, enquanto na parte de "options" e "title" é para definir o que será escrito

const TabsLayout = () => {
  return (
    <Tabs 
        screenOptions={{
            tabBarActiveTintColor: "#66c0f4",
            tabBarInactiveTintColor: "#c7d5e0",
            tabBarStyle: {
                backgroundColor: "#2a475e",
                height: 90,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "600",
            },
            headerShown: false, 
        }}>
        <Tabs.Screen
        name='index'
        options={{
            title: "",
            tabBarIcon: ({color,size}) => (
                <AntDesign name="shopping" size={size} color={color} />
            )
        }}/>
        <Tabs.Screen
        name='auth'
        options={{
            title: "",
            tabBarIcon: ({color,size}) => (
                <FontAwesome6 name="shield" size={size} color={color} />
            )
        }}/>
        <Tabs.Screen
        name='settings'
        options={{
            title: "",
            tabBarIcon: ({color,size}) => (
                <Ionicons name='settings-outline' size={size} color={color}/>
            )
        }}/>
    </Tabs>
  )
}

export default TabsLayout