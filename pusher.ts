import Pusher from "pusher"
import pusher from "pusher"
import ClientPusher from "pusher-js"

export const serverPusher = new Pusher({
    appId: "1510152",
    key: "55c3f5a816d5884188a9",
    secret: "0ef271e2726eea67bc3c",
    cluster: "us2",
    useTLS: true
})


export const clientPusher = new ClientPusher('55c3f5a816d5884188a9', {
    cluster: 'us2'
})