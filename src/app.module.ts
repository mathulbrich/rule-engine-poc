import { Module } from '@nestjs/common';
import { HealthController } from '@app/controllers/health.controller';
import { RuleValidationService } from '@app/services/rule.validation.service';
import { ValidateRuleController } from '@app/controllers/validate.rule.controller';

@Module({
  imports: [],
  controllers: [HealthController, ValidateRuleController],
  providers: [RuleValidationService],
})
export class AppModule {}
