import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item';
import { ItemStatus } from './item-status.enum';
import { Item } from './items.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.findById(id);
  }

  @Post()
  create(@Body() createItem: CreateItemDto): Item {
    return this.itemsService.create(createItem);
  }

  @Patch(':id')
  updateToDoStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('status') status: ItemStatus,
  ): Item {
    return this.itemsService.updateToDoStatus(id, status);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): string {
    return this.itemsService.delete(id);
  }
}
