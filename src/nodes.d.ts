import {ExpressionKind} from "./enums";

/**
 * Expression node of ArrowFunction
 */
type ArrowFunctionExpressionNode = ExpressionNode & {
	body: ExpressionNode;
	parameters: Array<ParameterExpressionNode>;
};

/**
 * Expression node of function parameter
 */
type ParameterExpressionNode = ExpressionNode & {
	name: IdentifierExpressionNode;
	dotDotDotToken: undefined | ExpressionNode;
};

/**
 * Expression node of identifier
 */
type IdentifierExpressionNode = ExpressionNode & {
	escapedText: string;
};

/**
 * Expression node of property access
 */
type PropertyAccessExpressionNode = ExpressionNode & {
	expression: PropertyAccessExpressionNode | IdentifierExpressionNode | NonNullExpressionNode | ElementAccessExpressionNode;
	name: IdentifierExpressionNode;
	questionDotToken?: ExpressionNode;
};

/**
 * Expression node of element access
 */
type ElementAccessExpressionNode = ExpressionNode & {
	expression: PropertyAccessExpressionNode | IdentifierExpressionNode | NonNullExpressionNode | ElementAccessExpressionNode;
	argumentsExpression: ExpressionNode;
	questionDotToken?: ExpressionNode;
};

/**
 * Expression node of binary expression
 */
type BinaryExpressionNode = ExpressionNode & {
	left: ExpressionNode;
	right: ExpressionNode;
	operatorToken: ExpressionNode;
};

/**
 * Expression node of prefix unary expression
 */
type PrefixUnaryExpressionNode = ExpressionNode & {
	operator: ExpressionKind;
	operand: ExpressionNode;
};

/**
 * Expression node of call expression
 */
type CallExpressionNode = ExpressionNode & {
	expression: ExpressionNode;
	questionDotToken?: ExpressionNode;
	arguments: Array<ExpressionNode>
};

/**
 * Expression node of string literal
 */
type StringLiteralNode = ExpressionNode & {
	text: string;
};

/**
 * Expression node of numeric literal
 */
type NumericLiteralNode = ExpressionNode & {
	text: string;
};

/**
 * Expression node of non-null expression "!."
 */
type NonNullExpressionNode = ExpressionNode & {
	expression: ExpressionNode
};

/**
 * Expression node of parenthesis
 */
type ParenthesizedExpressionNode = ExpressionNode & {
	expression: ExpressionNode
};