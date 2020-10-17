import axios from 'axios';

const api = axios.create({
    // ip do local do pc se tiver rodando no celular fisico e para todos os outros casos
    baseURL: 'http://192.168.0.102:3333'

    // emulador do ios: substitui o ip pelo  localhost
    // emulador do android: rodar no terminal: adb reverse tcp:3333 tcp: 3333
});

export default api;