import React from "react"
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Comic({ name, image }) {

    const styles = StyleSheet.create({
        container: {
            width: 300,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#DA0037',
            padding: 10,
            borderRadius: 10,
            margin: 10,
        },
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,

            elevation: 16,

        },
    });

    return (
      <View style={[styles.container, styles.shadow]}>
              <Image
                  source={{uri: image}}
                  style={{ width: 250, height: 400, borderRadius: 5, marginBottom: 5 }}
              />
              <Text style={{color: '#EDEDED', fontWeight: 'bold',}} >{name}</Text>
      </View>
    )
  }