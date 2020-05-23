import {ExpressionKind} from "./src/enums";

/**
 * Expression interface
 */
type Expression<TType> = TType &
	{
		/**
		 * Compiled, executable, expression
		 */
		compiled?: TType;

		/**
		 * TypeScript expression tree
		 */
		expression?: ExpressionNode;

		/**
		 * Context variables
		 */
		context?: { [key: string]: any };
	};

/**
 * Realtime expression type
 * @description Need distinguish behavior for compiled and runtime expressions. Maybe this will change - decorator can be used.
 */
type RuntimeExpression<TType> = Expression<TType>;

// noinspection JSUnusedGlobalSymbols
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
	expression: PropertyAccessExpressionNode | IdentifierExpressionNode | NonNullExpressionNode | ExpressionNode;
	name: IdentifierExpressionNode;
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
type NonNullExpressionNode = ExpressionNode;

declare interface ExpressionNode {
	kind: import("./src/enums").ExpressionKind;
	flags: import("./src/enums").NodeFlags;
	// decorators?: Array<Decorator>;
	// modifiers?: ModifiersArray;
}

interface Window
{
	Expression: Expression<any>
}

declare module NodeJS
{
	interface Global
	{
		Expression: Expression<any>
		RealtimeExpression: RuntimeExpression<any>
	}
}
