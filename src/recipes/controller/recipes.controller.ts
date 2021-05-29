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
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('recipe')
export class RecipesController {
  constructor(private readonly RecipesService: RecipesService) {}

  @Post('add')
  @ApiCreatedResponse({ description: 'Recipe success' })
  @ApiBadRequestResponse({ description: 'Recipe failed' })
  async addRecipes(@Body() recipeDto: RecipeDto) {
    return this.RecipesService.add(recipeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Please provide an access token' })
  async viewRecipes() {
    return this.RecipesService.listall();
  }
}
