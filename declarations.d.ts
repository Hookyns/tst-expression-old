/**
 * Expression interface
 */
type Expression<TType> =
	{
		/**
		 * Compiled, executable, expression
		 */
		compiled: TType;

		/**
		 * TypeScript expression tree
		 */
		expression: ExpressionNode;

		/**
		 * Context variables
		 */
		context: { [key: string]: any };
	} | TType;

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