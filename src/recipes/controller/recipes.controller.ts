import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RecipeDto } from '../recipe.dto';
import { RecipesService } from '../service/recipes.service';

@Controller('recipe')
export class RecipesController {
  constructor(private readonly RecipesService: RecipesService) {}

  @Post('add')
  @UsePipes(ValidationPipe)
  async addRecipes(@Body() recipeDto: RecipeDto) {
    return recipeDto;
  }

  @Get('all')
  async viewRecipes() {
    return 'Here is a list of recipes';
  }
}
