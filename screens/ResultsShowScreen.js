import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const ResultsShowScreen = () => {
  const navigation = useNavigation();
  const {
    params: { imgUrl, title, calories, ingredientLines },
  } = useRoute();
  //console.log(route.params.title)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Image source={{ uri: imgUrl }} className="h-48 w-full" />
      <TouchableOpacity
        className="absolute top-8 left-4 p-2 bg-gray-100 rounded-full"
        onPress={navigation.goBack}
      >
        <ArrowLeftIcon size={20} color={"black"}/>
      </TouchableOpacity>
      <View className="px-4">
        <Text className="text-center font-bold text-xl mt-6">{title}</Text>
        <Text className="text-center text-sm mt-2 text-gray-600">
          Contains {Math.round(calories)} Calories
        </Text>
        <Text className="text-lg font-bold mt-6 mb-2">Ingredients</Text>
        {ingredientLines.map((list) => (
          <Text key={list}>👉 {list}</Text>
        ))}
      </View>

    </View>
  );
};

export default ResultsShowScreen;
