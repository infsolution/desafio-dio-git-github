import { prop, getModelForClass } from '@typegoose/typegoose';

export class Url{
    @prop({ type: () => String })
    public hash!: string;
    @prop({ type: () => String })
    public urlOrigin!: string;
    @prop({ type: () => String })
    public shortedUrl!: string;
    @prop({ type: () => Number })
    public clikedNumber!: number;
}

export const URLModel = getModelForClass(Url)