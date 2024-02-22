import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // 사용하는 데이터베이스 타입
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'sils',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 엔티티 파일 위치
      synchronize: true, // 개발 환경에서만 사용 권장
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}