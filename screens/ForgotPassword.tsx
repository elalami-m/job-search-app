import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView, ButtonComponent, GoBack, Header, PhoneIndicatifComponent, TextInputComponent } from "../components";
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import CountryPicker from 'react-native-country-picker-modal'
import {MaterialCommunityIcons} from "@expo/vector-icons"

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "ForgotPassword">;
};



const ForgotPassword: React.FC<Props> = ({ navigation }) => {


    type typeInput = ("email" | "phone")

    const [inputType, setInputType] = useState<typeInput>('email')

    const handlePress = (type: typeInput) => {
        type == "email" ? setInputType('email') : setInputType('phone')
    }

  return (
    <AndroidSafeAreaView className='flex-1'>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <Header leftComponent={<GoBack back={() => navigation.goBack()} />} />
        <ScrollView className='flex-1 '>
          <View className='pt-20'>
            <View>
              <Text className='text-center text-primary-600 text-xl font-bold'>Joby</Text>
              <Text className='text-2xl font-bold text-center mt-5 tracking-wide'>Forgot Password</Text>
              <Text className='text-center px-8 mt-2 text-gray-400'>Enter your email or phone number, we will send you verification code</Text>
            </View>
            <View className='pt-28 items-center '>
              <View className="bg-gray-200 h-12 items-center justify-center rounded-full p-1">
                <View className="flex-row h-full">
                  <ButtonComponent
                    title="E-mail"
                    className={`w-[38%] ${inputType == "email" && "bg-white"} rounded-full justify-center`}
                    onPress={() => handlePress('email')}
                  />
                  <ButtonComponent
                    title="Phone number"
                    className={`w-[38%]  rounded-full ${inputType == "phone" && "bg-white"} justify-center`}
                    onPress={() => handlePress('phone')}
                  />
                </View>
              </View>
              <View className="px-6 w-full pt-10 space-y-32">
                <View>
                  <InputTypeChoice inputType={inputType} />
                </View>
                <View>
                  <ButtonComponent
                    title="Send Code"
                    className=' h-[50px] bg-primary-600 justify-center rounded-md'
                    titleStyle='text-white'
                  />
                </View>
              </View>
            </View>
            
             
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </AndroidSafeAreaView>
  );
};


const InputTypeChoice = ({inputType} : {inputType: ('phone' | 'email')}) => {
  return inputType === "phone" ? (
    <TextInputComponent
      leftIcon={
        <PhoneIndicatifComponent />
      }
      className="border-[1px] border-gray-300  h-12 rounded-xl"
    />
  ) : (
    <TextInputComponent
      placeholder="E-mail"
      className="border-[1px] border-gray-300  h-12 rounded-xl"
      leftIcon={
        (color = "#d1d5dd") =>
          <MaterialCommunityIcons
            name="email-outline"
            size={19}
            color={color}
          />
      }
    />
  )
}


export default ForgotPassword;