import Block from "./layouts/Blocks";
import App from "./app";
import type { IBlock } from "./layouts/Blocks/types";

const data:IBlock[] = [
    {
       type: 'Title',
       value: 'Hello world',
       options: {
           styles: {
               color: "#000"
           }
       }
    },
    {
        type: 'Image',
        value: 'https://static.remove.bg/remove-bg-web/a8b5118d623a6b3f4b7813a78c686de384352145/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png',
        options: {
            styles: {
                "max-width": "250px",
                "width": "100%"
            }
        }
    },
]

window.addEventListener("DOMContentLoaded", () => {
    const html = new App(data).init();
    document.body.insertAdjacentHTML("beforeend", html);
});