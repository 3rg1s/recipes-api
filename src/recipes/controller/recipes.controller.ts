import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/guards/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
  @Get('all')
  async viewRecipes() {
    return 'Here is a list of recipes';
  }
}
