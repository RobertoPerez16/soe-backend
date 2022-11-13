import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LicitacionDocument = Licitacion & Document;

@Schema({ timestamps: true })
export class Licitacion {
  @Prop()
  processNumber: string;

  @Prop()
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

  @Prop()
  contractLength: number;

  @Prop()
  terminationDate: string;

  @Prop()
  conditionInstallment: string;

  @Prop()
  contractAddress: string;

  @Prop()
  estimatedValue: string;

  @Prop()
  portion: boolean;

  @Prop()
  createdUserBy: string;
}

export const LicitacionSchema = SchemaFactory.createForClass(Licitacion);
