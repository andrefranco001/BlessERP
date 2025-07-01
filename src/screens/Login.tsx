import React, { useCallback, useState } from "react"
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { globalStyles } from "../styles/globalStyles"
import BlessImage from "../assets/Bless.png"
import CustomInput from "../components/CustomInput"
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from "@react-navigation/native"
import DropdownAlert from 'react-native-dropdownalert';

const initialState = {
    usuario: "",
    senha: "",
    manterLogado: false
}

export enum DropdownAlertType {
    Info = 'info',
    Warn = 'warn',
    Error = 'error',
    Success = 'success',
}

let alert = (_data: any) => new Promise(res => res(_data));

const Login = () => {
    const [stateLocal, setStatelocal] = useState(initialState)
    const navigation = useNavigation()

    const onChangeUsuario = useCallback((text: string) => {
        setStatelocal(prevState => ({
            ...prevState,
            usuario: text
        }))
    }, [])

    const onChangeSenha = useCallback((text: string) => {
        setStatelocal(prevState => ({
            ...prevState,
            senha: text
        }))
    }, [])

    const onClickManterLogado = useCallback(() => {
        setStatelocal(prevState => ({
            ...prevState,
            manterLogado: !prevState.manterLogado
        }))
    }, [])

    const navigateToHome = () => {
        if (!stateLocal.usuario && !stateLocal.senha) {
            return alert({
                type: DropdownAlertType.Error,
                title: 'Usuário e senha',
                message: 'Favor informe seu usuário e senha!',
            });
        }
        if (!stateLocal.usuario) {
            return alert({
                type: DropdownAlertType.Error,
                title: 'Usuário',
                message: 'Favor informe seu usuário!',
            });
        }
        if (!stateLocal.senha) {
            return alert({
                type: DropdownAlertType.Error,
                title: 'Senha',
                message: 'Favor informe sua senha!',
            });
        }
        navigation.reset({
            index: 0,
            routes: [{ name: ('Home' as never), params: { nome: stateLocal.usuario } }],
        });
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#E3E3E3",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {/* StatusBar Setup */}
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FFCC03"
                translucent={false}
            />
            <View style={{
                backgroundColor: globalStyles.BRANCO,
                width: "90%",
                height: "60%",
                borderRadius: 10,
                alignItems: "center"
            }} >
                <Image source={BlessImage} resizeMode="contain" style={{
                    width: 150,
                    height: 150,
                    alignSelf: "center",
                    marginTop: 20
                }} />
                <View style={{
                    flex: 1,
                    width: "90%",
                }}>
                    <View style={{
                        height: 140,
                        justifyContent: "space-evenly",
                    }}>
                        <CustomInput
                            placeHolder="Usuário"
                            value={stateLocal.usuario}
                            onChangeText={onChangeUsuario}
                        />
                        <CustomInput
                            placeHolder="Senha"
                            value={stateLocal.senha}
                            onChangeText={onChangeSenha}
                        />

                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: "space-around"
                    }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <TouchableOpacity
                                onPress={onClickManterLogado}
                                style={{
                                    height: 40,
                                    width: 40,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }} activeOpacity={0.5}>
                                {stateLocal.manterLogado ? (
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",

                                    }}>
                                        <AntDesign
                                            name="check"
                                            size={15}
                                            color={globalStyles.BRANCO}
                                            style={{
                                                backgroundColor: "#FFCC03",
                                            }}
                                        />
                                    </View>
                                ) : (
                                    <Feather
                                        name="square"
                                        size={20}
                                    />
                                )
                                }
                            </TouchableOpacity>
                            <Text style={{
                                marginLeft: 20,
                                fontSize: 14,
                                color: globalStyles.CINZA,
                                letterSpacing: 2
                            }}>
                                Manter Logado
                            </Text>

                        </View>
                        <TouchableOpacity
                            onPress={navigateToHome}
                            activeOpacity={0.7}
                            style={{
                                height: 40,
                                width: "90%",
                                marginLeft: 10,
                                backgroundColor: "#FFCC03",
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 3 },
                                shadowOpacity: 0.5,
                                shadowRadius: 4,
                                elevation: 5,
                            }}>
                            <MaterialIcons
                                name="login"
                                size={18}
                            />
                            <Text style={{
                                color: globalStyles.PRETO,
                                fontSize: 16,
                                marginLeft: 5
                            }}>
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <DropdownAlert
                alert={func => (alert = func)}
                showCancel={false}
                dismissInterval={3500}
            />
        </View>
    )
}

export default Login
