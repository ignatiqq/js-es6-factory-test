import { IBlockOptionsStyles } from "../layouts/Blocks/types";

class StylesHelper {

    styles:IBlockOptionsStyles;

    constructor(styles: IBlockOptionsStyles ) {
        this.styles = styles;
    }

    parseCSS() {
        const toString = (key: keyof typeof this.styles) => `${key}: ${this.styles[key]};`;
        const styles = Object.keys(this.styles).map(toString);
        return styles.join(" ");
    }
}

export default StylesHelper;