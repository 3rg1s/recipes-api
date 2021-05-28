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
import { RecipeDto } from '../dtos/recipe.dto';
import { recipeEntity } from '../models/recipe.entity';
import { RecipesService } from '../service/recipes.service';

@Controller('recipe')
export class RecipesController {
  constructor(private readonly RecipesService: RecipesService) {}

  @Post('add')
  @UsePipes(ValidationPipe)
  async addRecipes(@Body() recipeDto: RecipeDto) {
    this.RecipesService.add(recipeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  @UsePipes(ValidationPipe)
  async viewRecipes() {
    return this.RecipesService.listall();
  }
}
