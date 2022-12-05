import { Module } from '@nestjs/common';
import { NotificationGateway } from './gateway/notification/notification.gateway';
import { NotificationsService } from './notifications.service';
import { Notification, NotificationSchema } from './schema/notification.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsController } from './notifications.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notification.name, schema: NotificationSchema },
    ]),
  ],
  providers: [NotificationGateway, NotificationsService],
  controllers: [NotificationsController],
})
export class NotificationsModule {}
