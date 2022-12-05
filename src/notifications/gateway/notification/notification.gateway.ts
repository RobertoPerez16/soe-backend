import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { CreateNotificationDto } from '../../dto/create-notification.dto';
import { NotificationsService } from '../../notifications.service';
@WebSocketGateway({
  cors: {
    origin: [
      'http://localhost:4200',
      'https://soe-enterprise-1c7cd.web.app',
      'https://soe-enterprise-1c7cd.web.app/login',
    ],
  },
})
export class NotificationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  notifications: any[] = [];

  constructor(private notificationService: NotificationsService) {}

  @SubscribeMessage('sendNotification')
  async handleNotification(
    client: Socket,
    createNotificationDto: CreateNotificationDto,
  ) {
    try {
      const response = await this.notificationService.create(
        createNotificationDto,
      );

      this.notifications.push(response);
      this.server.emit('newNotification', this.notifications);
    } catch (e) {
      console.log('Error: ', e);
      this.server.emit('newNotification', []);
    }
  }

  @SubscribeMessage('updateNotification')
  async updateNotification(client: Socket, id: string) {
    try {
      this.notifications = await this.notificationService.findAll();
      const index = this.notifications.findIndex((n: any) => n._id == id);
      if (index >= 0) {
        this.notifications[index].hasSeen = true;
      }
      this.server.emit('newNotification', this.notifications);
    } catch (e) {
      console.log('Error: ', e);
      this.server.emit('newNotification', []);
    }
  }

  handleConnection(client: Socket, ...args: any[]): any {
    console.log('client: ', client.id);
    console.log('connection made');
  }

  handleDisconnect(client: any): any {
    console.log('disconnected');
  }
}
