import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ValidateRuleResponse } from '@app/controllers/payload/validate.rule.response';
import { RuleValidationService } from '@app/services/rule.validation.service';

@Controller()
export class ValidateRuleController {
  public constructor(private readonly service: RuleValidationService) {}

  @HttpCode(200)
  @Post('/validate')
  public async validate(
    @Body() data: Record<string, unknown>,
  ): Promise<ValidateRuleResponse> {
    const { rules } = await this.service.validate(data);
    return ValidateRuleResponse.parse({
      rules,
    });
  }
}
