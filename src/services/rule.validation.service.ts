import { Injectable } from '@nestjs/common';
import { allRules, matchRule } from '@app/rules-mapping';

interface Rule {
  id: string;
}

interface MatchedRules {
  rules: Rule[];
}

@Injectable()
export class RuleValidationService {
  public async validate(data: Record<string, unknown>): Promise<MatchedRules> {
    const matchedRules = allRules().filter((rule) => matchRule(rule, data));

    return {
      rules: matchedRules.map((event) => ({
        id: event,
      })),
    };
  }
}
