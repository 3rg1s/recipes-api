import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { RecipesController } from './controller/recipes.controller';
import { RecipesService } from './service/recipes.service';

@Module({
  imports: [AuthModule],
  controllers: [RecipesController],
  providers: [RecipesService],
  exports: [RecipesService],
})
export class RecipesModule {}
