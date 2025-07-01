import { View, Image, Text } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import { globalStyles } from "../styles/globalStyles"

const date = new Date()

export type THomeUserProps = {
    nome: string
}

const HomeUser = (props: THomeUserProps) => {


    return (
        <View style={{
            marginTop: 10,
            width: "90%",
            height: 100,
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: globalStyles.BRANCO,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            elevation: 5,
        }}>
            <View style={{
                width: "25%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
            }} >
                <Image source={require("../assets/maleUser.jpg")} style={{
                    width: 70,
                    height: 70
                }} />
            </View>

            <View style={{
                width: "65%",
                marginLeft: 10,
                justifyContent: "center"
            }} >
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 18
                }}>
                    Olá, {props.nome}
                </Text>
                <Text style={{
                    fontSize: 14,
                    color: globalStyles.CINZA_ICONES,
                    marginTop: 5
                }}>
                    Ultimo acesso: {`${date.toLocaleDateString()} ${date.toLocaleTimeString("pt-br")}`}
                </Text>

                <View style={{
                    flexDirection: "row",
                    marginTop: 5,
                    alignItems: "center",

                }}>
                    <AntDesign
                        name="check"
                        size={15}
                        color={globalStyles.BRANCO}
                        style={{
                            backgroundColor: "green",
                            borderRadius: 12,
                            padding: 1
                        }}
                    />
                    <Text style={{
                        fontSize: 14,
                        color: "green",
                        marginLeft: 5
                    }}>
                        Dados sincronizados
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default HomeUser