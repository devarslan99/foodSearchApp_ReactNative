import React, { useLayoutEffect } from "react";
import { Text, View, TextInput, SafeAreaView } from "react-native";
import { SearchIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView className="bg-gray-200 h-12 rounded-lg mx-4 flex flex-row mt-8 mb-2 px-4 items-center">
      <View className="mr-6">
        <SearchIcon size={35} color={"black"}/>
      </View>
      <TextInput
        className="flex-1 h-full text-lg"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        // onEndEditing={onTermSubmit}
        onSubmitEditing={onTermSubmit}
      />
      {/* <Text className="font-bold">SearchBar</Text> */}
    </SafeAreaView>
  );
};

export default SearchBar;
