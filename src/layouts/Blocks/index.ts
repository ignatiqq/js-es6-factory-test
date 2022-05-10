import type { IBlockOptions, IBlockOptionsHandlers } from "./types";
import StylesHelper from "../../utils/StylesHelper";

class Block {

    value: string;
    options: IBlockOptions;

    static constructors = {};

    static factory(Type: string, { options, value }: {options: IBlockOptions, value: number | boolean | string}) {
        if(Block.constructors[Type as keyof typeof Block.constructors]) {
            return new (Block.constructors[Type as keyof typeof Block.constructors] as any)(value, options);
        } else {
            throw new Error(`Конструктора для типа ${Type} не существует`);
        }
    }

    constructor(value: string, options: IBlockOptions) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error("Method toHTML() must be implemented in child class");
    }

}

class Image extends Block {

    constructor(value: string, options: IBlockOptions) {
        super(value, options);
    }

    template(styles?:string, handlers?: IBlockOptionsHandlers) {
        const style = styles ?? "";
        const handler = handlers ?? "";
        return `<img styles="${style}" src=${this.value} />`
    }

    toHTML() {
        const { styles, handlers } = this.options;
        let css;
        if(styles){ 
            css = new StylesHelper(styles);
            css = css.parseCSS();
        }
        return this.template(css);
    }
}

class Title extends Block {

    constructor(value: string, options: IBlockOptions) {
        super(value, options);
    }

    template(styles?:string, handlers?: IBlockOptionsHandlers) {
        const style = styles ?? "";
        const handler = handlers ?? "";
        return `<h1 styles="${style}">${this.value}</h1>`
    }

    toHTML() {
        const { styles, handlers } = this.options;
        let css;
        if(styles){ 
            css = new StylesHelper(styles);
            css = css.parseCSS();
        }
        return this.template(css);
    }
}

Block.constructors = {...Block.constructors, Image, Title};

export default Block;