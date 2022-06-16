## Rule Engine POC

### Approaches

##### In-code rule
* Easily to test the rules;
* More control about the rules that will be applied (with the git * history too);
* Need a BE dev to add to rule;
* Need a code delivery in production to the rule starts to be applied;

##### Persistent rule
* Easy to add the rule (even the people from business can do it);
* We don’t have a clear view of which rules are being added in production;
* Need validation when the rule is created. Like if the fields are correct for that object;
* Maybe it is not a good idea to use a library with this approach, otherwise we’ll be coupled by the engine structure.

### Libraries

#### [JSON Rule Engine](https://github.com/mathulbrich/rule-engine-poc/tree/json-rule-engine)

###### Advantages
* Few dependencies (about 5) and easy to use;
* Most used library for rule engine in JS (with good activity);
* We can add our custom operations and conditions, with complex rules;
* Do not break if the field of validation is not present;
* We can create a validation with nested fields in a object;
* Is possible to add rules with ANY / ALL conditions;

###### Disadvantages
* The object validation fields is not typed, so will be validated on run-time;
* The rule structure will be very coupled with the library;

#### [Zod](https://github.com/mathulbrich/rule-engine-poc/tree/zod-rule-engine)

###### Advantages
* Small library with no dependencies. (Also, the same library that can be used in validation service);
* A good library with updated and improvement activities. Also have a active and good community, and is widely used library;
* The object validation is typed, so it’s easy to validate if all fields types are ok;
* Have a lot of default operations, but we can customize every validation we made with a function, so it’s very open;
* The object structure is very flexible to create simple and nested validations;


###### Disadvantages
* It's not a rule engine, so for complex rules the syntax can be more hard to understand than a normal rule engine;
* It’s a little more boring to add ANY / ALL conditions, but it’s possible.
* It’s already know that some updates of zod have breaking changes, so, sometimes after update the library we’ll need to make adjustments;

### Discarded Libraries

#### Rools

###### Reasons

* Not too well know library;
* Need to have a asynchronous callback for rule validations;

#### Node Rules

###### Reasons

* Not too well know library;
* Don't have type support for Typescript;

#### Nools

###### Reasons

* Library deprecated;
* High number of dependencies;

### References

* https://github.com/cachecontrol/json-rules-engine
* https://github.com/colinhacks/zod
* https://github.com/frankthelen/rools
* https://github.com/mithunsatheesh/node-rules
* https://github.com/noolsjs/nools
* https://martinfowler.com/bliki/RulesEngine.html
* http://www.jbug.jp/trans/jboss-rules3.0.2/ja/html/ch01s02.html
