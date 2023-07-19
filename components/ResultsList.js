import React from "react";
import { ScrollView, Text } from "react-native";
import ResultCard from "./ResultCard";

const ResultsList = ({ results, heading }) => {
  if (!results.length) {
    return null;
  }
  return (
    <>
      <Text className="text-2xl font-bold ml-2 mt-4">{heading}</Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {results.map((r) => (
          <ResultCard
            key={r.recipe.uri}
            imgUrl={r.recipe.image}
            title={r.recipe.label}
            calories={r.recipe.calories}
            ingredientLines={r.recipe.ingredientLines}
          />
        ))}
      </ScrollView>
      {/* <FlatList
        horizontal
        date={results}
        keyExtractor={(result) => result.recipe.uri}
        renderItem={(item) => {
          return (
            <ResultCard
              imgUrl={item.recipe.image}
              title={item.recipe.label}
            />
          );
        }}
      /> */}
    </>
  );
};

export default ResultsList;
