import { TextInput } from "react-native"
import { globalStyles } from "../styles/globalStyles"

export type TCustomInputProps = {
    placeHolder: string;
    value: string;
    onChangeText: (text: string) => void
}

const CustomInput = (props: TCustomInputProps) => {
    return (
        <TextInput
            placeholder={props.placeHolder}
            placeholderTextColor={globalStyles.CINZA}
            style={{
                borderColor: globalStyles.CINZA,
                borderWidth: 1,
                height: 45,
                borderRadius: 5,
                textDecorationColor: "red",
                padding: 5
            }}
            value={props.value}
            onChangeText={props.onChangeText}
        />
    )
}

export default CustomInput