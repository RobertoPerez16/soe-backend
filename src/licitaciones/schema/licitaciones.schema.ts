import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LicitacionDocument = Licitacion & Document;

@Schema({ timestamps: true })
export class Licitacion {
  @Prop({ required: true })
  processNumber: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  state: string;

  @Prop()
  processType: string;

  @Prop()
  contractUnit: string;

  @Prop()
  previousPhase: string;

  @Prop()
  processValue: string;

  @Prop()
  contractType: string;

  @Prop()
  contractModalityJustification: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  contractLength: number;

  @Prop({ required: true })
  terminationDate: string;

  @Prop()
  conditionInstallment: string;

  @Prop({ required: true })
  contractAddress: string;

  @Prop({ required: true })
  estimatedValue: string;

  @Prop()
  portion: boolean;

  @Prop()
  createdUserBy: string;

  @Prop()
  biddingDates: any[];
}

export const LicitacionSchema = SchemaFactory.createForClass(Licitacion);
