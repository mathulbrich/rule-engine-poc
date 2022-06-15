import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ValidateRuleResponse } from '@app/controllers/payload/validate.rule.response';
import { RuleValidationService } from '@app/services/rule.validation.service';
import { ExampleRequest } from '@app/controllers/payload/validate.rule.request';
import { ValidateSchema } from '@app/pipe/schema-validation-pipe';

@Controller()
export class ValidateRuleController {
  public constructor(private readonly service: RuleValidationService) {}

  @HttpCode(200)
  @Post('/validate')
  @ValidateSchema(ExampleRequest)
  public async validate(
    @Body() data: ExampleRequest,
  ): Promise<ValidateRuleResponse> {
    const { rules } = await this.service.validate(data);
    return ValidateRuleResponse.parse({
      rules,
    });
  }
}
