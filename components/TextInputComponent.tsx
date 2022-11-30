import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {useState, ReactElement, FunctionComponent} from "react"

type Props = {
    placeholder?: string,
    className?: string,
    type?: ('text' | 'password' | 'numeric'),
    password?: boolean,
    leftIcon?: JSX.Element | ReactElement | FunctionComponent,
};

const TextInputComponent: React.FC<Props> = ({ 
    placeholder,
    className,
    type,
    password,
    leftIcon
}) => {
    
    const [eye, setEye] = useState(true)

    const hideShow = () => {
        setEye(!eye)

    }

    let addWidth = 8

    // Add width while some compnent is undefined
    leftIcon == undefined ? addWidth += 2 : null
    !password ? addWidth += 2 : null

    console.log(addWidth);

    return (
        <View className={`flex flex-row justify-between ${className}`}>
            {
                leftIcon !== undefined ? (
                    <View className="justify-center items-center w-2/12">
                        {typeof (leftIcon) === 'function' ? leftIcon() : leftIcon}
                    </View>
                ) : 
                    null
            }

            
            
            <TextInput
                placeholder={placeholder}
                secureTextEntry={!password ? false : eye }
                className={` ${!password && leftIcon == undefined ? "w-full pl-4" : `w-${addWidth}/12`}`}
            />
            {
                password ? (
                    <TouchableOpacity
                        className="w-2/12 justify-center items-center"
                        onPress={hideShow}
                    >
                        <Ionicons name={eye ? "eye" : "eye-off"} size={22} color="#d1d5dd" />
                    </TouchableOpacity>
                ) :
                    (
                        null
                    )
            }
        </View>
    );
};

export default TextInputComponent;