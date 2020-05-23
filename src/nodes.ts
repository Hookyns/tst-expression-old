import {ExpressionKind} from "./enums";

/**
 * Expression node of ArrowFunction
 */
export type ArrowFunctionExpressionNode = ExpressionNode & {
	body: ExpressionNode;
	parameters: Array<ParameterExpressionNode>;
};

/**
 * Expression node of function parameter
 */
export type ParameterExpressionNode = ExpressionNode & {
	name: IdentifierExpressionNode;
	dotDotDotToken: undefined | ExpressionNode;
};

/**
 * Expression node of identifier
 */
export type IdentifierExpressionNode = ExpressionNode & {
	escapedText: string;
};

/**
 * Expression node of property access
 */
export type PropertyAccessExpressionNode = ExpressionNode & {
	expression: PropertyAccessExpressionNode | IdentifierExpressionNode | NonNullExpressionNode | ElementAccessExpressionNode;
	name: IdentifierExpressionNode;
	questionDotToken?: ExpressionNode;
};

/**
 * Expression node of element access
 */
export type ElementAccessExpressionNode = ExpressionNode & {
	expression: PropertyAccessExpressionNode | IdentifierExpressionNode | NonNullExpressionNode | ElementAccessExpressionNode;
	argumentExpression: ExpressionNode;
	questionDotToken?: ExpressionNode;
};

/**
 * Expression node of binary expression
 */
export type BinaryExpressionNode = ExpressionNode & {
	left: ExpressionNode;
	right: ExpressionNode;
	operatorToken: ExpressionNode;
};

/**
 * Expression node of prefix unary expression
 */
export type PrefixUnaryExpressionNode = ExpressionNode & {
	operator: ExpressionKind;
	operand: ExpressionNode;
};

/**
 * Expression node of call expression
 */
export type CallExpressionNode = ExpressionNode & {
	expression: ExpressionNode;
	questionDotToken?: ExpressionNode;
	arguments: Array<ExpressionNode>
};

/**
 * Expression node of string literal
 */
export type StringLiteralNode = ExpressionNode & {
	text: string;
};

/**
 * Expression node of numeric literal
 */
export type NumericLiteralNode = ExpressionNode & {
	text: string;
};

/**
 * Expression node of non-null expression "!."
 */
export type NonNullExpressionNode = ExpressionNode & {
	expression: ExpressionNode
};

/**
 * Expression node of parenthesis
 */
export type ParenthesizedExpressionNode = ExpressionNode & {
	expression: ExpressionNode
};