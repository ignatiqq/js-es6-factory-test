import type { IBlock } from "./layouts/Blocks/types";
import Block from "./layouts/Blocks";

class App {

    blocks: IBlock[];

    constructor(blocks: IBlock[]) {
        this.blocks = blocks
    }

    init() {
        const html = this.blocks.map(item => {
            const options = item.options ?? {};
            return Block.factory(item.type, {options: options, value: item.value}).toHTML();
        })
        return `<div id="site">${html}</div>`
    }

}

export default App;