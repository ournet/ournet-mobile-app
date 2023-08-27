import React from "react";
import {FlatList, Text, View} from "react-native";
import useTrendingTopics from "../hooks/useTrendingTopics";
import {Locale} from "../common/types";

type Props = {
  locale: Locale;
};

export const TrendingTopicsList: React.FC<Props> = ({locale}) => {
  const topics = useTrendingTopics(locale);
  if (!topics) return null;
  return (
    <View>
      <FlatList
        data={topics}
        renderItem={({item}) => (
          <Text style={{color: "black"}}>{item.name}</Text>
        )}
      />
    </View>
  );
};
