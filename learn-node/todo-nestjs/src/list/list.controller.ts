import { Controller, Get, Post, Request, Query } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('list') // 这个controller下面请求路径前面统一有list 
export class ListController {
  /**
   * 实例化 ListService
   * 相当于 this.listService = new ListService()
   */
  constructor(private listService: ListService) { }

  @Get()
  getList(): any {
    return this.listService.getList();
  }

  /**
   * post方法
   * 本地用rest client插件本地调试
   */
  @Post('/add')
  addTodo(): any {
    return this.listService.addTodo();
  }

  /**
   * get方法，获取参数 
   * 方式一：引入Request用来获取请求参数 req.query.xxx
   * 方式二：使用 @Query装饰器 query.xxx
   */
  // 方式一：
  // @Get('getTodoById')
  // getTodoById(@Request() req): any {
  //   const id = parseInt(req.query.id)
  //   return this.listService.getTodoById(id)
  // }

  // 方式二
  @Get('getTodoById')
  getTodoById(@Query() query): any {
    const id = parseInt(query.id)
    return this.listService.getTodoById(id)
  }

}
