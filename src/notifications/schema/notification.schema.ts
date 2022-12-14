import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true })
export class Notification {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  createdBy: string;

  @Prop()
  hasSeen: boolean;

  @Prop({ required: true })
  biddingId: string;

  @Prop()
  dateType: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
