import { ZodType } from 'zod';
import { HasValueGreaterThanTenRule } from '@app/rules/greater.than.example.rule';
import { HasAtLeastTwoArrayItemsRule } from '@app/rules/has.at.least.two.items.rule';
import { OrConditionalExampleRule } from '@app/rules/or.conditional.example.rule';
import { AndConditionalExampleRule } from '@app/rules/and.conditional.example.rule';

export const Rules = [
  'AndConditionalExampleRule',
  'HasAtLeastTwoArrayItemsRule',
  'HasValueGreaterThanTenRule',
  'OrConditionalExampleRule',
] as const;

export type Rules = typeof Rules[number];

export const RuleMapping: Record<Rules, ZodType> = {
  ['AndConditionalExampleRule']: AndConditionalExampleRule,
  ['HasAtLeastTwoArrayItemsRule']: HasAtLeastTwoArrayItemsRule,
  ['HasValueGreaterThanTenRule']: HasValueGreaterThanTenRule,
  ['OrConditionalExampleRule']: OrConditionalExampleRule,
};

export type RuleMapping = typeof RuleMapping;

export const allRules = () => Array.from(Rules.values());
export const matchRule = (rule: Rules, data: Record<string, unknown>) =>
  RuleMapping[rule].safeParse(data).success;
