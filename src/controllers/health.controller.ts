import { Controller, Get } from '@nestjs/common';

interface Hello {
  message: string;
}

@Controller('/health')
export class HealthController {
  @Get()
  getHello(): Hello {
    return { message: 'Rule engine is running!' };
  }
}
