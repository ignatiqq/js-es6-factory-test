export interface IBlock {
    type: string,
    value: string | number | boolean,
    options?:IBlockOptions
}

export interface IBlockOptions {
    styles?: IBlockOptionsStyles,
    handlers?: IBlockOptionsHandlers
}

export interface IBlockOptionsStyles {
    [key:string]: string
}

export interface IBlockOptionsHandlers {
    [key:string]: (data?: any) => any
}