import { icons } from "@/constants/icons"
import { Text, View, Image, TextInput } from "react-native"

interface Props {
  placeholder: string
  onPress?: () => void
  value?: string
  onChangeText?: (text: string) => void
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#AB8BFF" />

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#A8B5DB"
        className="flex-1 text-white ml-2"
      />
    </View>
  )
}

export default SearchBar