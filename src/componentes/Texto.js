import react from "react";
import { StyleSheet } from "react-native";

export default function Texto({children,style}){
    let etilos = estilos.texto;

    if(style?.fontWeight === 'bold'){

    }
    return <Text style={[style,estilos]}>{children} </Text>
}
const estilos = StyleSheet.create({
    texto:{
        fontFamily:'MontserratRegular',
        fontWeight:'normal',
    },
    textoNegrito:{
        fontFamily:'MontserratBold',
        fontWeight:'normal'
    }
})