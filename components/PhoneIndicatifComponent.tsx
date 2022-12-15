import { View } from "react-native";
import  CountryPicker  from "react-native-country-picker-modal";


const PhoneIndicatifComponent = () => {
    return (
        <View className="border-gray-300 border-r-[1px] pr-3">
            <CountryPicker
                countryCode="FR"
                withEmoji
                withCallingCode
                withFlagButton
                withCallingCodeButton
                withFilter
                withAlphaFilter
            />
        </View>
    );
};

export default PhoneIndicatifComponent;