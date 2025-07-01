import { FlatList, Text, TouchableOpacity, View } from "react-native";
import BaseLayout from "../components/BaseLayout";
import HomeUser from "../components/HomeUser";
import { ReactNode, useCallback } from "react";
import { globalStyles } from "../styles/globalStyles";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Octicons from "react-native-vector-icons/Octicons"
import { useNavigation } from "@react-navigation/native";



export type TItemMenu = {
    icon: ReactNode;
    title: string;
    routeTo?: string
};

const itensMenu: Array<TItemMenu> = [
    { title: "Pré-Cadastro", icon: <FontAwesome name="user-plus" size={24} />, routeTo: "PreCadastro" },
    { title: "Clientes", icon: <FontAwesome name="users" size={24} />, routeTo: "Clientes" },
    { title: "Sincronizar", icon: <Octicons name="sync" size={24} />, },
];

export type THomeProps = {
    props: any
}

const Home = (props: THomeProps) => {
    const nome = props.props.route.params.nome


    const navigation = useNavigation()
    const onPressItem = (item: TItemMenu) => {
        if (item.routeTo) {
            return navigation.navigate(item.routeTo as never)
        }
    }

    const renderItem = useCallback(({ item }: { item: TItemMenu }) => {
        return (
            <TouchableOpacity
                onPress={() => onPressItem(item)}
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: globalStyles.BRANCO,
                    height: 100,
                    borderRadius: 10,
                    margin: 10,
                    flex: 1,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    elevation: 5,
                }}
            >
                {item.icon}
                <Text style={{ textAlign: "center", marginTop: 5, fontSize: 16 }}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    }, []);

    return (
        <BaseLayout headerTitle="Página Inicial">
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <HomeUser nome={nome} />

                <FlatList
                    style={{ flex: 1, width: "96%", marginTop: 10 }}
                    numColumns={3}
                    data={itensMenu}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                />
            </View>
        </BaseLayout>
    );
};

export default Home;
