import { Injectable } from '@nestjs/common';
import { Engine } from 'json-rules-engine';
import { createJsonRuleEngine } from '@app/engine';

interface Rule {
  id: string;
}

interface MatchedRules {
  rules: Rule[];
}

@Injectable()
export class RuleValidationService {
  private readonly engine: Engine;
  constructor() {
    this.engine = createJsonRuleEngine();
  }

  public async validate(data: Record<string, unknown>): Promise<MatchedRules> {
    const engineResult = await this.engine.run(data);
    return {
      rules: engineResult.events.map((event) => ({
        id: event.type,
      })),
    };
  }
}
