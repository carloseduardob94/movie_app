import { icons } from "@/constants/icons"
import { Text, View, Image } from "react-native"

const Profile = () => {
  return (
    <View className="flex-1 px-10 bg-primary">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image
          source={icons.person}
          className="size-10"
          tintColor="#FFF"
        />
        <Text className="text-base text-gray-500">Profile</Text>
      </View>
    </View>
  )
}

export default Profile