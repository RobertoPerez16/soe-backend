import { Module } from '@nestjs/common';
import { NotificationGateway } from './gateway/notification/notification.gateway';
import { NotificationsService } from './notifications.service';
import { Notification, NotificationSchema } from './schema/notification.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notification.name, schema: NotificationSchema },
    ]),
  ],
  providers: [NotificationGateway, NotificationsService],
})
export class NotificationsModule {}
