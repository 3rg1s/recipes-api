import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeDto } from '../dtos/recipe.dto';
import { recipeEntity } from '../models/recipe.entity';

@Injectable()
export class RecipesService {
  @InjectRepository(recipeEntity)
  private readonly recipeReposirtory: Repository<recipeEntity>;

  async add(Recipe: RecipeDto) {
    await this.recipeReposirtory.save(Recipe);
  }
}
