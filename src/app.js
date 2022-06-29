import React from 'react'
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable,Linking} from 'react-native'

const colorGithub = '#010409';
const imageProfile = 'https://avatars.githubusercontent.com/u/92966724?v=4';
const colorFontGithub = '#C9D1D9';
const colorDarkFont = '#4F565E';
const urlToMyGithub = 'https://github.com/vitorcs1'; 

const App = ()=>{

    const handlePressGoToGithub = async () =>{
        console.log("Verificando o link");
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log("Link aprovado");
          await Linking.openURL(urlToMyGithub);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style={style.content}>
                <Image accessibilityLabel='Imagem do zoro de One Piece' style={style.avatar} source={{uri: imageProfile}}/>
                <Text accessibilityLabel='Nome Vitor Cardoso Silva' style={[style.defaultText, style.name]}>Vitor Cardoso Silva</Text>
                <Text accessibilityLabel='Nickname vitorcs1' style={[style.defaultText, style.nickname]}>vitorcs1</Text>
                <Text accessibilityLabel='software developer from São Paulo Brazil' style={[style.defaultText, style.description]}>Software developer from São Paulo, Brazil.</Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
         </SafeAreaView>
        );
}

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,//expandir a cor para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFont,
    },
    description:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFont,
        borderRadius: 10,
        padding: 20,
    },
})