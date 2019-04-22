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

type ArrowFunctionExpressionNode = ExpressionNode & {
	body: ExpressionNode;
	parameters: Array<ParameterExpressionNode>;
};

type ParameterExpressionNode = ExpressionNode & {
	name: IdentifierExpressionNode;
	dotDotDotToken: undefined | ExpressionNode;
};

type IdentifierExpressionNode = ExpressionNode & {
	escapedText: string;
};

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
	}
}