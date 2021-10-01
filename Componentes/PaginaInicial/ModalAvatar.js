import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import stylesModal from '../../Stylesheets/stylesModal';
import Botao from '../Util/Botao';

const ModalAvatar = (props) => {
    const [avatar, setAvatar] = useState(0);
    
    // Caminhos manuais porque require não aceita caminho dinâmico
    const opcoesAvatar = [
        require('../../assets/avatares/avatar0.png'),
        require('../../assets/avatares/avatar1.png'),
        require('../../assets/avatares/avatar2.png'),
        require('../../assets/avatares/avatar3.png'),
        require('../../assets/avatares/avatar4.png'),
        require('../../assets/avatares/avatar5.png'),
        require('../../assets/avatares/avatar6.png'),
        require('../../assets/avatares/avatar7.png'),
    ];

    return (
        <Modal 
            visible={props.visible}
            onRequestClose={() => props.onRequestClose()}
            transparent={true}
        >
            <View style={stylesModal.container}>
                <View style={stylesModal.modal}>
                    <Text style={stylesModal.header}>Selecionar avatar</Text>
                    <Image 
                        source={opcoesAvatar[avatar]} 
                        style={stylesModal.avatar}
                    />

                    <View style={stylesModal.avatarList}>
                        {
                            opcoesAvatar.map((opcao, index) =>
                                <View key={index} style={stylesModal.avatarOption}>
                                    <TouchableOpacity onPress={() => setAvatar(index)}>
                                        <View>
                                            <Image source={opcao} style={stylesModal.avatarOptionImage}></Image>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>

                    <View style={stylesModal.modalButton}>
                        <Botao title="OK" onPress={() => props.onRequestClose(avatar)} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalAvatar;