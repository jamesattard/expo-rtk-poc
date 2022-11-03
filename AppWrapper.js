import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useGetPokemonByNameQuery } from "./src/app/services/pokemon";

export default function AppWrapper() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("ditto");

  return (
    <View>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        <>
          <Text>{data.species.name}</Text>
          <Image
            source={{ uri: data.sprites.front_shiny, width: 200, height: 200 }}
          />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({});
