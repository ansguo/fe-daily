import { Controller, Get } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  // 实例化 ListService
  // 相当于 this.listService = new ListService()
  constructor(private listService: ListService) {}

  @Get()
  getList(): any {
    return this.listService.getList();
  }
}
