import {Controller, Get} from '@nestjs/common';

@Controller()
export class StatusController {

  @Get('ping')
  ping(): string {
    return 'pong';
  }
}
