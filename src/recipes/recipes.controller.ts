import { Controller, Get, Post } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly RecipesService: RecipesService) {}

  @Post('add')
  async addRecipes() {
    return 'Added new recipe successfully';
  }

  @Get('all')
  async viewRecipes() {
    return 'Here is a list of recipes';
  }
}
