import { Engine } from 'json-rules-engine';
import { greaterThanExampleRule } from '@app/rules/greater.than.example.rule';
import { hasSizeExampleRule } from '@app/rules/has.size.example.rule';
import { hasMinimalLengthOperator } from '@app/operators/has.minimal.length';

const rules = [greaterThanExampleRule, hasSizeExampleRule];
const customOperators = [hasMinimalLengthOperator];

export const createJsonRuleEngine = (): Engine => {
  const engine = new Engine(rules, { allowUndefinedFacts: true });
  customOperators.forEach((operator) => engine.addOperator(operator));
  return engine;
};
