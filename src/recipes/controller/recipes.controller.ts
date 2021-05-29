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
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('recipe')
export class RecipesController {
  constructor(private readonly RecipesService: RecipesService) {}

  @Post('add')
  @ApiCreatedResponse({ description: 'Recipe Added successfully' })
  @UsePipes(ValidationPipe)
  async addRecipes(@Body() recipeDto: RecipeDto) {
    this.RecipesService.add(recipeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Please provide a jwt' })
  @UsePipes(ValidationPipe)
  async viewRecipes() {
    return this.RecipesService.listall();
  }
}
