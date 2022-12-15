import { Formik } from 'formik';
import React, { useState } from 'react'
import { useRef } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, TextInput } from "react-native"
import { AndroidSafeAreaView, ButtonComponent, GoBack, Header } from '../components';

const PasswordVerify = ({ navigation }: any) => {
    
    //--------- * STATES DECLARE * ---------

    //--------- * REFS DECLARE * ---------
    const num1Ref = useRef()
    const num2Ref = useRef()
    const num3Ref = useRef()
    const num4Ref = useRef()

    //--------- * CONSTS DECLARE * ---------
    const arrNums = [num1Ref, num2Ref, num3Ref, num4Ref]

    //--------- * FUNCTIONS DECLARE * ---------
    const handleChange = (text: string, index: number) => {
        if (text == "" && index > 0) {
            arrNums[index - 1].current.focus()
        }
            
        if(text !== "" && index < 3)
            arrNums[index + 1].current.focus()
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
                        <Text className='text-2xl font-bold text-center mt-5 tracking-wide'>Verify Code</Text>
                        <Text className='text-center px-8 mt-2 text-gray-400'>Enter your verification code from your email or phone number that we’ve sent</Text>
                        </View>
                        <View className='pt-28'>
                            <Formik
                                initialValues={{num1: 0, num2: 0, num3: 0, num4: 0}}
                            >
                            {
                                (props: any) => {
                                    let inputs = [
                                        { value: props.values.num1, handleChange: props.handleChange('num1') },
                                        { value: props.values.num2, handleChange: props.handleChange('num2') },
                                        { value: props.values.num3, handleChange: props.handleChange('num3') },
                                        { value: props.values.num4, handleChange: props.handleChange('num4') }
                                    ]

                                    return (
                                        <View className='space-y-28'>
                                            <View className='flex-row justify-between mx-12 '>
                                                {
                                                    inputs.map((item, index) => (
                                                        <TextInput
                                                            key={index}
                                                            className={`border-[1px] border-gray-400 w-12 focus:border-primary-600 h-12 rounded-md`}
                                                            maxLength={1}
                                                            textAlign="center"
                                                            keyboardType='phone-pad'
                                                            value={item.value}
                                                            onChangeText={(text) => {
                                                                handleChange(text, index)
                                                                item.handleChange
                                                            }}
                                                            returnKeyType='next'
                                                            ref={arrNums[index]}
                                                        />
                                                    ))
                                                }

                                            
                                            
                                            </View>
                                            <View>
                                            <ButtonComponent
                                                title='Verify'
                                                className='mx-6 h-[50px] bg-primary-600 justify-center rounded-md'
                                                titleStyle='text-white'
                                                />
                                                </View>
                                        </View>
                                    )
                                    
                                }
                            }
                            </Formik>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </AndroidSafeAreaView>
    );
}

export default PasswordVerify