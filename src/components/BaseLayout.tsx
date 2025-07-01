import { Text, TouchableOpacity, View } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import { ReactNode } from "react"
import { useNavigation } from "@react-navigation/native"
import DropdownAlert, { DropdownAlertType } from "react-native-dropdownalert"

export type TBaseLayoutProps = {
    children: ReactNode;
    headerTitle: string
}

let alert = (_data: any) => new Promise(res => res(_data));

const BaseLayout = (props: TBaseLayoutProps) => {
    const navigation = useNavigation()

    const onPressNotification = () => {
        alert({
            type: DropdownAlertType.Info,
            title: 'Notificação',
            message: 'Ainda não faco nada!',
        });
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#E9E9E9",
        }}>

            <View style={{
                height: 50,
                backgroundColor: "#FFCC03",
                justifyContent: "center",
                alignItems: "center"
            }} >
                <View style={{
                    width: "95%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity
                            onPress={navigation.goBack}
                            activeOpacity={0.3}
                        >
                            <Feather name="menu" size={30} />
                        </TouchableOpacity>

                        <Text style={{
                            fontSize: 24,
                            marginLeft: 30,
                            letterSpacing: 2
                        }}>
                            {props.headerTitle}
                        </Text>

                    </View>
                    <TouchableOpacity
                        onPress={onPressNotification}
                        activeOpacity={0.3}
                        style={{
                            width: "10%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Ionicons name="notifications" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            {props.children}
            <DropdownAlert
                alert={func => (alert = func)}
                showCancel={false}
                dismissInterval={3500}
            />
        </View >

    )
}

export default BaseLayout