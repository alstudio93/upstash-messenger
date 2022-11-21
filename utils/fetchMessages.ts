import { Message } from "../typings";

const fetcher = async () => {
    const res = await fetch('/api/getMessages');
    const data = await res.json();
    const messages = data.messages as Message[];

    return messages;
}

export default fetcher;