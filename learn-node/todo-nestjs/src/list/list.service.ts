import { Injectable } from '@nestjs/common';

@Injectable()
export class ListService {
  getList() {
    return {
      code: 0,
      data: [1, 2, 3, 4, 5, 6],
    };
  }
}
